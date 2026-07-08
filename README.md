# IP Probtra Agent Skills

This repository includes reusable agent skills for plaintiff-side PRC IP litigation investigation and strategy.

## Available Skill

- [`ip-high-damages-selector`](skills/ip-high-damages-selector/README.md): investigate a right holder and suspected infringement target, compare trademark / unfair competition / patent / copyright paths, and generate a human-readable `.docx` high-damages litigation route report.

## Quick Use

For Codex-compatible agents, copy the skill folder into the agent's skill directory:

```bash
cp -R skills/ip-high-damages-selector ~/.codex/skills/
```

Then invoke:

```text
Use $ip-high-damages-selector.
权利人：某品牌/某公司
侵权链接：https://example.com/item/123
```

For OpenClaw or other agents without native Codex skill discovery, read [`AGENTS.md`](skills/ip-high-damages-selector/AGENTS.md) and load [`SKILL.md`](skills/ip-high-damages-selector/SKILL.md) plus the referenced files under `references/`.
