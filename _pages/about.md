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
/* Base container */
.page__content{
  font-family: "Lato","Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size:16px;
  line-height:1.78;
  color:#1a1a1a;
  max-width:720px;         /* narrow readable column */
  margin:0 auto;           /* center column */
}

/* Paragraph rhythm */
.page__content p{ margin:0 0 1.1em 0; }

/* Links (Stanford-ish accent) */
.page__content a{
  color:#8C1515;           /* Stanford red */
  text-decoration:none;
  font-weight:600;
}
.page__content a:hover{ text-decoration:underline; }

/* Headings */
.page__content h2,
.page__content h3{
  font-weight:700;
  margin:2.0em 0 0.8em 0;
}

/* Publication blocks (light, clean) */
.pub-row{
  display:flex; align-items:flex-start; gap:16px;
  margin:18px 0; padding:10px 0;
  border-bottom:1px solid rgba(0,0,0,.08);
}
.pub-row:last-of-type{ border-bottom:none; }
.pub-thumb{
  width:170px; border-radius:8px; flex:0 0 auto;
}
.pub-body{ flex:1 1 auto; min-width:0; }
.pub-title{ font-weight:700; font-size:18px; line-height:1.3; }
.pub-auth{ margin-top:4px; }
.pub-venue{ margin-top:4px; font-style:italic; opacity:.9; }

/* Small action buttons (ABS / PAPER / WEBSITE) */
.link-btn, .abs-toggle{
  display:inline-block; padding:6px 10px; font-size:12px;
  border:1px solid rgba(100,100,100,.55); border-radius:4px;
  text-decoration:none; color:inherit; cursor:pointer;
}

/* Details summary reset */
.abs-toggle{ list-style:none; }
.abs-toggle::-webkit-details-marker{ display:none; }

/* Abstract box */
.abs-box{
  margin-top:8px; padding:10px;
  border-left:3px solid rgba(100,100,100,.35);
  max-width:62ch;
}

/* News box */
.news-box{
  max-height: calc(6 * 2.6em);
  overflow-y:auto;
  border:1px solid rgba(0,0,0,.12);
  border-radius:10px;
  padding:10px 14px;
  background:rgba(0,0,0,0.02);
  margin:12px 0 24px 0;
}
.news-box ul{ margin:0; padding-left:1.1em; list-style:disc; }
.news-box li{ margin:0.35em 0; }
</style>

<p>I am a Research Associate working with Prof. <a href="https://ctech.iitd.ac.in/hanmandlu.html">M. Hanmandlu</a>, building practical, human-centered robotic systems. My focus is at the meeting point of learning and perception. The aim is simple: help robots behave reliably around people, stay steady under noise and latency, and work in everyday environments.</p>

<p>Earlier, at the <a href="https://cambum.net/I3D.htm">I3D Lab</a> at the Indian Institute of Science (IISc), Bangalore with <a href="https://cambum.net/PB/">Pradipta Biswas</a>, I worked on assistive human–robot interaction and designed the controller for an autonomous aircraft taxiing prototype.</p>

<p>I earned a B.Tech. in Electronics and Communication Engineering from RIT, Kottayam. As an undergraduate researcher in the Centre for Advanced Signal Processing (<a href="http://www.rit.ac.in/ece/CASP/">CASP lab</a>) with <a href="http://www.rit.ac.in/fprofiledisplay.php?penno=603400&dep=ECE">Dr. Manju Manuel</a>, I worked on FPGA design and implementation. For details on my current directions, see my <a href="https://anujithm.github.io/files/research_statement_2025.html">Research Statement (as of Feb 2025)</a>.</p>

## selected publications

<!-- spacer -->
<div style="height:8px;"></div>

<!-- ######## U-LAG ######## -->
<div class="pub-row">
  <img src="/images/ulagg.gif" alt="U-LAG" class="pub-thumb">
  <div class="pub-body">
    <div class="pub-title">U-LAG: Uncertainty-Aware, Lag-Adaptive Goal Retargeting for Robotic Manipulation</div>
    <div class="pub-auth"><strong>Anujith Muraleedharan</strong>, Anamika J H</div>
    <div class="pub-venue">IROS 2025 Workshop on Perception and Planning for Mobile Manipulation in Changing Environments</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs-toggle">
        <summary class="abs-toggle">ABS</summary>
        <div class="abs-box">
          A lag-aware retargeting layer that adapts goal waypoints under sensing latency and sudden object shifts, improving success across pick/place, push, stacking, and peg tasks.
        </div>
      </details>

      <a class="link-btn" href="https://dl.acm.org/doi/10.1145/3640544.3645236" target="_blank" rel="noopener">PAPER</a>
      <a class="link-btn" href="https://anamika-jh.github.io/" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

<!-- ######## SPARQ ######## -->
<div class="pub-row">
  <img src="/images/demo_after_1.gif" alt="SPARQ" class="pub-thumb">
  <div class="pub-body">
    <div class="pub-title">SPARQ: Selective Progress-Aware Resource Querying</div>
    <div class="pub-auth"><strong>Anujith Muraleedharan</strong>, Anamika J H</div>
    <div class="pub-venue">CoRL 2025 Workshop on Resource-Rational Robot Learning</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs-toggle">
        <summary class="abs-toggle">ABS</summary>
        <div class="abs-box">
          A robot-gated HiL-RL policy that queries a human only when learning stalls, achieving near-oracle success with roughly half the feedback of always-querying baselines.
        </div>
      </details>

      <a class="link-btn" href="https://arxiv.org/pdf/2509.20541" target="_blank" rel="noopener">ARXIV</a>
      <a class="link-btn" href="https://your-sparq-page.example" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

<!-- ######## IUI Assistive ######## -->
<div class="pub-row">
  <img src="/images/Ssmi.png" alt="Assistive Robotic Stamp Printing" class="pub-thumb">
  <div class="pub-body">
    <div class="pub-title">Eye-Gaze-Enabled Assistive Robotic Stamp Printing System for Individuals with Severe Speech and Motor Impairment</div>
    <div class="pub-auth"><strong>Anujith Muraleedharan</strong>, Anamika J H, Himanshu Vishwakarma, Kudrat Kashyap, Pradipta Biswas</div>
    <div class="pub-venue">ACM Conference on Intelligent User Interfaces (ACM IUI) 2024</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs-toggle">
        <summary class="abs-toggle">ABS</summary>
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
    <div class="pub-title">Developing a Computer Vision based system for Autonomous Taxiing of Aircraft</div>
    <div class="pub-auth">Prashant Gaikwad, Abhishek Mukhopadhyay, <strong>Anujith Muraleedharan</strong>, Mukund Mitra, Pradipta Biswas</div>
    <div class="pub-venue">AVIATION Journal Vol 27 No 4 (2023)</div>

    <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
      <details class="abs-toggle">
        <summary class="abs-toggle">ABS</summary>
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
