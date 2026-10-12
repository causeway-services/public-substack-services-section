import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const bytes = (path) => readFileSync(new URL(path, root));
const section = (doc, start, end) => {
  const at = doc.indexOf(start);
  assert.ok(at >= 0, 'missing section: ' + start);
  const until = doc.indexOf(end, at + start.length);
  assert.ok(until > at, 'missing following section: ' + end);
  return doc.slice(at, until);
};
const publishedSection = ledger => section(
  ledger, '## Provider-evidenced published editions', '## Letter-to-the-Web release-ready catalog'
);
const parseEvidence = ledger => {
  const block = publishedSection(ledger);
  const rows = block.split('\n').filter(x => x.startsWith('| ') && !x.startsWith('| ---'));
  assert.ok(rows.length > 1, 'no provider observations');
  const header = rows.shift();
  assert.match(header, /Provider mail ID/);
  const entries = rows.map(line => {
    const m = /^\| (.+?) \| (\d{4}-\d{2}-\d{2}) \| `(S[tu][A-Za-z0-9_-]+)` \| (.+?) \|$/.exec(line);
    assert.ok(m, 'malformed publisher receipt row: ' + line);
    return { title: m[1], observed: m[2], mailId: m[3], url: m[4] };
  });
  return entries;
};

const grayEssay = 'content/manuscripts/archive/2026-07-10-the-gray-completion-essay.md';
const timeEssay = 'content/manuscripts/release-ready/2026-09-30-what-does-it-mean-to-believe-in-time.md';
const timeRecord = 'content/releases/unpublished/2026-09-30-what-does-it-mean-to-believe-in-time.release.md';

test('received manuscripts match the original, not a normalized textual copy', () => {
  const sha256 = path => createHash('sha256').update(bytes(path)).digest('hex');
  assert.equal(sha256(timeEssay), 'a26588c36d76b044b3d9f3f47037e2964242354a947cafce13a3416bdf790b3d');
  assert.equal(sha256(grayEssay), '01f76dcc9ce94573180bc106092b75d735b674e8efced3e40a5da052c173ad8a');
  assert.ok(read(timeEssay).endsWith('\n'));
  assert.ok(read(grayEssay).endsWith('\n'));
});

test('a release-ready manuscript cannot be interpreted as publication authorization', () => {
  const r = read(timeRecord);
  assert.match(r, /^release-state:\s*release-ready\s*$/m);
  assert.match(r, /^publication-authorized:\s*false\s*$/m);
  assert.match(r, /Publication:\s*\*\*NOT PERFORMED\.\*\*/);
  assert.match(read(grayEssay), /^format:\s*"Substack essay draft"\s*$/m);
});

test('provider publication entries have unique evidence and dates, without invented release timestamps', () => {
  const entries = parseEvidence(read('content/publications.md'));
  assert.ok(entries.length >= 53, 'previously received publication observations have disappeared');
  assert.equal(new Set(entries.map(x => x.title)).size, entries.length, 'duplicate published title');
  assert.equal(new Set(entries.map(x => x.mailId)).size, entries.length, 'duplicate provider message');
  for (const x of entries) {
    assert.match(x.observed, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(Number.isFinite(Date.parse(x.observed + 'T00:00:00Z')));
    assert.ok(x.url === '—' || /^https:\/\/emsenn\.substack\.com\/p\/[a-z0-9-]+$/.test(x.url), 'bad or invented public permalink');
  }
  const ledger = read('content/publications.md');
  assert.match(publishedSection(ledger), /upper bound\s+on publication time/);
  assert.match(publishedSection(ledger), /not the publication date/);
});

test('known published works have source mail receipts', () => {
  const rows = parseEvidence(read('content/publications.md'));
  const get = title => rows.find(x => x.title === title);
  assert.equal(get('The Theory That Survived The War')?.mailId, 'StwiDjpdsVDw');
  assert.equal(get('The Nervous Ally')?.mailId, 'Stz0f77SA9HV');
  assert.equal(get('A Different System is Not an Alternative')?.url,
    'https://emsenn.substack.com/p/a-different-system-is-not-an-alternative');
});

test('the two author-corrected unpublished titles cannot reenter published rows', () => {
  const ledger = read('content/publications.md');
  const notPublished = section(ledger, '## Not published', '## Review manuscripts');
  const entries = parseEvidence(ledger);
  for (const title of ['The Gray Completion', 'What Does It Mean to Believe in Time?']) {
    assert.ok(notPublished.includes(title), 'missing explicit author correction: ' + title);
    assert.ok(!entries.some(x => x.title.toLowerCase() === title.toLowerCase()),
      'unpublished work misclassified as a published edition: ' + title);
  }
});
