# Agent Invocation Contract

Use this file when an agent cannot automatically discover Codex-style skills.

## Trigger

Invoke this skill when the user provides any of the following and asks for IP litigation path selection, high damages feasibility, infringement assessment, evidence plan, jurisdiction, defendants, or a DOCX report:

- right holder, brand, product, copyrighted work, patent, trademark, or company;
- infringement link, store, platform account, product page, app, listing, content page, or screenshots;
- suspected infringer, producer, seller, uploader, store operator, or platform.

## Required Load Order

1. Read `SKILL.md`.
2. For a full assessment, read these references before drafting:
   - `references/workflow.md`
   - `references/access-priority.md`
   - `references/rights-search-methods.md`
   - `references/search-investigation.md`
   - `references/path-selection.md`
   - `references/jurisdiction-defendants.md`
   - `references/evidence-damages-defenses.md`
   - `references/output-template.md`
3. If the user asks only a narrow question, read only the relevant reference files.

## Minimum Input Handling

If the user gives only `权利人 + 侵权链接`, proceed. Extract all available facts from the link and public search. Mark missing items as `待核验`; do not ask for more information unless the target cannot be identified at all.

## Non-Skippable Steps

1. Search the right holder's trademarks, patents, and copyright assets.
2. Search the accused side's trademarks, patents, and copyright assets.
3. Access or preserve the accused page using the access ladder.
4. Compare packaging / product appearance / expressive content when relevant.
5. Score trademark, unfair competition, patent, and copyright paths.
6. Choose one primary path and backup paths.
7. Build jurisdiction, defendant, damages, evidence, and defense strategy.
8. Generate a human-readable `.docx` report for full assessments.

## Final Response

Return a short delivery note with the report path. Do not paste the whole report into chat unless the user asks for chat-only output.

