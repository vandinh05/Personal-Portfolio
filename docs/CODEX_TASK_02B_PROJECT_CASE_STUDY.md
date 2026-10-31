# Codex Task 02B — Project Listing and Case Study Prototype

**Project root on user's machine:** `D:\UTH\personal-portfolio`
**Prerequisite:** Phase 2A homepage visual direction accepted by owner based on screenshots; no code audit claimed.
**Task:** Implement only Phase 2B in existing Astro repository.

## Read first

1. `AGENTS.md`
2. `README.md`
3. `docs/PRODUCT_SPEC_v0.1_APPROVED.md` (DO NOT CHANGE)
4. `docs/PHASE_2_UIUX_BRIEF_v0.1.md`
5. `docs/OPEN_DECISIONS.md`
6. The attached `PHASE_2A_REVIEW_2026-10-31.md` and `PHASE_2B_UIUX_BRIEF_v0.1.md`, located in workspace `docs/` if available.

## Tasks — do in order

1. Inspect only relevant existing homepage, project fixture, layout, header and card files to understand existing patterns; avoid repo-wide audit/refactor.
2. Fix sticky header background/stacking and ensure `#about`, `#projects` etc. are not hidden by it. Keep current visual identity unchanged.
3. Build `/projects/` listing using existing card styling and central fixture data. Do not implement search/filter controls unless they actually work (prefer not to add them in 2B).
4. Build reusable case-study detail route `/projects/[slug]/` with shared layout and sections: Context/Problem, Role/Scope, Approach, Implementation/Artifacts (optional), Results/Evidence, Status/Next steps. A Management case must fit as naturally as a Data/AI case.
5. Create exactly 2 clearly marked, generic sample case-study fixtures: Management/Operations and Data/AI, or adapt existing 2 demo fixtures. Do NOT claim they are real user projects or invent data/evidence. Show absent evidence as pending and keep demo disclaimers clearly visible.
6. Make homepage Featured Work cards link to the matching demo pages; add breadcrumb/back navigation between listing and details. No fake href or dead CTA.
7. Ensure demo routes use noindex and don't appear in sitemap if sitemap exists. Do not deploy. Do not publicize private projects, sensitive personal information, CV links or email/phone.
8. Keep content and presentation decoupled; stable slugs, simple typed data, shared layout; designed for migration to Content Collections in Phase 3, but DO NOT create those collections in this task.

## Constraints

- Preserve approved homepage aesthetics (navy/blue/teal, typographic hero, `hd.` identity).
- Astro + TypeScript + Tailwind CSS v4 as currently configured. Avoid adding dependencies and avoid React unless existing app already requires it.
- Stay static-first; use Astro's `getStaticPaths()` if a dynamic static route is used.
- Do not edit Phase 1 APPROVED baseline, perform deployment, implement CMS, backend, database, i18n, SEO-completion, blog, analytics, search or pagination.
- Do not fabricate verified achievements, project status, metrics, employment, external URLs or real project artifacts.
- Do not run unnecessary tests across unrelated modules. Check changed flows and existing typecheck/build.

## Verification (report PASS/FAIL/NOT VERIFIED faithfully)

- `npm.cmd run dev` — test `/`, `/projects/`, each `/projects/<slug>/` locally.
- Check `package.json` for existing Astro-check script and use it if present; if not, run Astro check with existing dependencies. Do not invent script names in report.
- `npm.cmd run build` — production build.
- Manually or with already installed tooling check 360, 390, 768, 1024, 1440px; keyboard navigation and reduced motion. If can't view browser, report NOT VERIFIED; no false PASS.
- Check no broken internal links or fake placeholder links.
- Confirm sample data does not disclose private information or falsely portray real accomplishments.

## Deliverable / Stop

Return a concise report:
1. Main modified/created files.
2. Routes and visual sections delivered.
3. Verification commands and actual results, with NOT VERIFIED items.
4. Any design decision needing owner's review.
5. Local URLs for review.

**Stop after Task 02B and wait for owner to approve before starting Phase 3.**
