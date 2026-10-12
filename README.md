# emsenn’s letters to the Web — Substack service

This is an **independent, private repository** for emsenn’s newsletter service, currently named `emsenn/substack` and packaged as `@emsweb/substack`. It is mounted by `emsenn/emsweb` at `services/substack`. The public publication is [emsenn’s letters to the Web](https://emsenn.substack.com/). Keeping the existing, connected repository avoids making a second, competing Substack service.

## What this service owns

The **author’s publication and distribution work**: edition custody, what was actually published, publication dates and permalinks, newsletter-specific editorial plans, rights/attribution, corrections, and distribution results. See [the reconciled publication inventory](content/publications.md).

Do not use this repository as the authority for scientific conclusions, proof status, historical claims, or generic research methods. The scientific work belongs to the appropriate *specialized* Lenticule Science domain repository or section; reusable research execution is supplied by Coesite Operations’ Research Operations Services Section. An essay can cite or inspire science without becoming a scientific paper; a paper can inspire many pieces of writing without dictating their voice.

## Four distinct things, four distinct statuses

- **Research topic** — a problem or family of questions. It belongs to the scientific domain working on it, whether or not an essay with a related title exists. It has research maturity, not Substack publication status.
- **Research artifact** — a paper, dataset, proof, source assessment, or result. Its validity depends on its own method and review. It is not automatically readable as a letter to subscribers.
- **Authored manuscript** — emsenn’s writing. Its literary and personal choices are not reducible to proof structure. Only an identified manuscript/version is a *draft*; a title or an upstream idea is not.
- **Published edition** — an actual release at a particular URL/date. Its publication state comes from the platform, author’s explicit statement, or a dated release receipt; the absence of a copy in GitHub never makes it a draft.

These are related through explicit references, **not** by forcing a one-to-one mapping or by rewriting research to sound literary (or writing to sound like research). A published letter may later generate a new research question. No retroactive reclassification.

## Operating practice

1. Reconcile actual releases with the newsletter and author before classifying old files. Do not infer publication state from filenames like `draft`, from a missing local copy, or from an article title that also names a research theme.
2. Keep the public URL, title, release date (when observed), and evidence of publication in `content/publications.md`. Distinguish user-attested publication from independently retrieved permalink.
3. Recover original author manuscripts independently, including their prose, dates, and intended treatment. Archived prose is not an active writing assignment merely because it survives.
4. For **science-derived** editions, reference the upstream scientific result and trace *specific claims*. This is an optional relation between independent artifacts, not a requirement to write every personal letter as a research-summary.
5. Let the author determine voice and composition. Editing for Substack may change pacing and framing but does not silently strengthen scientific assertions; scholarly writing is not normalized to a platform style.
6. After publication, reconcile the published version and permalink back here. Corrections affect the edition record; they do not edit an upstream scientific result by implication.

## Structural direction

`lenticule-science/science-services-section` and its domain services **produce or revise science**. `coesite-operations/operations-services-section/services/research-operations-services-section` **offers reusable research execution** to whichever office commissions it. `emsenn/substack` **owns emsenn’s newsletter editions and publication accounting**. `emsenn/emsweb` consumes this independently versioned service as a submodule.

The desired descriptive name `emsenn-substack-services-section` can be considered for a future repository rename; it is **not** the name of an additional repository and should not be used to duplicate this live service.
