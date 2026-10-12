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

const grayEssay = 'content/manuscripts/archive/2026-07-10-the-gray-completion-essay.md';
const timeEssay = 'content/manuscripts/release-ready/2026-09-30-what-does-it-mean-to-believe-in-time.md';
const timeRecord = 'content/releases/unpublished/2026-09-30-what-does-it-mean-to-believe-in-time.release.md';

// Source/version and publication-state regression tests, not a Substack release receipt.
test('received manuscripts preserve the source revisions', () => {
  const sha256 = (path) => createHash('sha256').update(bytes(path)).digest('hex');
  assert.equal(sha256(timeEssay), 'a26588c36d76b044b3d9f3f47037e2964242354a947cafce13a3416bdf790b3d');
  assert.equal(sha256(grayEssay), '01f76dcc9ce94573180bc106092b75d735b674e8efced3e40a5da052c173ad8a');
});

test('release-ready is not approval or publication', () => {
  const record = read(timeRecord);
  assert.match(record, /^release-state:\s*release-ready\s*$/m);
  assert.match(record, /^publication-authorized:\s*false\s*$/m);
  assert.match(record, /Publication:\s*\*\*NOT PERFORMED\.\*\*/);
  assert.match(read(grayEssay), /^format:\s*"Substack essay draft"\s*$/m);
});

test('corrected titles cannot quietly reappear as published editions', () => {
  const ledger = read('content/publications.md');
  const notPublished = section(ledger, '## Not published', '## Review manuscripts');
  const published = section(ledger, '## Public editions', '## Provider-reported publication evidence');
  for (const title of ['The Gray Completion', 'What Does It Mean to Believe in Time?']) {
    assert.ok(notPublished.includes(title), 'missing author correction: ' + title);
    assert.ok(!published.includes(title), 'wrongly inserted as published edition: ' + title);
  }
});

test('publisher stats messages are evidence, not invented release dates', () => {
  const ledger = read('content/publications.md');
  const receipts = section(ledger, '## Provider-reported publication evidence', '## Letter-to-the-Web release-ready catalog');
  assert.match(receipts, /The Nervous Ally/);
  assert.match(receipts, /The Theory That Survived The War/);
  assert.match(receipts, /on or before the statistics-email date/);
  assert.match(receipts, /does \*\*not\*\* establish the original publishing day/);
  const ids = [...receipts.matchAll(/\|\s*`(St[a-zA-Z0-9_-]+)`\s*\|/g)].map((match) => match[1]);
  assert.ok(ids.length >= 50, 'expected a substantial provider-stat observation sample');
  assert.equal(new Set(ids).size, ids.length, 'duplicate provider-message identity');
});
