# ACCE Design System

## Brand Colors

### Primary Palette
| Name | Hex | Usage |
|------|-----|-------|
| Lavender | #9B8BB8 | Compassion, softness, section backgrounds |
| Teal | #2A9D8F | Buttons, secondary emphasis, trust |
| Charcoal | #2D3436 | Text, structure, headers/footers |
| Red | #C0392B | CTAs ONLY (donate, primary actions) |
| Gold | #D4A03C | Warm highlights, gradients, emphasis |

### Color Scales (50-950)
Each brand color has a full scale for flexibility:

```
lavender-50 → lavender-950
teal-50 → teal-950
charcoal-50 → charcoal-950
gold-50 → gold-950
```

## Gradients

### Warm Gradient (Hero/CTA backgrounds)
`bg-gradient-warm`: lavender-100 → gold-100 (45deg)

### Accent Gradient (Cards/decorative)
`bg-gradient-accent`: teal-400 → lavender-400

### Subtle Gradient (Section tints)
`bg-gradient-subtle`: lavender-50 → transparent

## Shadows (Elevation System)

| Level | Class | Usage |
|-------|-------|-------|
| 1 | shadow-soft | Cards at rest |
| 2 | shadow-medium | Hover states |
| 3 | shadow-strong | Modals, dropdowns |
| 4 | shadow-glow-teal | Teal accent glow |
| 5 | shadow-glow-gold | Gold accent glow |

## Typography

### Font Families
- **Display**: Lexend (headlines, large text)
- **Body**: Inter (body text, UI)

### Type Scale
- `text-display-xl`: 4.5rem / 1.1 (Hero headlines)
- `text-display-lg`: 3.75rem / 1 (Page titles)
- `text-display-md`: 3rem / 1.1 (Section titles)
- `text-heading-lg`: 2.5rem / 1.2 (Subsection)
- `text-heading-md`: 2rem / 1.3 (Card titles)
- `text-body-lg`: 1.25rem / 1.6 (Lead paragraphs)
- `text-body`: 1rem / 1.75 (Body text)
- `text-small`: 0.875rem / 1.5 (Captions)

## Spacing

Base unit: 4px

| Token | Value |
|-------|-------|
| space-1 | 4px |
| space-2 | 8px |
| space-3 | 12px |
| space-4 | 16px |
| space-6 | 24px |
| space-8 | 32px |
| space-12 | 48px |
| space-16 | 64px |
| space-24 | 96px |
| space-32 | 128px |

## Motion

### Timing Functions
- `ease-out-expo`: cubic-bezier(0.16, 1, 0.3, 1) - Snappy exits
- `ease-in-out-smooth`: cubic-bezier(0.4, 0, 0.2, 1) - Smooth transitions

### Durations
- `duration-fast`: 150ms (micro-interactions)
- `duration-normal`: 300ms (standard transitions)
- `duration-slow`: 500ms (page/section reveals)

### Animation Presets
- `animate-fade-up`: Fade in + translate up
- `animate-scale-in`: Scale from 0.95 to 1
- `animate-pulse-subtle`: Subtle pulse for CTAs
- `animate-count-up`: Number counter animation

## Components

### Button Variants
- **Primary** (teal): Main actions
- **Secondary** (charcoal outline): Alternative actions
- **CTA** (red): Donate buttons ONLY
- **Ghost**: Minimal/tertiary actions

### Card Styles
- Default: White bg, shadow-soft, rounded-2xl
- Accent: Gradient border, hover lift
- Feature: Large, with decorative elements

### Form Elements
- Floating labels
- Teal focus rings
- Validation states (success/error)
- Helper text styling

## Decorative Elements

### Shapes
- Wave dividers (top/bottom variants)
- Gradient blobs (lavender/gold)
- Glowing orbs (positioned absolutely)
- Dot grid patterns

### Section Backgrounds
- Solid tints (lavender-50, teal-50, gold-50)
- Gradient overlays
- Pattern overlays (subtle dot grid)
