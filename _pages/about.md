---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<span style="font-size: 14px;">I am currently working as a Research Associate under the guidance of [M. Hanmandlu](https://ctech.iitd.ac.in/hanmandlu.html), IIT Delhi. Previously, I held the position of Research Associate 2 at the [I3D lab](https://cambum.net/I3D.htm) of the Indian Institute of Science, Bangalore, guided by [Pradipta Biswas](https://cambum.net/PB/), focusing on human-robot interaction. I completed my undergraduate studies at RIT, Kottayam, specializing in Electronics and Communication Engineering. During my time at RIT, I was as an Undergraduate Researcher at the Centre for Advanced Signal Processing ([CASP lab](http://www.rit.ac.in/ece/CASP/)) under mentorship of [Manju Manuel](http://www.rit.ac.in/fprofiledisplay.php?penno=603400&dep=ECE), where I worked on FPGA design and implementation.</span>.

Research
======
<span style="font-size: 14px;">My research interests lie at the intersection of reinforcement learning and robotic perception, focusing on developing systems capable of operating in unstructured, human-centric environments while formulating policies for safe and efficient human collaboration</span>.<br>
<span style="font-size: 14px;">
[Research Statement (as of Feb 2025)](https://anujithm.github.io/files/research_statement_2025.html)
</span>              

## Selected Publications [Google Scholar](https://scholar.google.com/citations?user=4-55tyYAAAAJ&hl=en)

<style>
.pub{display:flex;align-items:center;gap:20px;margin:22px 0}
.pub img{width:300px;border-radius:10px}
.pub-actions{display:flex;gap:10px;margin-top:10px;flex-wrap:wrap}
.btn{display:inline-block;padding:6px 10px;font-size:12px;line-height:1;border:1px solid rgba(0,0,0,.25);border-radius:4px;background:transparent;text-decoration:none}
.btn:hover{background:rgba(0,0,0,.06);text-decoration:none}
details.abs{display:inline-block}
details.abs>summary{list-style:none;cursor:pointer}
details.abs>summary::-webkit-details-marker{display:none}
details.abs>summary.btn{display:inline-block}
.abs-body{margin-top:8px;padding:10px;border-left:3px solid rgba(0,0,0,.2);font-size:14px;max-width:60ch}
@media (max-width:720px){
  .pub{flex-direction:column;align-items:flex-start}
  .pub img{width:100%;max-width:520px;height:auto}
  .abs-body{max-width:100%}
}
</style>

<!-- U-LAG -->
<div class="pub" markdown="1">
  <img src="/images/Mat.png" alt="U-LAG">
  <div>
    **U-LAG: Uncertainty-Aware, Lag-Adaptive Goal Retargeting for Robotic Manipulation**  
    **Anujith Muraleedharan**, Anamika J H  
    IROS 2025 Workshop on Perception and Planning for Mobile Manipulation in Changing Environments
    <div class="pub-actions">
      <details class="abs">
        <summary class="btn">ABS</summary>
        <div class="abs-body">
          A lag-aware retargeting layer that adapts goal waypoints under sensing latency
          and sudden object shifts, improving success on pick/place, push, stacking, and peg tasks.
        </div>
      </details>
      <a class="btn" href="https://dl.acm.org/doi/10.1145/3640544.3645236" target="_blank" rel="noopener">PAPER</a>
      <a class="btn" href="https://anamika-jh.github.io/" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

<!-- SPARQ -->
<div class="pub" markdown="1">
  <img src="/images/demo_after_1.gif" alt="SPARQ">
  <div>
    **SPARQ: Selective Progress-Aware Resource Querying**  
    **Anujith Muraleedharan**, Anamika J H  
    CoRL 2025 Workshop on Resource-Rational Robot Learning
    <div class="pub-actions">
      <details class="abs">
        <summary class="btn">ABS</summary>
        <div class="abs-body">
          A robot-gated HiL-RL policy that queries humans only when learning stalls,
          reaching near-oracle performance with roughly half the feedback of always-querying baselines.
        </div>
      </details>
      <a class="btn" href="https://arxiv.org/pdf/2509.20541" target="_blank" rel="noopener">ARXIV</a>
      <a class="btn" href="https://your-sparq-page.example" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

<!-- IUI Assistive Robot -->
<div class="pub" markdown="1">
  <img src="/images/Ssmi.png" alt="Assistive Robotic Stamp Printing">
  <div>
    **Eye-Gaze-Enabled Assistive Robotic Stamp Printing System for Individuals with Severe Speech and Motor Impairment**  
    **Anujith Muraleedharan**, Anamika J H, Himanshu Vishwakarma, Kudrat Kashyap, Pradipta Biswas  
    ACM Conference on Intelligent User Interfaces (ACM IUI) 2024
    <div class="pub-actions">
      <details class="abs">
        <summary class="btn">ABS</summary>
        <div class="abs-body">
          A gaze-controlled, safety-aware robotic workflow that enables users with SSMI to perform
          block-printing tasks through intuitive eye-tracking and constrained motion planning.
        </div>
      </details>
      <a class="btn" href="https://dl.acm.org/doi/10.1145/3640544.3645236" target="_blank" rel="noopener">PAPER</a>
      <a class="btn" href="https://anujithm.github.io/Eye-Gaze-Controlled-Robot.github.io/" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

<!-- Autonomous Taxiing -->
<div class="pub" markdown="1">
  <img src="/images/Autotaxii.png" alt="Autonomous Taxiing of Aircraft">
  <div>
    **Developing a Computer Vision based system for Autonomous Taxiing of Aircraft**  
    Prashant Gaikwad, Abhishek Mukhopadhyay, **Anujith Muraleedharan**, Mukund Mitra, Pradipta Biswas  
    AVIATION Journal Vol 27 No 4 (2023)
    <div class="pub-actions">
      <details class="abs">
        <summary class="btn">ABS</summary>
        <div class="abs-body">
          A monocular camera pipeline for runway/route perception and rule-based taxiing,
          with real-time detection and path-following on a lab testbed.
        </div>
      </details>
      <a class="btn" href="https://journals.vilniustech.lt/index.php/Aviation/article/view/20588" target="_blank" rel="noopener">PAPER</a>
      <a class="btn" href="https://anujithm.github.io/Autonomous-Taxiing-of-Aircraft.github.io/" target="_blank" rel="noopener">WEBSITE</a>
    </div>
  </div>
</div>

News
------

*  <span style="font-size: 14px;">[**June 2024**]&nbsp;Started working as a Research Associate under the guidance of Prof. M. Hanmandlu at IIT Delhi.</span>
*  <span style="font-size: 14px;">[**April 2024**]&nbsp;Offered admission to M.tech. Robotics and Autonomous Systems Programme at IISc Bangalore</span>
*  <span style="font-size: 14px;">[**Feb 2024**]&nbsp;A paper regarding assistive HRI accepted in ACM IUI 2024</span>
*  <span style="font-size: 14px;">[**Nov 2023**]&nbsp;A journal paper on computer vision based autonomous taxiing of aircraft accepted at Aviation</span>
*  <span style="font-size: 14px;">[**Aug 2023**]&nbsp;Joined as a Research Assistant at I3D lab, Indian Institute of Science</span>                                                   
*  <span style="font-size: 14px;">[**Jul 2023**]&nbsp;Offered admission to M.Tech. Programme at IIT Madras and IIT Kharagpur</span>
*  <span style="font-size: 14px;">[**Jun 2023**]&nbsp;Provisionally selected for M.Tech. Integrated Circuits and Systems Programme at IIT Bombay after written Test and Interview on offline mode under (RA/RAP) category</span> 
*  <span style="font-size: 14px;">[**Mar 2023**]&nbsp;Achieved an overall rank within the top 1.58 percentile among 70,361 candidates registered in the Electronics and Communication Engineering stream</span>
*  <span style="font-size: 14px;">[**Oct 2022**]&nbsp;Started working as simulation developer at RobotX Workshops, Berlin.</span>
*  <span style="font-size: 14px;">[**Aug 2022**]&nbsp;Completed Bachelor's degree from APJ Abdul Kalam Technological University in Electronics and Communication Engineering</span>
<!--*  <span style="font-size: 14px;">[**Jun 2022**]&nbsp;Tenure ended as Undergraduate Researcher</span> -->
*  <span style="font-size: 14px;">[**Jan 2021**]&nbsp;Joined as Undergraduate Researcher in CASP Lab, RIT KOTTAYAM</span><br><br>

<!-- ClustrMaps Visitor Map -->
<div id="visitor-map" style="margin-top: 40px; text-align: center;">
  <script type='text/javascript' id='clustrmaps' src='//cdn.clustrmaps.com/map_v2.js?cl=2d78ad&w=460&t=tt&d=wgbk0X6esLxDulxNcW-HfijKARwiI6c1OHBgMMi-ZmU&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=000000'></script>
</div>
<!-- **Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the academicpages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository. -->