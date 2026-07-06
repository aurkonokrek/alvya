## Plan: Design Polish Pass on the Portfolio

Since no direction was specified, I'll go with the highest-impact, lowest-risk improvement: a **design polish pass** on `public/alvy-arnob-portfolio.html`. This tightens what's already there without changing content or structure.

### What I'll do

1. **Typography consistency**
   - Confirm `DM Serif Display` (headings) and `Nunito Sans` (body/UI) are loaded via Google Fonts in `<head>`.
   - Normalize heading sizes and letter-spacing across Hero, Works, Achievements, and Modal so they follow one scale.
   - Standardize uppercase gold kicker labels (e.g. "ANIMATION 2023") to the same size, weight, and tracking everywhere.

2. **Color token cleanup**
   - Replace scattered gold hex values with the single signature `#BF9049`.
   - Ensure hairline dividers all use `rgba(191,144,73,0.3)` and section borders use `rgba(191,144,73,0.2)`.

3. **Button system**
   - Make every pill button match the "View More" spec (Nunito Sans 16/400, transparent → white/black on hover, 300ms).
   - Apply the same treatment to nav CTA and modal close button styling.

4. **Motion polish**
   - Add subtle `transition: all 300ms ease` on cards (border color → soft gold tint on hover).
   - Add a gentle fade-in on modal open (opacity 0 → 1, 250ms).

5. **Spacing rhythm**
   - Align section vertical padding to a single scale (80px mobile / 120px desktop).
   - Even out grid gaps in Works and Achievements to match.

6. **Small fixes**
   - Ensure the modal locks body scroll when open and restores it on close.
   - Add `alt` text audit on images for accessibility.

### Out of scope
- No new sections, no content rewrites, no new pages, no backend.
- No changes to the React app shell — work stays in the static HTML file.

### Files touched
- `public/alvy-arnob-portfolio.html` (only)
