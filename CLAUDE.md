# ACCE Website Redesign — V2 (BOLD, COLORFUL, NON-BLAND)

You are rebuilding the ACCE charity website from the ground up. The current site feels white, generic, and template-y.
Your goal is a UNIQUE, BOLD, COLOR-RICH, emotionally resonant design that still reads as trustworthy and accessible.

## Non-negotiable Art Direction
- “Warm hope + modern credibility” (not tech startup minimalism).
- NO sterile whiteness: reduce large white blocks. Use colored section backgrounds, gradients, patterns, borders, and decorative shapes.
- Strong editorial typography (big type, confident spacing), with intentional rhythm between sections.
- Visually obvious change every iteration. If a change is subtle, it does not count.

## Brand Colors (USE THESE)
- Lavender #9B8BB8 (compassion / softness)
- Teal #2A9D8F (buttons / secondary emphasis)
- Charcoal #2D3436 (text / structure)
- Red #C0392B (CTAs only — donate and primary “act now”)
- Gold #D4A03C (warm highlights / gradients / emphasis)

### Color Usage Rules (to avoid blandness)
- At least 70% of homepage sections must have a NON-WHITE background treatment (lavender tint, charcoal, gradient, pattern, or split background).
- Every page must contain at least:
  - 2 “color-block” sections (tinted/gradient background), and
  - 1 decorative element (wave/blob/orb) visible without scrolling too far.
- Red (#C0392B) is ONLY for donate CTAs and truly primary action. Never for random highlights.
- Charcoal is for structure: headers/footers, dividers, outlines, typography contrast.

## Visual System Requirements (must be created early)
You MUST build a cohesive system, not random changes.
Create:
1) Tokenized palette + 50–950 scales in /src/styles/tailwind.css
2) A shadow/elevation system (3–5 levels) that creates depth
3) A gradient system (lavender→gold warmth, teal→lavender accents)
4) Background “textures” using CSS gradients (radial, noise-like, subtle dot-grid)
5) Motion primitives (Framer Motion): section reveal, hover lift, CTA pulse (subtle), number count-up

## “Make it feel like MORE”
To ensure the redesign looks dramatically different:
- Use bold section separators (waves, angled dividers, thick borders, or layered gradients).
- Add illustrated/abstract decorative shapes (orbs/blobs) with brand gradients and blur.
- Increase typographic contrast: big headlines, strong subheads, confident line lengths.
- Use more cards, but with real personality: gradient edges, highlight strokes, hover states, and micro-interactions.

## Create a Styleguide Page (MANDATORY)
Create /src/app/styleguide/page.tsx:
- Render all Buttons, Cards, Forms, Headers, Footers, typography samples, section background samples, decorative components.
- This is how you visually verify changes quickly. Update it as the system evolves.

## Work Through These Phases In Order

### Phase 0: Progress + Guardrails (DO THIS FIRST)
- Create /RALPH_PROGRESS.md with a checklist of ALL phases + bullets below.
- Create /DESIGN_SYSTEM.md summarizing tokens, gradients, shadows, typography scale, spacing rules, motion rules.
- Create /src/app/styleguide/page.tsx and ensure it renders without errors.

### Phase 1: Design Foundation (HIGH IMPACT)
- Palette scales in /src/styles/tailwind.css (50–950)
- Gradient utilities, shadow system, animation keyframes
- Rebuild Button (/src/components/ui/Button.tsx):
  - primary (teal), secondary (charcoal outline), cta (red), ghost variants
  - add strong hover/focus states, subtle motion, consistent sizing
- Rebuild Card components with elevation, gradient borders, hover lift, optional “accent stripe”
- Rebuild Form components with floating labels, validation states, teal focus rings, helpful error styles

### Phase 2: Layout (MAKE IT LOOK DIFFERENT IMMEDIATELY)
- Header (/src/components/layout/Header.tsx):
  - bolder typography, teal accents, red Donate CTA
  - improved mobile menu with animated panel
- Footer (/src/components/layout/Footer.tsx):
  - charcoal background, gold accents, wave/shape divider
- Decorative system (/src/components/decorative/):
  - Waves, Blobs, GradientOrbs, SectionDivider, BackgroundTexture
- Framer Motion wrapper: /src/components/ui/AnimatedSection.tsx

### Phase 3: Home Page (COLORFUL + EMOTIONAL)
- Hero:
  - full-bleed gradient/tinted background (lavender/gold warmth)
  - bold headline, emotional imagery treatment (or gradient “image frame” if assets missing)
  - clear CTAs with red donate
- Stats:
  - animated count-up, gold highlights, tinted section background
- Mission/Pillars:
  - teal/lavender cards with strong hover states
- Featured Story:
  - lavender accents, quote styling, layered background
- How to Help:
  - 3 pathways (Donate/Volunteer/Partner) as high-personality cards
- Newsletter CTA:
  - warm gold/lavender, textured background

### Phase 4: Core Pages
- /src/app/giving-options/page.tsx (tiers, impact, red CTAs, strong visuals)
- /src/app/who-we-are/page.tsx (story/values/team/metrics with color-block sections)
- /src/app/contact-us/page.tsx (beautiful form, multiple contact methods, tinted sections)

### Phase 5: Content Pages
- blogs list + [slug] (rich article layout, reading comfort, visual rhythm)
- events list + [slug] (listing system + event hero)
- patients-stories (emotional cards, story highlights)
- newsletters (archive grid with consistent visuals)

### Phase 6: Remaining Pages
Apply consistent styling to all remaining pages:
- Project pages (projects-overview, fund-cancer-treatment, support-patients, support-community, promote-research, equipment)
- Involvement pages (opportunities, volunteer, fundraise, partner-with-us)
- Campaign pages (ongoing-campaigns, hope-for-gilda, save-baby-ariel)
- About sub-pages (meet-the-board, acce-champions, annual-reports)
- Forms (support-treatment, funding-application)
- Auth (login, register)

## Iteration Rules (THIS IS WHAT PREVENTS “BLAND”)
Every iteration MUST:
1) Read /RALPH_PROGRESS.md → pick the next unchecked item (or tight sub-slice).
2) Make a VISUALLY OBVIOUS change:
   - A new tinted/gradient section, or
   - A new decorative component used on a real page, or
   - A major typography/layout shift.
   If it’s subtle, do more.
3) Update /styleguide with the new system pieces or variants.
4) Keep outputs short: do NOT paste large files or full build logs. Summarize and fix.
5) Run `npm run build` at least every 2 iterations. Fix errors immediately.
6) Update /RALPH_PROGRESS.md.

## Success Criteria
- Site no longer looks white/template-y
- Strong use of lavender/gold warmth + teal structure
- Red only for donate CTAs
- Polished hover/focus/motion
- Mobile responsive
- Build passes

## Completion (EXACT STRING MATCH)
ONLY when ALL checklist items are checked in /RALPH_PROGRESS.md AND `npm run build` passes:
Output EXACTLY:
<promise>REDESIGN COMPLETE</promise>
Do NOT output that promise anywhere else.

