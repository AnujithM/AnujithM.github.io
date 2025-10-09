---
permalink: /
title: "Anujith Muraleedharan"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
:root{
  --mila:#c2185b;
  --mila-hover:#e91e63;
  --btn-border: rgba(0,0,0,.55);
}
/* Photo + caption container (floats left) */
.portrait{
  float: left;
  width: clamp(200px, 22vw, 300px);
  margin: 4px 28px 12px 0;  /* space to its right & below */
}

/* The image inside the portrait container */
.portrait > img{
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 12px 26px rgba(0,0,0,.16);
  display: block;
}

/* Two-line caption under the image */
.photo-caption{
  margin-top: 10px;
  text-align: left;
  font-family: "Inter","Roboto","Lato",system-ui,sans-serif;
  line-height: 1.4;
}
.photo-caption .aka{
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 2px;
}
.photo-caption .role{
  font-size: 15px;
  color: #555;
  letter-spacing: .2px;
}

/* Mobile: stack image + caption above text */
@media (max-width: 1100px){
  .portrait{
    float: none;
    width: 100%;
    max-width: 420px;
    margin: 0 auto 18px;
  }
  .intro-text{ max-width: none; }
}

/* Make the text column read like a tall, narrow column */
.intro-grid{
  column-gap: 36px;                           /* a little more breathing room */
}

.intro-text{
  max-width: 100ch;                            /* limit line length -> taller column */
}
/* Increase vertical breathing room around the title and content */

.intro-grid {
  row-gap: 20px;         /* adds vertical spacing between rows (title ↔ image/text) */
  column-gap: 40px;      /* slight horizontal gap tweak */
}

/* Keep masthead aligned to the same content width + side padding */
@media (min-width:1025px){
  .masthead__inner-wrap{
    max-width: 1180px;   /* same as .page__content max-width */
    margin: 0 auto;      /* center it */
    padding: 0 2cm;      /* same side padding you use for content */
  }
  /* keep even spacing between Home / Projects / CV */
  .greedy-nav .visible-links > li + li { margin-left: 28px; }
}


  /* equal spacing between Home / Projects / CV */
  .greedy-nav .visible-links > li + li { margin-left: 28px; }
}

/* === ~2cm gap between the big name and the photo/text === */
.intro-grid{
  row-gap: 20px;            /* keep some breathing room in the grid */
}
/* keep the image left-floated, as you have now */
.about-rect{ /* your existing rule stays; nothing else to change here */ }

/* Paragraph shaping */
.intro-text p{
  text-align: justify;                        /* justify the text */
  text-justify: inter-word;                   /* better spacing for justification */
  hyphens: auto;                              /* allow soft hyphenation for cleaner edges */
  margin: 0 0 1.1em 0;                        /* consistent paragraph spacing */
}

/* On small screens let it be full width again */
@media (max-width: 1100px){
  .intro-text{
    max-width: none;
  }
}
.page__content{
  font-family:"Lato","Roboto","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size:17px; line-height:1.8; color:#1a1a1a;
  max-width:1180px; margin:0 auto;
}

/* base text column */
.page__content{
  font-family:"Lato","Roboto","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size:17px; line-height:1.8; color:#1a1a1a;
  max-width:1180px; margin:0 auto;
}
.page__content p{ margin:0 0 1.3em 0; }
.page__content a{ color:var(--mila); font-weight:600; text-decoration:none; }
.page__content a:hover{ color:var(--mila-hover); text-decoration:underline; }

/* section headers */
.page__content h2{ font-family:"Roboto","Lato",system-ui,sans-serif; font-size:34px; font-weight:300; line-height:1.25; margin:2.2em 0 .9em 0; text-transform:lowercase; }
.page__content h3{ font-weight:600; margin:2em 0 .8em 0; }

/* ===== Social icon row (centered) ===== */
.social-inline{
  display:flex; gap:22px; flex-wrap:wrap;
  margin:16px 0 34px 0;
  justify-content:center;
}
/* Force social icons to be BLACK by default, Mila on hover */
.social-inline .si,
.social-inline .si:link,
.social-inline .si:visited{
  color:#000;                 /* no !important */
  text-decoration:none;
}
.social-inline .si:hover{
  color:var(--mila);
}

