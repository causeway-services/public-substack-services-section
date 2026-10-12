# Substack publication and editorial custody

**Owner:** `emsenn/substack` (mounted by `emsenn/emsweb/services/substack`).  
**Reconciled:** 2026-10-12. This is an evidence-bounded view, **not a complete Substack account export**.

## Rules for interpreting this record

A **scientific topic**, a **scientific research artifact**, an **author's manuscript**, a **release-ready manuscript**, an **authorized publication action**, and a **published edition** are distinct resources. One title can name more than one. Their states do not propagate by coincidence of title.

A **published edition** requires evidence of the *particular* edition's public release: a real public Substack URL and publication date or another authenticated platform release receipt. A draft in a GitHub or Drive folder, a planned cadence, a release-ready record, an authoring file, or an assistant's recollection **does not establish publication**. Nor does absence from a repository establish non-publication. The user's explicit correction is authoritative when an assistant made an ungrounded status claim.

An **author's permission to publish** and **proof of actual publication** are also separate. No release in this ledger is authorized by its mere presence. This ledger and all imported manuscripts are **private working custody**, not release commands.

## Not published — the author's correction is controlling

| Work | What actually exists | Release conclusion |
| --- | --- | --- |
| **The Gray Completion** | An older authored essay at [`content/manuscripts/archive/2026-07-10-the-gray-completion-essay.md`](manuscripts/archive/2026-07-10-the-gray-completion-essay.md); also a **different**, separately authored *working research article* titled *The Gray Completion: Place, Time, and Language Models as State-Realizers of Governance* in the Library | **NOT PUBLISHED.** An essay copy is an archived draft; a separate scientific paper is a research article, not a newsletter edition |
| **What Does It Mean to Believe in Time?** | Complete [September 30 manuscript](manuscripts/release-ready/2026-09-30-what-does-it-mean-to-believe-in-time.md) and a separate [release record](releases/unpublished/2026-09-30-what-does-it-mean-to-believe-in-time.release.md) | **NOT PUBLISHED**; editorially **release-ready**, publication-authorized **false**, publication **not performed** |

The September 30 manuscript is attributed to emsenn, subtitled *Vine Deloria Jr. and the politics of where authority lives*. Its source bytes (Library `/letter-to-web/release-ready/2026-09-30-what-does-it-mean-to-believe-in-time.md`) are identified by SHA-256 `a26588c36d76b044b3d9f3f47037e2964242354a947cafce13a3416bdf790b3d`. The older release record says repository synchronization was incomplete **at that time**; on 2026-10-12 its text and manuscript were actually received in this GitHub repository. Do not rewrite the historical record to claim it was synchronized earlier.

The Gray Completion essay originally existed in the Library as `the-gray-completion-essay.md` (2026-07-10); its separate `the-gray-completion.md` is a working **scientific article** proposed for *Environment and Planning D: Society and Space*. Do not put that article here, relabel it an essay, or treat the essay as evidence of scientific acceptance.

**Explicit correction:** On 2026-10-12 emsenn stated that neither title is published. Earlier assistant commit `d899833bc7c03a995a56b4310c8db899421cb9c7` falsely asserted both were author-confirmed published on 2026-09-29. That statement has **no supporting publication receipt and is retracted**. Treat the 2026-10-12 correction and source release record as the surviving reading, regardless of prior assistant language.

## Review manuscripts — not scheduled or published

### Lochiel

A *new private review manuscript*, [**Lochiel after Grandmother — Draft for review**](https://docs.google.com/document/d/1_USYPlxTYAPSb8lp5erlCrHtdaxpLXOcd8H_vp_b380/edit), was modified October 5, 2026. Its corresponding [**Lochiel newsletter review notes**](https://docs.google.com/document/d/1Gv9mKnG4oyhjgq5rCCWipmTUGLwVoJoUE9mxZRxAnTA/edit) expressly state: not a recovered native Substack draft; **not published or scheduled**; first-person framing/title await emsenn's editorial decision. The earlier, separate [**Lochiel and the history carried by the border — emsenn review draft**](https://docs.google.com/document/d/1A4oaEZ18MRCyfgttUqyDEtS_0K5HwEmJd0oKJSk_bkU/edit) is a prior review version, **not** an independent queued publication.

**Open source checks for the newer review candidate:** the introduction and later removal passage omit the October 5 day/date; a Jackson report's specific date is omitted; the year of a Gadsden railroad letter is omitted; and a newspaper date is omitted. Fix from grounded sources, not guesses; preserve voice and do not infer author approval. Editorial defects are tracked at [`content/reviews/2026-10-12-lochiel.md`](reviews/2026-10-12-lochiel.md).

### The Black Hills Were Not for Sale

An author's historical essay of **unverified creation date** was recovered from the Library (`the_black_hills_were_not_for_sale.md`) and received unchanged in [`content/manuscripts/review/the-black-hills-were-not-for-sale.md`](manuscripts/review/2026-06-25-the-black-hills-were-not-for-sale.md). **Review text only**: a formerly assumed June 25 file-date was removed as unsupported by the source; no publication authorization, platform draft receipt, or published edition is established here. It may be the “history piece” referenced in conversation, but that identification is not independently confirmed. Treat its historiography and supporting research as separate from its personal-essay composition.

### Other older prose and topics

An older document named `Draft, Meaningless Labor and Confusion as Crisis Deferral.md` exists in `emsenn/content:triage/old-notes/zeds/doc/post/emsenn/Kolektiva/`. Its historical filename does not establish an *active Substack draft*. **Meaningless labor** is also an open research topic and is not constrained to one essay. Do not populate a publication queue from evocative research topics.

## Public editions (verified/previously recorded, partial)

| Title | Observed published date | Public link | Confidence |
| --- | --- | --- | --- |
| A Different System is Not an Alternative | 2026-06-25 | https://emsenn.substack.com/p/a-different-system-is-not-an-alternative | Public article previously verified |
| Of ducks and illusions | 2020-11-16 | https://emsenn.substack.com/p/of-ducks-and-illusions | Public article previously verified |
| On decolonizing my Web use | 2020-10-30 (earlier ledger; date needs recheck) | https://emsenn.substack.com/p/on-decolonizing-my-web-use | Earlier ledger; reverify public visibility and date |

These three are **not** evidence that any of the works above were published. This is deliberately incomplete; the account itself, not a speculative local reconstruction, controls the complete set of public editions.

## Letter-to-the-Web release-ready catalog

The Library's `/letter-to-web/release-ready/INDEX.md` (2026-10-05) lists **25 release records**, each with its own manuscript and state. It is a **read model**, not the canonical text of each manuscript or a publication mandate; the catalog says `published: false`, `publication-authorized: false`. Its historical copy is not an editor's live platform inventory. Before importing any more, verify individual authoritative release records and avoid recopying the full backlog into yet another unmaintained catalog. The distinct Library `/letter-to-web/CURRENT.md` is a projection, not a competing authoritative state.

## Remaining operational reconciliation

1. Obtain authenticated native Substack *published* and *editor-draft* inventories. Native editor draft state cannot be inferred from Drive or GitHub text.
2. Match a specific edition by real publication receipt, URL, date and version, not only by title. Mark unresolved identities unresolved.
3. Prioritize the actual Lochiel source/date corrections and the recovered historical essay's review without changing the author's voice or conflating historical research with personal writing.
4. Record new release receipts and current source revisions here only on evidence. Every GitHub update must be **received** through the `emsenn/emsweb` submodule pin and verified.
