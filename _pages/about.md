---
permalink: /
title: "About Me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<!-- ===== Reference-like typography & layout (local to this page) ===== -->
<style>
:root{
  --mila:#c2185b;          /* Mila Québec primary */
  --mila-hover:#e91e63;    /* brighter hover */
  --btn-border: rgba(0,0,0,.55); /* black-ish outline for all buttons */
}

/* --- base page --- */
.page__content{
  font-family:"Lato","Roboto","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
  font-size:17px; line-height:1.8; color:#1a1a1a;
  max-width:780px; margin:0 auto;
}
.page__content p{ margin:0 0 1.3em 0; }

/* inline links */
.page__content a{ color:var(--mila); font-weight:600; text-decoration:none; }
.page__content a:hover{ color:var(--mila-hover); text-decoration:underline; }

/* section heading (reference-like) */
.page__content h2{
  font-family:"Roboto","Lato",system-ui,sans-serif;
  font-size:34px; font-weight:300; line-height:1.25;
  margin:2.2em 0 .9em 0; text-transform:lowercase;
}
.page__content h3{ font-weight:600; margin:2em 0 .8em 0; }

/* ---------- Publication cards ---------- */
.pub-row{
  display:flex; align-items:flex-start; gap:22px;
  margin:26px 0; padding:0 0 20px 0;
  border-bottom:1px solid rgba(0,0,0,0.08);
}
.pub-row:last-of-type{ border-bottom:none; }

.pub-thumb{
  width:190px; border-radius:10px; flex:0 0 auto;
  box-shadow:0 1px 4px rgba(0,0,0,0.15);
}

