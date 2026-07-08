# IP Probtra Agent Skills

This repository includes reusable agent skills for plaintiff-side PRC IP litigation investigation and strategy.

## Available Skill

- [`IP-Proposal`](skills/ip-proposal/README.md): investigate a right holder and suspected infringement target, compare trademark / unfair competition / patent / copyright paths, and generate a human-readable `.docx` litigation proposal report.

## Quick Use

For Codex-compatible agents, copy the skill folder into the agent's skill directory:

```bash
cp -R skills/ip-proposal ~/.codex/skills/
```

Then invoke:

```text
Use $ip-proposal.
权利人：某品牌/某公司
侵权链接：https://example.com/item/123
```

For OpenClaw or other agents without native Codex skill discovery, read [`AGENTS.md`](skills/ip-proposal/AGENTS.md) and load [`SKILL.md`](skills/ip-proposal/SKILL.md) plus the referenced files under `references/`.
