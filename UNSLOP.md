# Unslop pass

Done with the unslop skill (unslop by Damir Sokolovsky, @heydamir, CC BY 4.0) on November 25, 2026.

## Audit

Light slop: built against the direction from the start, so this was polish mode. Signs found:

- Faint radial "chalk smudge" washes behind the slate board (`BakesBoard.astro`), removed before the first commit
- The menu's section links picked up the item rows' padding and borders, so the sidebar read as a second list of cards with uneven rhythm (`menu.astro`)
- Cake size options ran long ("6 inch round, serves 8 to 10, $48") and were cut off in the select (`cakes.astro`)
- The hero repeated "Closed Mondays" right under a headline that already says "every day but Monday" (`index.astro`)
- One of the dash bullets on the cake order notes rendered fainter than the others at 1.5px (`cakes.astro`)
- A leftover selector that matched nothing (`.hours-title + .lede` in `index.astro`)

No hue gradients, glows, gradient text, emoji, pill badges, uppercase tracked labels, 700+ weights, italic emphasis, trailing periods on labels, hype words, looping motion or `transition-all` were found.

## Direction

- Product: a neighborhood bakery on Alder Street, for regulars checking what's out of the oven, people ordering cakes, and cafes buying wholesale
- Character: early-rising, generous, matter-of-fact
- World: flour dust, butter paper, crust, a slate by the oven; flour-warm neutrals with crust brown as the one accent
- Moments: the slate board of today's bakes in a wooden frame in the hero, and the drawn cakes on the cakes page
- Signature: oven times ("Out at 6:10") in tabular figures, used only for bakes

## Changes

- Spacing: menu sidebar links now a tight list (6px rows) above the allergen key, separate from the item rows
- Color: smudge washes removed from the slate; crust brown stays on primary buttons, links and the cake order bullets
- Copy: hero address line now says where it is ("across from the library") instead of repeating the closing day; size options read "6 inch round, $48" (servings stay in the sizes table above)
- Type: no change needed (Brygada 1918 at 500 for headlines only, Albert Sans at 400 and 500, tabular prices and times)
- Layout: no change needed (split hero with the board, a larger first cake on the home page, two-column order section)
- Details: bullets evened to 2px; dead CSS removed
- Motion: no change needed (color transitions and a small press scale only)

screenshot-2: Cakes to order, the order form beside the ordering notes
screenshot-3: Menu page, bread with prices and allergen marks beside the section links and key
