# Alliance for CancerCare Equity (ACCE) Website

## Overview
This repository contains the Next.js website for the **Alliance for CancerCare Equity (ACCE)**, a charity organization dedicated to providing equitable cancer care support.

## Patients Stories Architecture
The website highlights stories of hope from cancer patients who have been supported by ACCE.

- **Data Store**: Patient stories are managed in [stories.ts](file:///Users/rogerchen/Developer/acce-website/src/lib/stories.ts).
- **Listing Page**: Stories are listed under [page.tsx](file:///Users/rogerchen/Developer/acce-website/src/app/patients-stories/page.tsx). If a patient story has written content (`content.length > 0`), it links to the detailed sub-page `/patients-stories/[slug]`. Otherwise, it links directly to the `youtubeUrl` in a new tab.
- **Story Detail Page**: Renders via the dynamic route [\[slug\]/page.tsx](file:///Users/rogerchen/Developer/acce-website/src/app/patients-stories/%5Bslug%5D/page.tsx), which embeds the YouTube video specified in `youtubeUrl` and renders the paragraphs in `content`.
- **Homepage Carousel**: Highlights stories in the [StoriesCarousel.tsx](file:///Users/rogerchen/Developer/acce-website/src/components/sections/StoriesCarousel.tsx) component.
- **Community Wall**: Displays patient masonry grid in [CommunityWall.tsx](file:///Users/rogerchen/Developer/acce-website/src/components/sections/CommunityWall.tsx).

---

## Modifications (June 2026)
### Emmanuel Grusi Patient Story Update
- **Video Link**: Updated Emmanuel Grusi's patient story video from `https://www.youtube.com/watch?v=uMiacIM7w1Y` to `https://www.youtube.com/watch?v=txQpp1Ngs0I` (shortened form: `https://youtu.be/txQpp1Ngs0I`).
- **Thumbnail Image**:
  - Replaced `public/stories/emmanuel.jpg` with the new thumbnail `public/stories/emmanuel.png`.
  - Updated references across the following files:
    - [stories.ts](file:///Users/rogerchen/Developer/acce-website/src/lib/stories.ts)
    - [StoriesCarousel.tsx](file:///Users/rogerchen/Developer/acce-website/src/components/sections/StoriesCarousel.tsx)
    - [CommunityWall.tsx](file:///Users/rogerchen/Developer/acce-website/src/components/sections/CommunityWall.tsx)
