# Phase 2B — Project Listing & Case Study UI/UX Brief

**Project:** Personal Portfolio — Management · Data · AI
**Date:** 2026-10-31
**Status:** IMPLEMENTATION BRIEF for Phase 2B; does not change Phase 1 APPROVED baseline.

## 1. Goal

Extend the accepted homepage design into a consistent, navigable portfolio experience that supports operations/management and technical case studies without prematurely building the final content system.

## 2. Scope

1. Preserve homepage appearance; make only targeted usability corrections.
2. Add `/projects/` listing with reusable project cards (2 sample items are enough).
3. Add detail route `/projects/[slug]/` (or equivalent routing without duplicating layout).
4. Create a unified case-study layout with sections:
   - Overview: title, summary, career tracks, status and DEMO badge if applicable
   - Problem / Context
   - Role & Scope
   - Approach / Decision process
   - Implementation / Artifacts (optional, no invented artifacts)
   - Results / Evidence (explicitly state when not yet validated)
   - Current Status & Next Steps
5. Link homepage featured cards to their matching detail pages; add breadcrumb/back link.
6. Resolve confirmed visual issues from screenshots after checking the actual source; especially sticky header opacity, anchors and focus states.
7. Verify mobile and keyboard behavior. Reuse visual tokens and components from 2A.

## 3. Prototype data and confidentiality

- Reuse `src/data/demoContent.ts` or current existing data source; derive listing and detail pages from one source of truth.
- Two **clearly fictional, generic demo cases** covering different layouts, e.g. `operations-case-demo` (Management/Operations) and `data-case-demo` (Data/AI). These are UI fixtures only, NOT user work history, not real performance results, not public-ready claims.
- If existing two Featured Work concept cards already have fixture identifiers, adapt those instead of duplicating or renaming unnecessarily.
- Avoid invented KPI, client names, specific organizations, repository links and external media.
- Do not publish RoomBeacons, TraceGuard AI, SGOD/ChatSystem, employment details, personal email, phone or CV links without explicit content-level authorization.
- All demo detail pages must be visually labelled `DEMO / ILLUSTRATIVE`, have noindex metadata, and be excluded from any sitemap if present. No production deploy in this phase.
- Unknown or pending section content should show `Đang chuẩn bị nội dung đã kiểm chứng`, not fictional evidence.

## 4. Visual style

Preserve the current 2A design: navy hero, white/pale gray sections, blue/teal accents, consistent spacing, restrained editorial headings, geometry-based visuals and `hd.` brand. For the new project pages:

- Header consistent with homepage. Use solid or sufficiently opaque sticky background with stable stacking.
- Intro in two columns where space permits; one column on mobile.
- Narrow readable article body (~65–80 characters per line), optionally a desktop local table of contents if it aids reading; do not build complex JS sticky scrollspy.
- Distinguish **actual evidence** vs **planned work** vs **UI demo** clearly.
- Render labels/status semantically, not color alone.
- Components may include `ProjectCard`, `CaseStudyLayout` and `CaseStudySection` if they avoid actual duplication; do not create abstraction for a single use.
- Use semantic links/buttons and accessible headings. `scroll-margin-top` for hash targets; keyboard focus visible.
- CSS-first interactions, honor `prefers-reduced-motion`.

## 5. Scalability constraints

- No manually duplicated page component per project.
- Stable URL slug and type-safe data shape. Derive cards and page routes from the same fixture; no titles/descriptions duplicated in multiple components.
- Track categories are structured fields (`management`, `data`, `ai-software`), optionally multiple per project.
- Project status is explicit (`planned`, `in-progress`, `completed`, `archived`). Prototype visibility and demo markers must be explicit.
- `draft`/`private` fixtures must never be rendered to public index or generate routes.
- Keep the data/view separation so **Phase 3** can replace fixture with Astro Content Collections without rewriting the UI. Do not implement Content Collections now.
- No premature search, pagination, CMS, React, backend, DB, auth, AI assistant, custom animation library, or Docker.

## 6. Definition of Done

- [ ] `/` retains accepted design, Featured Work has real working internal routes for demo cases.
- [ ] `/projects/` displays sample cases from existing fixture (not copy-pasted lists).
- [ ] `/projects/operations-case-demo/` and `/projects/data-case-demo/` or existing equivalent slugs render one shared case-study layout.
- [ ] All demo cases are visibly labelled as demo; no invented accomplishments; no approved-private personal data appears.
- [ ] No broken CTA, `href="#"` placeholder or link to a nonexistent page.
- [ ] Header does not visually bleed content through; anchor headings remain visible.
- [ ] Keyboard navigation is usable and focus states visible.
- [ ] 360, 390, 768, 1024, 1440px checked or marked not visually verified, with no assumed PASS.
- [ ] `prefers-reduced-motion` respected.
- [ ] Typecheck/Astro check and production build run, with actual results documented.
- [ ] No Phase 3 / SEO-completion / deployment / refactor of unrelated parts.

## 7. Owner review after Task 02B

Owner should review: (1) homepage anchors/header, (2) `/projects/` desktop/mobile, (3) both case-study layouts and demo disclaimers, (4) nav/back links. Stop after report; do not start Phase 3 automatically.
