## ARNOB hero animation — refined timing

Rework the `.hero-arnob` animation in `public/alvy-arnob-portfolio.html` so the beats are clearly distinct and match the described feel.

### Desired sequence
1. ALVY appears first (unchanged).
2. ARNOB drops in from above the headline in **white**, with a slight bounce as it lands next to ALVY.
3. It **holds fully white and settled for ~1 second** (no color change, no motion).
4. Then it **smoothly transitions to gold** over ~0.6s and stays gold permanently (no looping back to white).

### Timing (approx.)
- 0.0s: ALVY fade/slide up begins.
- 0.6s: ARNOB starts dropping from `translateY(-100px)` in white.
- ~1.5s: ARNOB has landed, sits still and white.
- ~2.5s: ARNOB begins white → gold color transition.
- ~3.1s: ARNOB fully gold, animation ends.

### Technical changes
- Replace the current `.hero-arnob` animation stack with two sequential keyframes:
  - `arnobDrop` (drop from above + settle bounce, opacity 0 → 1) — runs once, ~0.9s.
  - `arnobToGold` (color: white → gold) — runs once, delayed until after the ~1s hold.
- Remove the old infinite `arnobColor` loop.
- Ensure the initial color is `white` (via the keyframe's `0%` and inline default) so there is no gold flash before the drop.
- Keep everything else in the hero (ALVY, subtitle, layout, images) untouched.

### Files
- `public/alvy-arnob-portfolio.html` — only the `.hero-arnob` rule and its `@keyframes` blocks (around lines 535–575).
