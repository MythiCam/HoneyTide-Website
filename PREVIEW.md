# HoneyTide signature garden journal

This version builds on the approved garden style with a custom bee-and-tide line motif, HoneyTide wordmark masthead, clear five-link navigation, visible swarm-help route, journal numbering, and quick pathways into the site. The original logo remains in its original place alongside every original photo and video. No original photo/video file or source attribute was changed.

## Preview

1. Open https://github.com/MythiCam/HoneyTide-Website/tree/nature-first-preview
2. Choose Code > Download ZIP, then Extract All.
3. Open index.html in the newly extracted folder. Previous ZIP downloads do not update themselves.
4. Follow the navigation, open On this page, and try the keyboard Tab key. Video pause/play controls are near the bottom of the video headers.

Draft review: https://github.com/MythiCam/HoneyTide-Website/pull/10
The public website changes only when the publishing branch is updated.

## Accessibility and navigation

- Native, keyboard-operable page contents; navigation remains usable without JavaScript.
- Clear active-page indication, focus rings, skip link, generously sized navigation controls, and real footer navigation landmark.
- Quick links to colonies, products, learning, swarm assistance, email, and the top of each page.
- The original videos retain their defaults. Optional controls pause/play the background videos; visitors requesting reduced motion get paused footage that they can choose to play. No preference is stored.
- Darker video overlays keep text readable independently of changing footage.

## Verification — October 11, 2026

Rendered all six pages in Chromium at 1440, 390, and 320 CSS pixels. No horizontal overflow and no axe-core WCAG A/AA-tagged violations reported in these checks. All original images decode successfully. Original photo/video bytes, element attributes, and relative order match the original site commit 8b59f54.

Verified keyboard skip navigation, native contents disclosure, anchor destinations, background video pause/play, initial and changed reduced-motion preference, and navigation with JavaScript disabled. Local file paths, fragment links, duplicate IDs, and JavaScript syntax pass.

Automated checks are not a full accessibility certification; Safari/Firefox and assistive-technology testing remain outside this pass.

## Maintenance

The original page styles remain; css/woodland.css owns the brand layer. The custom vectors are images/botanical-border.svg and images/honeytide-rhythm.svg. js/honeytide.js only provides optional media controls. HTML, CSS and JavaScript run directly on GitHub Pages without a build system or external font dependency.
