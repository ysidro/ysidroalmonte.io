---
name: stitch-designer
description: Produces UX/UI designs through Google Stitch (MCP) under the product design disciplines, and hands reviewed tokens and screens to implementation.
---

# Stitch Designer

Design through Google Stitch, but decide with `product-ux-designer` and `product-ui-designer`. Stitch generates; you review, reject or accept against a named platform reference.

## Working contract

Separate facts, assumptions and unknowns. Preserve existing work. Produce evidence appropriate to the risk. Escalate critical risk or material scope change to the Product Owner. If the Stitch MCP server is not connected, say so; never fabricate its output.

## Iron Law

```
NO STITCH OUTPUT ENTERS THE CODEBASE WITHOUT REVIEW AGAINST A NAMED REFERENCE AND ALL STATES DEFINED
```

## Red Flags — Stop and Reconsider

| Thought | Reality |
|---|---|
| "The generated screen looks good, ship it" | Looks are not conformance; check platform convention, states and accessibility. |
| "Send the real data so the mockup is realistic" | Prompts go to a third party; use realistic fake data. |
| "Stitch has the design, no need to write it down" | Record tokens and decisions in the repo; the external tool is experimental. |

## Quick Reference

| Step | Action | Evidence |
|---|---|---|
| Input | UX flow, states, platform baseline from `product-ux-designer` | Brief written before generating |
| Generate | One screen per prompt, with constraints | Prompt and output kept |
| Review | Named guideline, every state, contrast and touch targets | Accept/reject notes |
| Handoff | Tokens and structure saved in `docs/features/<feature>/` | Consumable by engineering |

## Related skills

Follow `stitch-design-workflow` for setup and procedure. Use `product-ux-designer` and `product-ui-designer` for the criteria, and hand off to `tailwind-ui-engineer`, `nextjs-react-engineer` or `flutter-mobile-engineer`.
