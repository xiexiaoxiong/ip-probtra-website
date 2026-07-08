# IP Probtra Agent Skills

This repository includes reusable agent skills for plaintiff-side PRC IP litigation investigation and strategy.

## Available Skill

- [`IP-Proposal`](skills/ip-proposal/README.md): investigate a right holder and suspected infringement target, compare trademark / unfair competition / patent / copyright paths, and generate a human-readable `.docx` litigation proposal report.

## Quick Use

The simplest way to install it in another agent is to paste this prompt to that agent:

```text
请帮我安装 IP-Proposal skill。
GitHub 地址：https://github.com/xiexiaoxiong/ip-probtra-website/tree/main/skills/ip-proposal

请你自行完成安装：
1. 如果你支持 Codex/OpenAI 风格的 skill，请把该目录安装为 ip-proposal，并确保我可以用 $ip-proposal 调用；
2. 如果你不支持这种 skill 机制，请把 SKILL.md 和 references/ 作为你的提示词包/知识包，并配置 $ip-proposal 别名；
3. 安装后告诉我具体调用方式，并用一句话确认你会在完整评估时生成 DOCX 诉讼方案报告。
```

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
