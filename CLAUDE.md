# ysidroalmonte

## Project profile

Type: saas-web
Stack: astro,tailwind

## Product

Describe:
- validated customer/problem
- outcome purchased
- critical user flow
- monetization/commercial process

## Architecture

Document actual components and trust boundaries after codebase investigation.

## Repository commands

Fill only verified commands:

```bash
# install
# test
# lint/static analysis
# dev
# production build
# migrations
```

## Spec-driven workflow

Non-trivial features follow the `spec-driven-development` skill: SPEC.md,
then PLAN.md, then TASKS.md, then evidence-backed implementation, each stage
approved before the next.

Feature documents live together under:

```
docs/features/<feature-name>/SPEC.md
docs/features/<feature-name>/PLAN.md
docs/features/<feature-name>/TASKS.md
```

Apply any stack-specific SPEC checklist the matching engineering skill
carries (e.g. `flutter-mobile-engineer`'s `MOBILE_GUIDELINES.md`) when
writing acceptance criteria.

## Non-negotiable project rules

- Preserve existing changes and conventions.
- Investigate relevant execution flow before editing existing behavior.
- Keep secrets outside source control and client bundles.
- Enforce authorization server-side.
- For account/tenant data, validate ownership on every relevant read/write.
- Important schema changes require a migration and recovery plan.
- Do not declare production-ready from tests alone; verify the critical deployed flow.

## Project-specific constraints

Add known constraints here.

## Definition of Done

- Acceptance criteria met.
- Relevant automated checks pass.
- Negative and permission cases checked.
- Documentation updated.
- Affected behavior manually verified.
- Release evidence exists for production-impacting changes.

## Completion report

For non-trivial work, report: implemented behavior, affected feature
documents, acceptance criteria linked to evidence, checks executed (or not
run, and why), and anything incomplete or unverified. Never present an
unexecuted command or "should work" as proof of success.
