# emsenn’s letters to the Web — Substack service

This is an **independent, private repository** for emsenn’s newsletter service, currently named `emsenn/substack` and packaged as `@emsweb/substack`. It is mounted by `emsenn/emsweb` at `services/substack`. The public publication is [emsenn’s letters to the Web](https://emsenn.substack.com/). Keeping the existing, connected repository avoids making a second, competing Substack service.

July 2026 service-formation decisions, requirements, tasks, and work-items are preserved byte-for-byte under [`archive/formation/`](archive/formation/README.md), **not** as active publishing work. Their original proposal/requirement states concern standing up a now-existing service and must not be used to infer the status of manuscripts or releases. The live [publication ledger](content/publications.md) and separately identified author manuscripts control current publishing status.

## What this service owns

The **author’s publication and distribution work**: edition custody, what was actually published, publication dates and permalinks, newsletter-specific editorial plans, rights/attribution, corrections, and distribution results. See [the reconciled publication inventory](content/publications.md).

Do not use this repository as the authority for scientific conclusions, proof status, historical claims, or generic research methods. The scientific work belongs to the appropriate *specialized* Lenticule Science domain repository or section; reusable research execution is supplied by Coesite Operations’ Research Operations Services Section. An essay can cite or inspire science without becoming a scientific paper; a paper can inspire many pieces of writing without dictating their voice.

## Four distinct things, four distinct statuses

- **Research topic** — a problem or family of questions. It belongs to the scientific domain working on it, whether or not an essay with a related title exists. It has research maturity, not Substack publication status.
- **Research artifact** — a paper, dataset, proof, source assessment, or result. Its validity depends on its own method and review. It is not automatically readable as a letter to subscribers.
- **Authored manuscript** — emsenn’s writing. Its literary and personal choices are not reducible to proof structure. Only an identified manuscript/version is a *draft*; a title or an upstream idea is not.
- **Published edition** — an actual release at a particular URL/date. Its publication state comes from the platform, author’s explicit statement, or a dated release receipt; the absence of a copy in GitHub never makes it a draft.

These are related through explicit references, **not** by forcing a one-to-one mapping or by rewriting research to sound literary (or writing to sound like research). A published letter may later generate a new research question. No retroactive reclassification.

## Authorial voice and platform affect (reuse the existing capability)

The author's actual voice belongs to the personal writing library, **not** to Lenticule's scientific-paper methods and **not** to a new Substack-specific imitation engine. The existing source is [`write-in-voice-of-emsenn`](https://github.com/emsenn/content/blob/main/personal/skills/write-in-voice-of-emsenn/SKILL.md), informed by [observed voice notes](https://github.com/emsenn/content/blob/main/personal/writing/style/voice-notes.md) and the [polemic register](https://github.com/emsenn/content/blob/main/personal/writing/style/polemic-register.md). Those are **existing author-owned resources**; this service points to them rather than forking them into another skill.

The distinction between platform feeling rules and author voice is substantive. The original [feeling-rules concept](https://github.com/emsenn/content/blob/main/sociology/terms/feeling-rules.md) treats genre and platform expectations as normative constraints that can distort what may be said. A Substack edition should **study** those expectations and make deliberate editorial choices; it must not automatically conform the author's analysis to manufactured grief, hope, outrage, closure or a generic engagement arc. This author specifically rejects persuasion-through-affect as a substitute for demonstrating the material object. Newsletter affordances (email subject, excerpts, links, distribution, subscriber relation) are distinct parameters from voice and scientific evidence.

**Execution boundary:** scientific or historical findings are separately produced/reviewed by their scientific domain; this service receives only the particular claims the author elects to use and the actual working manuscript. The authorial writing skill may help with composition but **does not confer author approval**. The Substack platform may independently publish an approved edition, after which this service receives the real permalink/date/content receipt. **No scientific paper is required for every personal letter**, and no personal letter becomes a scientific paper by being backed by source citations.

## Operating practice

1. Reconcile actual releases with the newsletter and author before classifying old files. Do not infer publication state from filenames like `draft`, from a missing local copy, or from an article title that also names a research theme.
2. Keep the public URL, title, release date (when observed), and evidence of publication in `content/publications.md`. Distinguish user-attested publication from independently retrieved permalink.
3. Recover original author manuscripts independently, including their prose, dates, and intended treatment. Archived prose is not an active writing assignment merely because it survives.
4. For **science-derived** editions, reference the upstream scientific result and trace *specific claims*. This is an optional relation between independent artifacts, not a requirement to write every personal letter as a research-summary.
5. Let the author determine voice and composition. Editing for Substack may change pacing and framing but does not silently strengthen scientific assertions; scholarly writing is not normalized to a platform style.
6. After publication, reconcile the published version and permalink back here. Corrections affect the edition record; they do not edit an upstream scientific result by implication.

## Verification and operational receiving

Run `npm test` for publication evidence, exact received manuscript hashes and the original Git identities of the archived formation records. GitHub's `publication-custody.yml` **hires** Red Cup's reusable Node and content-check workflows rather than maintaining a separate CI engine.

**Current hosted-state caveat (2026-10-12):** GitHub Actions [issue #1](https://github.com/emsenn/substack/issues/1) records repeated hosted workflow failures **before runner assignment** (`runner_name` empty, `steps: []`, zero billable runner milliseconds). A GitHub commit or a successful direct file/AST assertion is *not* a green GitHub Actions run. Actual hosted CI remains **blocked/unverified** until a job executes on a runner and its checks pass; do not hide this by reporting direct assertions as CI success.

`emsenn/emsweb` is the downstream consumer. A child commit is **not received** by the parent merely because it exists on `main`. The parent must pin the child's exact commit at `services/substack`; verify both object IDs after each accepted source change. Neither a parent gitlink update nor a published-edition ledger entry performs a Substack platform release.

## Structural direction

`lenticule-science/science-services-section` and its domain services **produce or revise science**. `coesite-operations/operations-services-section/services/research-operations-services-section` **offers reusable research execution** to whichever office commissions it. `emsenn/substack` **owns emsenn’s newsletter editions and publication accounting**. `emsenn/emsweb` consumes this independently versioned service as a submodule.

The desired descriptive name `emsenn-substack-services-section` can be considered for a future repository rename; it is **not** the name of an additional repository and should not be used to duplicate this live service.