.si{
  width:64px; height:64px; border:none; border-radius:0; background:transparent;
  display:flex; align-items:center; justify-content:center;
  color:#000; text-decoration:none;
  transition:transform .12s ease, color .12s ease, filter .12s ease;
}
.si svg{ width:36px; height:36px; display:block; }
.si:hover{
  color: var(--mila);
  transform: translateY(-1px);
  outline: 2px solid var(--mila);
  outline-offset: 4px;
}

/* Keep a focus style only for keyboard navigation */
.si:focus { outline: none; }
.si:focus-visible{
  outline: 2px solid var(--mila);
  outline-offset: 4px;
}
@media (max-width:560px){
  .social-inline{ gap:16px; }
  .si{ width:56px; height:56px; }
  .si svg{ width:32px; height:32px; }
}

/* ===== Hide unwanted sidebar items ===== */
/* Hide the circular avatar in the sidebar (support multiple theme selectors) */
.author__avatar, .sidebar .author__avatar{ display:none !important; }
/* Hide left sidebar links (keep in DOM so JS can read URLs) */
.author__urls li:has(a[href^="mailto:"]),
.author__urls li:has(a[href*="scholar.google"]),
.author__urls li:has(a[href*="github.com"]),
.author__urls li:has(a[href*="linkedin.com"]),
.author__urls li:has(a[href*="twitter.com"]),
.author__urls li:has(a[href*="orcid.org"]) { display:none !important; }
/* Fallback for browsers without :has */
.author__urls a[href^="mailto:"],
.author__urls a[href*="scholar.google"],
.author__urls a[href*="github.com"],
.author__urls a[href*="linkedin.com"],
.author__urls a[href*="twitter.com"],
.author__urls a[href*="orcid.org"] { display:none !important; }
/* Common institution/location icons */
.author__urls li:has(i.fa-map-marker),
.author__urls li:has(i.fa-map-marker-alt),
.author__urls li:has(i.fa-location-dot),
.author__urls li:has(i.fa-university),
.author__urls li:has(i.fa-building),
.author__urls li:has(i.fa-briefcase) { display:none !important; }

/* Clear float after content so later sections don’t wrap */
.page__content::after{
  content:"";
  display: table;
  clear: both;
}
/* On small screens, stack image above text */
@media (max-width: 1080px){
  .about-rect{
    float: none;
    display: block;
    width: 100%;
    max-width: 420px;
    margin: 0 auto 18px auto;
  }
}
/* Hide theme's default page title (we'll add our own) */
.page__title { display: none; }


/* Big custom title */
.intro-title{
  font-size: clamp(36px, 5vw, 44px);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 12px 0;
}
/* Title font (swap to the exact one you prefer later) */
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&display=swap');

.intro-title{
  font-family: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial, sans-serif;
  font-size: clamp(36px, 5vw, 44px);
  font-weight: 400;           /* <-- normal by default */
  line-height: 1.1;
  margin: 0 0 12px 0;
  letter-spacing: .2px;
}

.intro-title .first { font-weight: 600; }  /* Anujith bold */
.intro-title .last  { font-weight: 350; }  /* Muraleedharan normal */


/* Two-line caption directly under the photo */
.photo-caption{
  margin-top: 10px;
  text-align: left;
  font-family: "Inter","Roboto","Lato",system-ui,sans-serif;
  line-height: 1.4;
}

.photo-caption .aka{
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 2px;
}

.photo-caption .role{
  font-size: 15px;
  color: #555;
  letter-spacing: .2px;
}


