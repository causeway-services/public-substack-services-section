# Substack publication ledger — reconciled claims

Owner: `emsenn/substack` (private), under `emsenn/emsweb`.
Last reconciled: 2026-10-12.
**This is a partial ledger, not a census of all posts or manuscript versions.**

## Publication-state policy

A topic, an authored manuscript, and a published edition are separate resources. **A publication claim must identify a specific edition and carry an observable release receipt** (the real public URL and publication date, a Substack record, or a direct contemporaneous author report). Missing GitHub files never imply a work is a draft; topic names never imply a manuscript exists. A publication claim without a receipt is **unverified**, not published. A direct author correction of publication state supersedes earlier assistant inferences. Preserve that correction as evidence; do not silently reassert the disproven status.

Every edition's state is scoped to a **particular artifact/version on a particular platform**. A research theme may share its title but does not inherit that edition's state. Platform draft state is distinct from a locally edited manuscript.

## Explicitly **not published** on Substack (author correction 2026-10-12)

| Title/reference | Correct status | Manuscript/version custody |
| --- | --- | --- |
| **The Gray Completion** | **NOT PUBLISHED**. Research-topic title; no published Substack edition attested | Locate any authored manuscript separately; cannot claim one exists merely from this title |
| **What Does It Mean to Believe in Time?** | **NOT PUBLISHED**. Research-topic title; no published Substack edition attested | Locate any authored manuscript separately; cannot claim one exists merely from this title |

**Correction of erroneous commit `d899833bc7c03a995a56b4310c8db899421cb9c7`:** the previous edition of this ledger falsely stated that emsenn explicitly confirmed these two titles as *published* on 2026-09-29. That assertion was unfounded and is withdrawn. emsenn explicitly corrected the publication state on **2026-10-12**. The record must never be used as publication evidence. No Substack permalink, publishing timestamp, publication receipt, or exact authored manuscript has been verified for either title here.

## Substack pages with observed published editions

These are **distinct existing Substack posts**, not evidence that other similarly titled work has been released.

| Title | Observed date | URL | Evidence |
| --- | --- | --- | --- |
| A Different System is Not an Alternative | 2026-06-25 | https://emsenn.substack.com/p/a-different-system-is-not-an-alternative | Public article URL and dated article page observed 2026-10-12 |
| Of ducks and illusions | 2020-11-16 (date previously recorded, not rechecked this audit) | https://emsenn.substack.com/p/of-ducks-and-illusions | Public article URL and page observed 2026-10-12 |
| On decolonizing my Web use | 2020-10-30 (earlier ledger) | https://emsenn.substack.com/p/on-decolonizing-my-web-use | URL recorded in earlier ledger; live page not independently retrievable in 2026-10-12 check; **reverify**, do not infer deletion or non-publication |

This table is *incomplete*, and the date/evidence qualifications are deliberate.

## Manuscript-recovery leads, not declared draft status

- **Lochiel:** emsenn identified writing needing Substack attention on 2026-10-12. The canonical authored file, exact title, and any Substack draft/release receipt remain unlocated. This is a search lead, not a published or unpublished *edition* record.
- **The history piece:** likewise a lead identified by emsenn, with its exact identity and original authoring version unlocated.
- **Meaningless Labor and Confusion as Crisis Deferral:** an old document exists at `emsenn/content:triage/old-notes/zeds/doc/post/emsenn/Kolektiva/Draft, Meaningless Labor and Confusion as Crisis Deferral.md`. Its **historical** “Draft” filename is not evidence of a current Substack draft. Its associated research theme is independent.

## Reconciliation procedure (work not yet complete)

1. Inventory live newsletter releases from the authenticated Substack account or public archive, recording **exact** URLs, titles, release timestamps, and when verified.
2. Independently inventory current authoring manuscripts (including private Substack editor drafts if authorized access exists). Identify each file/version by URI/revision and author. Do not invent manuscript objects.
3. Reconcile published URLs and manuscripts using proven identities; unresolved matches remain unresolved. Create distinct entries when a revised or reposted edition is actually released.
4. Identify unanswered writing work and commission optional supporting scientific research from the appropriate scientific domain. **Scientific topics are not themselves editorial queue items.**
5. On every publication-state change, require the new receipt/evidence, update this ledger, and advance the `emsenn/emsweb` submodule pin. Verify downstream readback.
