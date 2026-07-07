## ARNOB hero animation — match Figma GIF (looping)

The reference GIF is an ~8s loop. In each cycle ARNOB drops in from above the headline in **white** (starting slightly larger, scaling down as it lands), settles next to ALVY, holds white for a moment, transitions to **gold**, holds gold for several seconds, then the whole cycle repeats.

Currently the animation plays only once. I will convert it into a single infinite keyframe timeline that runs continuously.

### Sequence per loop (~7s)
```
0%          ARNOB above baseline, white, scale 1.15, opacity 0
6%          fully visible, still dropping
14%         lands with slight overshoot (translateY 8px, scale 1.03)
20%         settled at final position, white, scale 1
35%         still white, holding
50%         color finished transitioning white → gold
90%         still gold, holding
100%        (reset for next loop) back to above baseline, white, opacity 0
```

Both `transform`, `opacity`, and `color` will animate inside one `@keyframes arnobLoop` so timing stays perfectly in sync. `animation-iteration-count: infinite`.

### Technical changes (only file: `public/alvy-arnob-portfolio.html`)
- Replace the `.hero-arnob` rule and its two keyframes (`arnobDrop`, `arnobToGold`, around lines 535–575) with:
  - One `.hero-arnob` rule using `animation: arnobLoop 7s cubic-bezier(.22,.68,0,1.2) .4s infinite both;`
  - One `@keyframes arnobLoop` covering drop-in, color shift, hold, and reset as described above.
- Keep initial `color: #ffffff` and `transform-origin: center top` so the very first render before animation kicks in is not gold.
- Nothing else in the hero (ALVY, subtitle, layout, images, ordering) changes.