.pub-body{ flex:1 1 auto; position:relative; padding-right:120px; }
.pub-title{
  font-weight:500; font-size:20px; line-height:1.45;
  margin:0 0 6px 0; letter-spacing:.1px;
}
.pub-auth{ font-size:16px; margin:0 0 4px 0; }
.pub-venue{ font-style:italic; color:#555; opacity:.9; margin:0 0 6px 0; }

/* year in right gutter */
.pub-year{
  position:absolute; right:-12px; top:2px;
  font-size:34px; color:rgba(0,0,0,0.08); font-weight:500; pointer-events:none;
}

/* ---------- Buttons (ABS / PAPER / WEBSITE) ---------- */
/* Black outline, Mila text */
.link-btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:6px 12px; min-height:34px; line-height:1;
  font-size:12px;
  border:1px solid var(--btn-border);   /* black outline */
  border-radius:6px; background:#fff; color:var(--mila); /* Mila text */
  text-decoration:none; cursor:pointer;
}
.link-btn:hover{ background:#fafafa; border-color:#000; color:var(--mila-hover); }

/* ABS details — SUMMARY styled exactly like the .link-btn above */
.abs{ display:inline-block; }
.abs > summary{ list-style:none; }
.abs > summary::-webkit-details-marker{ display:none; }
.abs > summary{
  display:inline-flex; align-items:center; justify-content:center;
  padding:6px 12px; min-height:34px; line-height:1; font-size:12px;
  border:1px solid var(--btn-border);
  border-radius:6px; background:#fff; color:var(--mila); cursor:pointer;
}
.abs > summary:hover{ background:#fafafa; border-color:#000; color:var(--mila-hover); }

/* ABS dropdown panel: like the reference (no full box, soft bg, Mila left bar) */
.abs-box{
  margin-top:10px; padding:12px 14px; background:#f5f5f5;
  border-left:3px solid var(--mila); max-width:65ch;
  border-radius:0;  /* not a rounded box */
}

/* News box (unchanged) */
.news-box{
  max-height:calc(6 * 2.6em); overflow-y:auto;
  border:1px solid rgba(0,0,0,.12); border-radius:10px;
  padding:10px 14px; background:rgba(0,0,0,0.02); margin:12px 0 24px 0;
}
.news-box ul{ margin:0; padding-left:1.1em; list-style:disc; }
.news-box li{ margin:0.35em 0; }

/* Mobile */
@media (max-width:700px){
  .pub-year{ display:none; }
  .pub-body{ padding-right:0; }
}

/* ---------- Under-construction modal ---------- */
.uc-backdrop{
  position:fixed; inset:0; background:rgba(0,0,0,.45);
  display:none; align-items:center; justify-content:center; z-index:9999;
}
.uc-card{
  background:#fff; border-radius:14px; max-width:520px; width:min(92vw,520px);
  box-shadow:0 10px 30px rgba(0,0,0,.25);
  padding:20px 22px 18px 22px; position:relative;
  border:1px solid rgba(0,0,0,.1);
}
.uc-close{
  position:absolute; top:8px; right:10px; border:none; background:transparent;
  font-size:22px; line-height:1; cursor:pointer; color:#666;
}
.uc-title{
  font-weight:600; font-size:18px; color:#222; margin:0 0 10px 0;
}
.uc-row{ display:flex; gap:14px; align-items:center; }
.uc-illu{
  width:78px; height:78px; flex:0 0 auto;
  border-radius:12px; background:#fff4f8; display:grid; place-items:center;
  border:1px solid rgba(0,0,0,.08);
}
.uc-text{ color:#444; line-height:1.6; }
.uc-text a{ color:var(--mila); text-decoration:underline; }
</style>

<p>I am a Research Associate working with Prof. <a href="https://ctech.iitd.ac.in/hanmandlu.html">M. Hanmandlu</a>, building practical, human-centered robotic systems. My focus is at the meeting point of learning and perception. The aim is simple: help robots behave reliably around people, stay steady under noise and latency, and work in everyday environments.</p>

<p>Earlier, at the <a href="https://cambum.net/I3D.htm">I3D Lab</a> at the Indian Institute of Science (IISc), Bangalore with <a href="https://cambum.net/PB/">Pradipta Biswas</a>, I worked on assistive human–robot interaction and designed the controller for an autonomous aircraft taxiing prototype.</p>

<p>I earned a B.Tech. in Electronics and Communication Engineering from RIT, Kottayam. As an undergraduate researcher in the Centre for Advanced Signal Processing (<a href="http://www.rit.ac.in/ece/CASP/">CASP lab</a>) with <a href="http://www.rit.ac.in/fprofiledisplay.php?penno=603400&dep=ECE">Dr. Manju Manuel</a>, I worked on FPGA design and implementation. For details on my current directions, see my <a href="https://anujithm.github.io/files/research_statement_2025.html">Research Statement (as of Feb 2025)</a>.</p>

## selected publications

<div style="height:6px;"></div>

<!-- ######## U-LAG ######## -->
<div class="pub-row">
  <img src="/images/ulagg.gif" alt="U-LAG" class="pub-thumb">
  <div class="pub-body">
    <span class="pub-year">2025</span>
    <div class="pub-title">U-LAG: Uncertainty-Aware, Lag-Adaptive Goal Retargeting for Robotic Manipulation</div>
    <div class="pub-auth"><strong>Anujith Muraleedharan</strong>, Anamika J H</div>
    <div class="pub-venue">IROS 2025 Workshop on Perception and Planning for Mobile Manipulation in Changing Environments</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          A lag-aware retargeting layer that adapts goal waypoints under sensing latency and sudden object shifts, improving success across pick/place, push, stacking, and peg tasks.
        </div>
      </details>

      <a class="link-btn" href="https://dl.acm.org/doi/10.1145/3640544.3645236" target="_blank" rel="noopener">PAPER</a>
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
    <div class="pub-auth"><strong>Anujith Muraleedharan</strong>, Anamika J H</div>
    <div class="pub-venue">CoRL 2025 Workshop on Resource-Rational Robot Learning</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs">
        <summary>ABS</summary>
        <div class="abs-box">
          A robot-gated HiL-RL policy that queries a human only when learning stalls, achieving near-oracle success with roughly half the feedback of always-querying baselines.
        </div>
      </details>

      <a class="link-btn" href="https://arxiv.org/pdf/2509.20541" target="_blank" rel="noopener">ARXIV</a>
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

<!-- ===== Under-Construction Modal (custom, no browser alert) ===== -->
<div class="uc-backdrop" id="uc">
  <div class="uc-card" role="dialog" aria-modal="true" aria-labelledby="uctitle">
    <button class="uc-close" aria-label="Close">&times;</button>
    <div class="uc-title" id="uctitle">Under construction</div>
    <div class="uc-row">
      <div class="uc-illu" aria-hidden="true">
        <!-- tiny inline SVG illustration -->
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="15" width="20" height="6" rx="2" stroke="#c2185b" />
          <path d="M4 15V7l6-3 6 3v8" stroke="#c2185b"/>
          <circle cx="7" cy="21" r="1.2" fill="#c2185b"/>
          <circle cx="17" cy="21" r="1.2" fill="#c2185b"/>
          <path d="M8 10h8" stroke="#c2185b" />
        </svg>
      </div>
      <div class="uc-text">
        This project page is being prepared.  
        Check back soon or ping me if you’d like early details.
      </div>
    </div>
  </div>
</div>

<!-- Coming-soon behavior -->
<script>
(function(){
  const uc = document.getElementById('uc');
  const closeBtn = uc.querySelector('.uc-close');
  function openModal(){ uc.style.display = 'flex'; }
  function closeModal(){ uc.style.display = 'none'; }

  document.addEventListener('click', function(e){
    const el = e.target.closest('a.coming-soon');
    if(el){ e.preventDefault(); openModal(); }
    if(e.target === uc){ closeModal(); }   // click backdrop to close
  });
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
})();
</script>