/* ===== Publications ===== */
.pub-row{ display:flex; align-items:flex-start; gap:22px; margin:26px 0; padding:0 0 20px 0; border-bottom:1px solid rgba(0,0,0,0.08); }
.pub-row:last-of-type{ border-bottom:none; }
.pub-thumb{ width:190px; border-radius:10px; flex:0 0 auto; box-shadow:0 1px 4px rgba(0,0,0,0.15); }
.pub-body{ flex:1 1 auto; position:relative; padding-right:120px; }
.pub-title{ font-weight:500; font-size:20px; line-height:1.45; margin:0 0 6px 0; letter-spacing:.1px; }
.pub-auth{ font-size:16px; margin:0 0 4px 0; }
.pub-venue{ font-style:italic; color:#555; opacity:.9; margin:0 0 6px 0; }
.pub-year{ position:absolute; right:-12px; top:2px; font-size:34px; color:rgba(0,0,0,0.08); font-weight:500; pointer-events:none; }

.link-btn{ display:inline-flex; align-items:center; justify-content:center; padding:6px 12px; min-height:34px; line-height:1; font-size:12px; border:1px solid var(--btn-border); border-radius:6px; background:#fff; color:var(--mila); text-decoration:none; cursor:pointer; font-weight:600; }
.link-btn:hover{ background:#fafafa; border-color:#000; color:var(--mila-hover); }
.abs{ display:inline-block; }
.abs > summary{ list-style:none; font-weight:600; }
.abs > summary::-webkit-details-marker{ display:none; }
.abs > summary{ display:inline-flex; align-items:center; justify-content:center; padding:6px 12px; min-height:34px; line-height:1; font-size:12px; border:1px solid var(--btn-border); border-radius:6px; background:#fff; color:var(--mila); cursor:pointer; }
.abs > summary:hover{ background:#fafafa; border-color:#000; color:var(--mila-hover); }
.abs-box{
  margin-top:10px;
  padding:18px 22px;                 /* more inner space (box looks larger) */
  background:#f5f5f5;
  border-left:3px solid var(--mila);
  max-width:85ch;                    /* wider text area (~like reference) */
  border-radius:0;
  font-size:15px;                    /* slightly smaller font */
  line-height:1.7;                   /* improves readability */
}
/* Stretch abstract box to the same right edge as the year */
.abs-box{
  max-width: none;                     /* remove the old 85ch cap */
  width: calc(100% + 120px);           /* 120px = .pub-body right padding */
  margin-right: -120px;                /* pull the box into that padding area */
  box-sizing: border-box;              /* keep padding inside the calc width */
}

/* Keep it clean on mobile where the year is hidden and padding collapses */
@media (max-width:700px){
  .abs-box{
    width: 100%;
    margin-right: 0;
  }
}

/* Justify abstract text inside the ABS box */
.abs-box{
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;            /* nicer ragged edges on narrow screens */
  text-align-last: left;    /* keep the last line from stretching */
}

/* If your abstract uses <p> tags, this ensures each paragraph is justified */
.abs-box p{
  margin: 0 0 .9em 0;
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
}


.eq-note{ font-size:13px; line-height:1.4; color:#6b6b6b; margin:-8px 0 16px 0; font-style:italic; }

/* ===== News box (scrollable) ===== */
.news-box {
  max-height: 230px;
  overflow-y: auto;
  border: 1px solid rgba(0,0,0,0.1);
  padding: 12px 15px;
  border-radius: 8px;
  background: #fafafa;
  scroll-behavior: smooth;
}
.news-box ul { list-style-type: none; padding-left: 0; margin: 0; }
.news-box li { margin-bottom: 8px; }

/* Mobile tweaks for publications area */
@media (max-width:700px){
  .pub-year{ display:none; }
  .pub-body{ padding-right:0; }
}
.photo-caption .email{
  font-size: 14px;
  color: #444;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  letter-spacing: .1px;
  margin-top: 2px;
}
.photo-caption .email{
  font-size: 14px;
  color: #444;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  letter-spacing: .1px;
  margin-top: 2px;
}
/* ---------- THEME-AWARE OVERRIDES FOR ABOUT PAGE ---------- */
/* Your custom accent tokens, light + dark */
:root {
  --mila: #c2185b;
  --mila-hover: #e91e63;
  --btn-border: rgba(0,0,0,.45);
}
html[data-theme="dark"] {
  --mila: #ff6b9a;           /* slightly brighter pink in dark */
  --mila-hover: #ff9ec0;
  --btn-border: rgba(255,255,255,.35);
}

/* Base text & links in this page */
.page__content { color: var(--text); background: var(--bg); }
.page__content a { color: var(--mila); }
.page__content a:hover { color: var(--mila-hover); }

/* Photo caption text colors */
.photo-caption .aka   { color: var(--text); }
.photo-caption .role  { color: var(--text-muted); }
.photo-caption .email { color: var(--text-muted); }

/* Social icons: default = text, hover = accent */
.social-inline .si,
.social-inline .si:link,
.social-inline .si:visited { color: var(--text); }
.social-inline .si:hover { color: var(--mila); }

/* Publication rows and misc borders */
.pub-row { border-bottom: 1px solid var(--border); }
hr, .news-box { border-color: var(--border); }

/* Buttons and abstracts: use theme surfaces */
.link-btn,
.abs > summary {
  background: var(--card);
  color: var(--mila);
  border: 1px solid var(--btn-border);
}
.link-btn:hover,
.abs > summary:hover {
  background: color-mix(in oklab, var(--card) 92%, var(--bg));
  color: var(--mila-hover);
  border-color: var(--border);
}

.abs-box {
  background: color-mix(in oklab, var(--card) 94%, var(--bg));
  border-left: 3px solid var(--mila);
}

/* “News” panel follows theme */
.news-box {
  background: var(--card);
  border: 1px solid var(--border);
}

/* Links elsewhere that used #000 */
.si { color: var(--text); }

/* Optional: year watermark color that works in both themes */
.pub-year { color: color-mix(in oklab, var(--text) 15%, var(--bg)); }

/* ====== fix: dividers, year tint, venue color ====== */

/* Tokens */
:root{
  /* divider and year tint for LIGHT */
  --divider: rgba(0,0,0,.12);
  --year-dim: rgba(0,0,0,.35);
  --venue-color: #1a1a1a; /* dark text on light bg */
}
html[data-theme="dark"]{
  /* divider and year tint for DARK */
  --divider: rgba(255,255,255,.14);
  --year-dim: rgba(255,255,255,.38);
  --venue-color: #ffffff; /* make venue line white in dark mode */
}

/* 1) Divider lines under each publication row */
.pub-row{
  border-bottom: 1px solid var(--divider);
}
hr{ border-color: var(--divider); }

/* 2) Year watermark on the right: make it a soft grey, not white */
.pub-year{
  color: var(--year-dim);
}

/* 3) Venue line: grey in light, white in dark (as requested) */
.pub-venue{
  color: var(--venue-color);
}

/* If your "news" panel border vanished, give it the same divider */
.news-box{
  border: 1px solid var(--divider);
}
/* ===== Scrollbar styling for .news-box ===== */
/* Tokens */
:root{
  --scroll-track: transparent;               /* no white rectangle */
  --scroll-thumb: rgba(0,0,0,.45);
  --scroll-thumb-hover: rgba(0,0,0,.65);
}
html[data-theme="dark"]{
  --scroll-track: transparent;               /* stays invisible in dark */
  --scroll-thumb: rgba(255,255,255,.38);
  --scroll-thumb-hover: rgba(255,255,255,.6);
}

/* Firefox */
.news-box{
  scrollbar-width: thin;                     /* slim */
  scrollbar-color: var(--scroll-thumb) var(--scroll-track);
}

/* WebKit (Chrome/Edge/Safari) */
.news-box::-webkit-scrollbar{
  width: 10px;                               /* adjust if you want thinner */
}
.news-box::-webkit-scrollbar-track{
  background: var(--scroll-track);           /* hides the white box */
  border-radius: 8px;
}
.news-box::-webkit-scrollbar-thumb{
  background-color: var(--scroll-thumb);
  border-radius: 8px;
  border: 2px solid transparent;             /* avoids white border artifact */
  background-clip: padding-box;
}
.news-box::-webkit-scrollbar-thumb:hover{
  background-color: var(--scroll-thumb-hover);
}

/* ===== Navbar: single full-width divider ===== */
.masthead{
  border-bottom: 1px solid var(--divider);
}
.greedy-nav,
.masthead__inner-wrap{
  box-shadow: none !important; /* some themes draw hairlines via shadow */
}
/* hide the short edge lines some themes add as pseudo-elements */
.greedy-nav:before,
.greedy-nav:after,
.greedy-nav .visible-links:before,
.greedy-nav .visible-links:after,
.masthead:before,
.masthead:after,
.masthead__inner-wrap:before,
.masthead__inner-wrap:after{
  content: none !important;
  display: none !important;
}

/* last pub row: no bottom rule + smaller tail margin */
.pub-row:last-of-type{
  border-bottom: none !important;
  margin-bottom: 14px;                 /* tighten space before the “news” h2 */
}

/* if any hr sneaks in just before a section heading, hide it */
.page__content hr:has(+ h2){
  display: none !important;
}

/* optional: tighten the “news” heading spacing a bit */
.page__content h2#news{
  margin-top: 10px;
}

/* Centered block with space from news; no border */
.clustr-wrap{
  display:block;
  margin:16px auto 0;         /* tighten/loosen with this */
  text-align:center;
  background: transparent;
  border: none;
}

/* The injected canvas should be clean and borderless */
.clustr-wrap canvas, .clustr-wrap svg, .clustr-wrap iframe{
  display:block;
  border:none !important;
  outline:none !important;
  box-shadow:none !important;
}

/* Recolor continents blue -> mila-ish pink */
.clustr-wrap canvas, .clustr-wrap svg{
  filter: hue-rotate(305deg) saturate(1.5) brightness(1.05);
  border-radius:6px;           /* optional soft corners */
}


</style>

<!-- Photo + caption (floats left; text flows on the right) -->
<h1 class="intro-title">
  <span class="first">Anujith</span> <span class="last">Muraleedharan</span>
</h1>


<div class="portrait">
  <img class="about-rect" src="/images/Image1.png" alt="Anujith Muraleedharan">
  <div class="photo-caption">
    <!--<div class="aka">a.k.a <strong>ToNY</strong></div>-->
    <div class="role">Research Associate</div>
    <div class="email">anujithmuralidharan[at]gmail[dot]com</div>
  </div>
</div>

<div class="intro-text">
<p>I am a Research Associate working with Prof. <a href="https://ctech.iitd.ac.in/hanmandlu.html">M. Hanmandlu</a>, building practical, human-centered robotic systems. My focus is at the meeting point of learning and perception. The aim is simple: help robots behave reliably around people, stay steady under noise and latency, and work in everyday environments.</p>

<p>Earlier, at the <a href="https://cambum.net/I3D.htm">I3D Lab</a> at the Indian Institute of Science (IISc), Bangalore with <a href="https://cambum.net/PB/">Pradipta Biswas</a>, I worked on assistive human–robot interaction and designed the controller for an autonomous aircraft taxiing prototype.</p>

<p>I received my Bachelor’s degree in Electronics and Communication Engineering from RIT, Kottayam, graduating with distinction in general scholarship program. As an undergraduate researcher in the Centre for Advanced Signal Processing (<a href="http://www.rit.ac.in/ece/CASP/">CASP lab</a>) with <a href="http://www.rit.ac.in/fprofiledisplay.php?penno=603400&dep=ECE">Dr. Manju Manuel</a>, I worked on FPGA design and implementation. For details on my current directions, see my <a href="https://anujithm.github.io/files/research_statement_2025.html">Research Statement (Feb 2025)</a>.</p>
</div>



<!-- Centered social icons (auto-filled by script below) -->
<div id="social-inline" class="social-inline" aria-label="social-links below research statement"></div>

## selected publications
<div class="eq-note">* denotes equal contribution.</div>

<div style="height:6px;"></div>

<!-- ######## U-LAG ######## -->
<div class="pub-row">
  <img src="/images/ulagg.gif" alt="U-LAG" class="pub-thumb">
  <div class="pub-body">
    <span class="pub-year">2025</span>
    <div class="pub-title">U-LAG: Uncertainty-Aware, Lag-Adaptive Goal Retargeting for Robotic Manipulation</div>
    <div class="pub-auth">Anamika J H*, <strong>Anujith Muraleedharan*</strong></div>
    <div class="pub-venue">IROS 2025 Workshop on Perception and Planning for Mobile Manipulation in Changing Environments</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          Robots manipulating in changing environments must act on percepts that are late, noisy, or stale. We present U-LAG, a mid-execution goal-retargeting layer that leaves the low-level controller unchanged while re-aiming task goals (pre-contact, contact, post) as new observations arrive. Unlike motion retargeting or generic visual servoing, U-LAG treats in-flight goal re-aiming as a first-class, pluggable module between perception and control. Our main technical contribution is UAR-PF, an uncertainty-aware retargeter that maintains a distribution over object pose under sensing lag and selects goals that maximize expected progress. We instantiate a reproducible Shift x Lag stress test in PyBullet/PandaGym for pick, push, stacking, and peg insertion, where the object undergoes abrupt in-plane shifts while synthetic perception lag is injected during approach. Across 0-10 cm shifts and 0-400 ms lags, UAR-PF and ICP degrade gracefully relative to a no-retarget baseline, achieving higher success with modest end-effector travel and fewer aborts; simple operational safeguards further improve stability. Contributions: (1) UAR-PF for lag-adaptive, uncertainty-aware goal retargeting; (2) a pluggable retargeting interface; and (3) a reproducible Shift x Lag benchmark with evaluation on pick, push, stacking, and peg insertion.
        </div>
      </details>

      <a class="link-btn" href="https://www.arxiv.org/abs/2510.02526" target="_blank" rel="noopener">ARXIV</a>
      <a class="link-btn coming-soon" href="#">WEBSITE</a>
    </div>
  </div>
</div>

<!-- ######## SPARQ ######## -->
<div class="pub-row">
  <img src="/images/demo_after_1.gif" alt="SPARQ" class="pub-thumb">
  <div class="pub-body">
    <span class="pub-year">2025</span>
    <div class="pub-title">SPARQ: Selective Progress-Aware Resource Querying</div>
    <div class="pub-auth"> <strong>Anujith Muraleedharan</strong>, Anamika J H</div>
    <div class="pub-venue">CoRL 2025 Workshop on Resource-Rational Robot Learning</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          Human feedback can greatly accelerate robot learning, but in real-world settings, such feedback is costly and limited. Existing human-in-the-loop reinforcement learning (HiL-RL) methods often assume abundant feedback, limiting their practicality for physical robot deployment. In this work, we introduce SPARQ, a progress-aware query policy that requests feedback only when learning stagnates or worsens, thereby reducing unnecessary oracle calls. We evaluate SPARQ on a simulated UR5 cube-picking task in PyBullet, comparing against three baselines: no feedback, random querying, and always querying. Our experiments show that SPARQ achieves near-perfect task success, matching the performance of always querying while consuming about half the feedback budget. It also provides more stable and efficient learning than random querying, and significantly improves over training without feedback. These findings suggest that selective, progress-based query strategies can make HiL-RL more efficient and scalable for robots operating under realistic human effort constraints.
        </div>
      </details>

      <a class="link-btn" href="https://arxiv.org/abs/2509.20541" target="_blank" rel="noopener">ARXIV</a>
      <a class="link-btn coming-soon" href="#">WEBSITE</a>
    </div>
  </div>
</div>

<!-- ######## IUI Assistive ######## -->
<div class="pub-row">
  <img src="/images/Ssmi.png" alt="Assistive Robotic Stamp Printing" class="pub-thumb">
  <div class="pub-body">
    <span class="pub-year">2024</span>
    <div class="pub-title">Eye-Gaze-Enabled Assistive Robotic Stamp Printing System for Individuals with Severe Speech and Motor Impairment</div>
    <div class="pub-auth"><strong>Anujith Muraleedharan</strong>, Anamika J H, Himanshu Vishwakarma, Kudrat Kashyap, Pradipta Biswas</div>
    <div class="pub-venue">Proceedings of the 29th International Conference on Intelligent User Interfaces</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          Robotics is a trailblazing technology that has found extensive applications in the field of assistive aids for individuals with severe speech and motor impairment (SSMI). This article describes the design and development of an eye gaze-controlled user interface to manipulate the robotic arm. User studies were reported to engage users through eye gaze input to select stamps from the two designs and select the stamping location on cards using three designated boxes present in the User Interface. The entire process, from stamp selection to stamping location selection, is controlled by eye movements. The user interface contains the print button to initiate the robotic arm that enables the user to independently create personalized stamped cards. Extensive user interface trials revealed that individuals with severe speech and motor impairment showed improvements with a 33.2% reduction in the average time taken and a 42.8% reduction in the standard deviation for the completion of the task. This suggests the effectiveness and potential to enhance the autonomy and creativity of individuals with SSMI, contributing to the development of inclusive assistive technologies.
        </div>
      </details>

      <a class="link-btn" href="https://dl.acm.org/doi/10.1145/3640544.3645236" target="_blank" rel="noopener">PAPER</a>
      <a class="link-btn" href="https://anujithm.github.io/Eye-Gaze-Controlled-Robot.github.io/" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

<!-- ######## Autonomous Taxiing ######## -->
<div class="pub-row">
  <img src="/images/Autotaxii.png" alt="Autonomous Taxiing of Aircraft" class="pub-thumb">
  <div class="pub-body">
    <span class="pub-year">2023</span>
    <div class="pub-title">Developing a Computer Vision based system for Autonomous Taxiing of Aircraft</div>
    <div class="pub-auth">Prashant Gaikwad, Abhishek Mukhopadhyay, <strong>Anujith Muraleedharan</strong>, Mukund Mitra, Pradipta Biswas</div>
    <div class="pub-venue">AVIATION Journal Vol 27 No 4 (2023)</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
         Authors of this paper propose a computer vision based autonomous system for the taxiing of an aircraft in the real world. The system integrates both lane detection and collision detection and avoidance models. The lane detection component employs a segmentation model consisting of two parallel architectures. An airport dataset is proposed, and the collision detection model is evaluated with it to avoid collision with any ground vehicle. The lane detection model identifies the aircraft’s path and transmits control signals to the steer-control algorithm. The steer-control algorithm, in turn, utilizes a controller to guide the aircraft along the central line with 0.013 cm resolution. To determine the most effective controller, a comparative analysis is conducted, ultimately highlighting the Linear Quadratic Regulator (LQR) as the superior choice, boasting an average deviation of 0.26 cm from the central line. In parallel, the collision detection model is also compared with other state-of-the-art models on the same dataset and proved its superiority. A detailed study is conducted in different lighting conditions to prove the efficacy of the proposed system. It is observed that lane detection and collision avoidance modules achieve true positive rates of 92.59% and 85.19%, respectively.
        </div>
      </details>

      <a class="link-btn" href="https://journals.vilniustech.lt/index.php/Aviation/article/view/20588" target="_blank" rel="noopener">PAPER</a>
      <a class="link-btn" href="https://anujithm.github.io/Autonomous-Taxiing-of-Aircraft.github.io/" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

## news

<div class="news-box">
  <ul>
    <li><strong>June 2024</strong>  Started working as a Research Associate under the guidance of Prof. M. Hanmandlu at IIT Delhi.</li>
    <li><strong>April 2024</strong>  Offered admission to M.Tech. Robotics and Autonomous Systems Programme at IISc Bangalore.</li>
    <li><strong>Feb 2024</strong>  A paper regarding assistive HRI accepted in ACM IUI 2024.</li>
    <li><strong>Nov 2023</strong>  A journal paper on computer-vision-based autonomous taxiing of aircraft accepted at <em>Aviation</em>.</li>
    <li><strong>Aug 2023</strong>  Joined as a Research Assistant at I3D Lab, Indian Institute of Science.</li>
    <li><strong>Mar 2023</strong>  Ranked within top 1.58% among 70,361 candidates in ECE.</li>
    <li><strong>Oct 2022</strong>  Started working as Simulation Developer at RobotX Workshops, Berlin.</li>
  </ul>
</div>

<!-- ClustrMaps (auto theme-aware) -->
<div id="visitor-map" class="clustr-wrap">
  <div id="clustrmaps-container"></div>
</div>

<script>
(function () {
  // Your existing ClustrMaps settings (keep your 'd=' token!)
  const BASE = "//cdn.clustrmaps.com/map_v2.js?cl=2d78ad&w=460&t=tt&d=wgbk0X6esLxDulxNcW-HfijKARwiI6c1OHBgMMi-ZmU";
  const CO_LIGHT = "ffffff";  // light bg
  const CO_DARK  = "2b2f36";  // dark bg to blend with your site
  const CMO = "3acc3a", CMN = "ff5353"; // marker colors
  const CT_LIGHT = "000000", CT_DARK = "ffffff"; // title text color

  const holder = document.getElementById("clustrmaps-container");
  if (!holder) return;

  function currentTheme() {
    const s = localStorage.getItem("theme");
    if (s) return s;
    return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  let lastTheme = null, loadTimer = null;

  function loadMap(theme) {
    if (theme === lastTheme) return;
    lastTheme = theme;

    // clear previous content
    holder.innerHTML = "";

    // build src with theme-specific colors
    const co = theme === "dark" ? CO_DARK : CO_LIGHT;
    const ct = theme === "dark" ? CT_DARK : CT_LIGHT;
    const src = `${BASE}&co=${co}&cmo=${CMO}&cmn=${CMN}&ct=${ct}`;

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.id = "clustrmaps";
    s.src = src;
    holder.appendChild(s);
  }

  function scheduleLoad() {
    // debounce rapid toggles
    clearTimeout(loadTimer);
    loadTimer = setTimeout(() => loadMap(currentTheme()), 60);
  }

  // initial load
  scheduleLoad();

  // reload on theme toggle (data-theme flips)
  new MutationObserver(scheduleLoad)
    .observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
})();
</script>


<script>
/* ===== Social icons: render 5 links (no sidebar dependency) ===== */
(function () {
  /* 1) Fill in your links (leave "" to hide an icon) */
  const LINKS = {
    email:    "mailto:anujithmuralidharan@gmail.com",
    scholar:  "https://scholar.google.com/citations?user=YOURID",
    github:   "https://github.com/AnujithM",
    linkedin: "https://www.linkedin.com/in/anujith-muraleedharan-676482312/",
    twitter:  "https://x.com/AnujithMur5713"
  };

  /* 2) SVG icons (use currentColor so CSS controls color) */
  const ICONS = {
    email:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>',
    scholar:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3 2 9l10 6 10-6-10-6Zm0 8.2L6.4 9 12 5.8 17.6 9 12 11.2ZM4 13l8 4.8L20 13v3l-8 4.8L4 16v-3Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.05 1.52 1.05.89 1.52 2.33 1.08 2.9.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 7.5c.85 0 1.7.12 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.39.1 2.64.64.7 1.02 1.6 1.02 2.69 0 3.83-2.34 4.67-4.57 4.92.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 20.5H3.56V9.4h3.38v11.1ZM5.25 8.03a2 2 0 1 1 0-4.01 2 2 0 0 1 0 4ZM21 20.5h-3.38v-5.72c0-1.36-.03-3.1-1.89-3.1-1.9 0-2.19 1.48-2.19 3v5.82H10.2V9.4h3.25v1.51h.05c.45-.85 1.54-1.75 3.18-1.75 3.4 0 4.03 2.24 4.03 5.15v6.19Z"/></svg>',
    twitter:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.59 8.59 0 0 1-2.72 1.04 4.29 4.29 0 0 0-7.33 3.91A12.18 12.18 0 0 1 3.15 4.6a4.29 4.29 0 0 0 1.33 5.73 4.23 4.23 0 0 1-1.94-.54v.05a4.29 4.29 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97 8.6 8.6 0 0 1-5.32 1.83A8.77 8.77 0 0 1 2 18.58a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.19-6.53 12.19-12.19l-.01-.56A8.7 8.7 0 0 0 22.46 6Z"/></svg>'
  };

  function renderIcons() {
    const row = document.getElementById('social-inline');
    if (!row) return;
    row.innerHTML = "";
    const order = ['email','scholar','github','linkedin','twitter'];
    order.forEach(key => {
      const href = (LINKS[key] || "").trim();
      if (!href) return;
      const a = document.createElement('a');
      a.className = 'si';
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', key);
      a.innerHTML = ICONS[key];
      row.appendChild(a);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderIcons);
  } else {
    renderIcons();
  }
})();

/* ===== Under-construction popups for publication WEBSITE buttons ===== */
document.addEventListener('click', function (e) {
  const el = e.target.closest('a.coming-soon');
  if (el) { e.preventDefault(); alert('Under construction.'); }
}, { passive: false });
</script>
