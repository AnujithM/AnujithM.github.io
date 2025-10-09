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

/* === Align top nav with the content column & equal spacing === */
@media (min-width: 1025px){
  /* shove the masthead (and its inner wrappers) right so its left edge
     lines up with the main column (approx. sidebar width + gutter) */
  .masthead,
  .masthead__inner-wrap,
  .greedy-nav { padding-left: 340px; }   /* tweak 300–340px if needed */

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
.si:hover{ color:var(--mila); transform:translateY(-1px); }
.si:focus{ outline:2px solid var(--mila); outline-offset:4px; }
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
.abs-box{ margin-top:10px; padding:12px 14px; background:#f5f5f5; border-left:3px solid var(--mila); max-width:65ch; border-radius:0; }

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

</style>

<!-- Photo + caption (floats left; text flows on the right) -->
<h1 class="intro-title">Anujith Muraleedharan</h1>

<div class="portrait">
  <img class="about-rect" src="/images/Image1.png" alt="Anujith Muraleedharan">
  <div class="photo-caption">
    <div class="aka">a.k.a <strong>ToNY</strong></div>
    <div class="role">Research Associate</div>
    <div class="mail">anujithmuralidharan[at]gmail[dot]com</div>
  </div>
</div>

<div class="intro-text">
<p>I am a Research Associate working with Prof. <a href="https://ctech.iitd.ac.in/hanmandlu.html">M. Hanmandlu</a>, building practical, human-centered robotic systems. My focus is at the meeting point of learning and perception. The aim is simple: help robots behave reliably around people, stay steady under noise and latency, and work in everyday environments.</p>

<p>Earlier, at the <a href="https://cambum.net/I3D.htm">I3D Lab</a> at the Indian Institute of Science (IISc), Bangalore with <a href="https://cambum.net/PB/">Pradipta Biswas</a>, I worked on assistive human–robot interaction and designed the controller for an autonomous aircraft taxiing prototype.</p>

<p>I earned a B.Tech. in Electronics and Communication Engineering from RIT, Kottayam. As an undergraduate researcher in the Centre for Advanced Signal Processing (<a href="http://www.rit.ac.in/ece/CASP/">CASP lab</a>) with <a href="http://www.rit.ac.in/fprofiledisplay.php?penno=603400&dep=ECE">Dr. Manju Manuel</a>, I worked on FPGA design and implementation. For details on my current directions, see my <a href="https://anujithm.github.io/files/research_statement_2025.html">Research Statement (as of Feb 2025)</a>.</p>
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
          A lag-aware retargeting layer that adapts goal waypoints under sensing latency and sudden object shifts, improving success across pick/place, push, stacking, and peg tasks.
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
    <div class="pub-auth">Anamika J H*, <strong>Anujith Muraleedharan*</strong></div>
    <div class="pub-venue">CoRL 2025 Workshop on Resource-Rational Robot Learning</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          A robot-gated HiL-RL policy that queries a human only when learning stalls, achieving near-oracle success with roughly half the feedback of always-querying baselines.
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
    <div class="pub-venue">ACM Conference on Intelligent User Interfaces (ACM IUI) 2024</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          A gaze-controlled, safety-aware robotic workflow that enables users with SSMI to perform block-printing via intuitive eye-tracking and constrained motion planning.
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
          A monocular pipeline for runway/route perception and rule-based taxiing with real-time detection and path following on a lab testbed.
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
    <li><strong>Jul 2023</strong>  Offered admission to the M.Tech. programme at IIT Madras and IIT Kharagpur.</li>
    <li><strong>Jun 2023</strong>  Provisionally selected for M.Tech. Integrated Circuits and Systems at IIT Bombay (RA/RAP).</li>
    <li><strong>Mar 2023</strong>  Ranked within top 1.58% among 70,361 candidates in ECE.</li>
    <li><strong>Oct 2022</strong>  Started working as Simulation Developer at RobotX Workshops, Berlin.</li>
    <li><strong>Aug 2022</strong>  Completed B.E. (ECE), APJ Abdul Kalam Technological University.</li>
    <li><strong>Jan 2021</strong>  Joined as Undergraduate Researcher in CASP Lab, RIT Kottayam.</li>
  </ul>
</div>

<!-- ClustrMaps Visitor Map -->
<div id="visitor-map" style="margin-top: 10px; text-align: center;">
  <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=2d78ad&w=460&t=tt&d=wgbk0X6esLxDulxNcW-HfijKARwiI6c1OHBgMMi-ZmU&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=000000'></script>
</div>

<script>
/* ===== Social icons: render 5 links (no sidebar dependency) ===== */
(function () {
  /* 1) Fill in your links (leave "" to hide an icon) */
  const LINKS = {
    email:    "mailto:anujithm@example.com",
    scholar:  "https://scholar.google.com/citations?user=YOURID",
    github:   "https://github.com/AnujithM",
    linkedin: "https://www.linkedin.com/in/YOURID/",
    twitter:  "https://twitter.com/YOURID"
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
