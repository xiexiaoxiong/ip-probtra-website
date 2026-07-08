# IP High Damages Selector

`ip-high-damages-selector` is an agent skill for selecting the strongest plaintiff-side PRC intellectual-property litigation path when the available facts start from a right holder, an infringement link, a store, product, platform account, or suspected infringer.

It is designed for cases where the user wants a practical high-damages litigation report, not a generic legal memo.

## What It Generates

For a full case assessment, the skill generates a human-readable `.docx` report covering:

- right-holder and accused-side trademark, patent, and copyright inventory;
- live-link access attempts and blocked-page handling;
- plaintiff/accused product packaging or expression comparison;
- trademark, unfair competition, patent, and copyright route scoring;
- recommended primary cause of action and backup paths;
- defendant structure, candidate jurisdiction, and platform strategy;
- claim amount model and high-damages feasibility;
- evidence collection plan, defendant defenses, and immediate action list.

## Minimum Input

Yes: if you provide only the right holder and an infringement link, the skill can generate an initial report.

Example:

```text
用 $ip-high-damages-selector 评估。
权利人：某品牌/某公司
侵权链接：https://example.com/item/123
```

However, the report will mark missing facts as `待核验`. A stronger high-damages report usually improves materially when the user also provides:

- suspected infringer or store name;
- screenshots or product packaging photos;
- plaintiff product photos and rights certificates;
- sales, price, reviews, order, invoice, or platform data;
- target court, target claim amount, or existing evidence package.

## Core Rule

The skill must not jump directly to trademark infringement.

For product cases it must first:

1. inventory the right holder's trademarks, patents, and copyright assets;
2. inventory the accused side's trademarks, patents, and copyright assets;
3. compare plaintiff and accused packaging / appearance / expression;
4. then choose the best path among trademark, unfair competition, patent, and copyright.

This is especially important when the accused product uses its own mark but imitates packaging or trade dress. In that scenario, unfair competition may be stronger than trademark infringement.

## Install For Codex

Copy the skill folder into Codex's skill directory:

```bash
cp -R skills/ip-high-damages-selector ~/.codex/skills/
```

Codex will discover it by the frontmatter in `SKILL.md`.

## Use With OpenClaw Or Other Agents

If the agent does not support Codex skill discovery, treat this folder as a prompt package:

1. Load `SKILL.md` as the main instruction.
2. When the task is a full case assessment, also load every file listed under `Required References` in `SKILL.md`.
3. Allow browser/search access for live links, rights databases, platform pages, and corporate/court sources.
4. Allow document generation to produce a `.docx` report.
5. Follow `references/output-template.md` for final report structure.

A simple alias can be:

```text
$ip-high-damages-selector = Read SKILL.md, follow its Required References, investigate the right holder and infringement target, then produce the DOCX report required by output-template.md.
```

See [`AGENTS.md`](AGENTS.md) for a compact cross-agent invocation contract.

## Expected Environment

Recommended capabilities:

- web search and browser access;
- image inspection for product/packaging comparison;
- `.docx` creation, preferably with render/preview verification;
- local filesystem access for saving reports and evidence snapshots.

If a platform page is blocked by login, CAPTCHA, app-only rendering, or risk controls, the skill should not guess. It should record the access limitation and prescribe lawful browser login, app-side notarization, trusted timestamp preservation, or platform data disclosure.

## Output Contract

For full assessments, the final chat response should be short and link the generated `.docx` report. The substantive analysis belongs in the document.

If the report cannot be generated as `.docx`, the agent should state why and provide the best available fallback.

## Legal Use

This skill is a litigation strategy and investigation aid. It does not guarantee outcome, court acceptance, infringement finding, or damages amount. Final filings should be reviewed by qualified counsel using official rights records, notarized evidence, and the current law and court practice.
