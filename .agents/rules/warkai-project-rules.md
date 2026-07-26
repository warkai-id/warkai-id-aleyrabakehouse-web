---
trigger: always_on
---

# Warkai Project Rules — Aleyra Bakehouse

## Source of Truth

- Read `docs/PRD.md` before planning or modifying code.
- Do not change approved MVP scope without explicit approval.
- Do not invent business data.
- Use dummy data only where PRD explicitly allows it.

## Workflow

- Work in small phases.
- Before coding, provide:
  1. files to create or modify,
  2. implementation plan,
  3. risks or missing data.
- Wait for approval before large changes.
- Never overwrite original assets inside `assets-source/`.
- Copy optimized assets into `public/` during implementation.

## Technical Standards

- Next.js 15+ App Router.
- TypeScript strict mode.
- Tailwind CSS v4.
- shadcn/ui as the component foundation.
- Server Components by default.
- Client Components only for interaction.
- Use `next/image`, never raw `<img>`.
- Use Zod for typed content configuration.
- Financial values must use integer rupiah.
- Do not use TypeScript `any`.
- Do not add database, authentication, payment, CMS, membership, or live stock in MVP.

## UI Standards

- Mobile-first.
- Premium boutique bakery aesthetic.
- Follow the approved brand colors and typography.
- Avoid generic SaaS layouts.
- Avoid excessive gradients, glassmorphism, and animation.
- Support keyboard navigation and reduced motion.
- Audio may start only after user interaction.

## Security

- Never request or expose `.env`, API keys, GitHub tokens, or Cloudflare tokens.
- Never commit secrets.
- Do not execute destructive commands without approval.

## Git

- Do not push directly to `main`.
- Use `develop` and `feature/*` branches.
- Make small descriptive commits.