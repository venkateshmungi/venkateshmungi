
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=JetBrains+Mono:wght@300;400;500&family=Sora:wght@300;400;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{background:#0d0d12}
.rm{background:#0d0d12;color:#e2e2e2;font-family:'Sora',sans-serif;border-radius:14px;overflow:hidden;border:1px solid rgba(255,255,255,0.07)}
.rm-hero{padding:48px 40px 36px;position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,0.05);text-align:center}
.rm-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.022) 1px,transparent 1px);background-size:36px 36px;pointer-events:none}
.rm-glow1{position:absolute;top:-100px;right:-80px;width:300px;height:300px;background:radial-gradient(circle,rgba(99,91,255,0.1) 0%,transparent 70%);pointer-events:none}
.rm-glow2{position:absolute;bottom:-80px;left:-60px;width:240px;height:240px;background:radial-gradient(circle,rgba(0,200,150,0.07) 0%,transparent 70%);pointer-events:none}
.name-pre{font-family:'Playfair Display',serif;font-size:13px;letter-spacing:0.22em;color:rgba(99,91,255,0.7);text-transform:uppercase;margin-bottom:10px}
.name-main{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:#fff;line-height:1.05;letter-spacing:-0.02em;margin-bottom:6px}
.name-sub{font-size:13px;color:rgba(255,255,255,0.3);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:22px}
.hero-pills{display:flex;flex-wrap:wrap;gap:7px;justify-content:center;margin-bottom:24px}
.hp{padding:5px 13px;border:1px solid rgba(255,255,255,0.1);border-radius:20px;font-size:11px;color:rgba(255,255,255,0.45);font-family:'JetBrains Mono',monospace;display:flex;align-items:center;gap:5px}
.hp-dot{width:5px;height:5px;border-radius:50%}
.hp-v .hp-dot{background:#635bff}
.hp-g .hp-dot{background:#00c896}
.hp-o .hp-dot{background:#f7a24b}
.links{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.lk{padding:6px 14px;background:rgba(99,91,255,0.08);border:1px solid rgba(99,91,255,0.2);border-radius:8px;font-size:11px;color:rgba(99,91,255,0.85);text-decoration:none;font-family:'JetBrains Mono',monospace;letter-spacing:0.04em}
.code-intro{background:#111118;border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:18px 22px;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.8;margin:28px 0 0;text-align:left}
.ck{color:#635bff}.cs{color:#00c896}.cv{color:rgba(255,255,255,0.75)}.cc{color:rgba(255,255,255,0.28);font-style:italic}
.stats-bar{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(255,255,255,0.05)}
.sb{padding:18px 20px;border-right:1px solid rgba(255,255,255,0.05);text-align:center}
.sb:last-child{border-right:none}
.sb-n{font-family:'Playfair Display',serif;font-size:22px;color:#fff;font-weight:700}
.sb-l{font-size:10px;color:rgba(255,255,255,0.28);letter-spacing:0.1em;text-transform:uppercase;margin-top:3px}
.section{padding:28px 36px;border-bottom:1px solid rgba(255,255,255,0.05)}
.sec-head{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.sec-ico{width:28px;height:28px;background:rgba(99,91,255,0.12);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
.sec-title{font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:rgba(255,255,255,0.5);font-weight:600}
.job{margin-bottom:24px;padding:18px 20px;background:rgba(255,255,255,0.025);border-radius:10px;border:1px solid rgba(255,255,255,0.05)}
.job:last-child{margin-bottom:0}
.job-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px}
.job-title{font-size:14px;font-weight:600;color:#fff}
.job-meta{font-size:11px;color:rgba(99,91,255,0.7);font-family:'JetBrains Mono',monospace;white-space:nowrap;margin-left:10px}
.job-org{font-size:12px;color:rgba(255,255,255,0.35);margin-bottom:10px}
.proj-tag{display:inline-block;padding:2px 9px;background:rgba(99,91,255,0.1);border:1px solid rgba(99,91,255,0.2);border-radius:5px;font-size:10px;color:rgba(99,91,255,0.8);font-family:'JetBrains Mono',monospace;margin-bottom:8px}
.bullets{list-style:none;padding:0}
.bullets li{font-size:12px;color:rgba(255,255,255,0.5);line-height:1.65;padding:3px 0 3px 14px;position:relative}
.bullets li::before{content:"·";position:absolute;left:0;color:rgba(99,91,255,0.5)}
.bullets li b{color:rgba(255,255,255,0.8);font-weight:500}
.impact{display:inline;background:rgba(0,200,150,0.08);border:1px solid rgba(0,200,150,0.2);border-radius:4px;padding:1px 6px;font-size:10px;color:rgba(0,200,150,0.9);font-family:'JetBrains Mono',monospace;margin-left:4px}
.skills-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.sk-cat{margin-bottom:0}
.sk-label{font-size:10px;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:8px}
.sk-chips{display:flex;flex-wrap:wrap;gap:5px}
.chip{padding:4px 10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:5px;font-size:11px;color:rgba(255,255,255,0.5);font-family:'JetBrains Mono',monospace}
.chip.hi{border-color:rgba(99,91,255,0.3);color:rgba(99,91,255,0.8);background:rgba(99,91,255,0.07)}
.chip.teal{border-color:rgba(0,200,150,0.25);color:rgba(0,200,150,0.75);background:rgba(0,200,150,0.05)}
.edu-row{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.05)}
.edu-row:last-child{border-bottom:none}
.edu-deg{font-size:13px;color:#fff;font-weight:500}
.edu-inst{font-size:11px;color:rgba(255,255,255,0.3);margin-top:2px}
.edu-badge{font-size:10px;padding:3px 9px;border-radius:5px;background:rgba(99,91,255,0.1);border:1px solid rgba(99,91,255,0.2);color:rgba(99,91,255,0.7);font-family:'JetBrains Mono',monospace;white-space:nowrap;margin-left:10px}
.cert-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.cert{padding:10px 12px;background:rgba(255,255,255,0.025);border-radius:8px;border:1px solid rgba(255,255,255,0.05)}
.cert-name{font-size:11px;color:rgba(255,255,255,0.7);font-weight:500;line-height:1.4}
.cert-by{font-size:10px;color:rgba(255,255,255,0.28);margin-top:3px}
.footer-band{padding:20px 36px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.footer-cta{font-size:12px;color:rgba(255,255,255,0.3);font-style:italic}
.footer-links{display:flex;gap:10px}
.fl{font-size:11px;color:rgba(99,91,255,0.7);font-family:'JetBrains Mono',monospace;text-decoration:none;padding:4px 10px;border:1px solid rgba(99,91,255,0.2);border-radius:6px}
.footer-wave{height:40px;background:linear-gradient(to right,#24243e,#302b63,#0f0c29);border-radius:0 0 14px 14px}
</style>

<h2 class="sr-only">Full GitHub README preview for Mungi Venkatesh — AI/ML Engineer</h2>

<div class="rm">

  <div class="rm-hero">
    <div class="rm-grid"></div>
    <div class="rm-glow1"></div>
    <div class="rm-glow2"></div>
    <div class="name-pre">AI / ML Engineer · Amaravati, India</div>
    <div class="name-main">Mungi Venkatesh</div>
    <div class="name-sub">Generative AI · RAG · NL2SQL · Voice AI · Quantum Computing</div>
    <div class="hero-pills">
      <div class="hp hp-v"><div class="hp-dot"></div>GCP Deployed</div>
      <div class="hp hp-g"><div class="hp-dot"></div>LLM Pipelines</div>
      <div class="hp hp-o"><div class="hp-dot"></div>500K+ Citizens Served</div>
      <div class="hp hp-v"><div class="hp-dot"></div>3.9 yrs Experience</div>
      <div class="hp hp-g"><div class="hp-dot"></div>Open to Work</div>
    </div>
    <div class="links">
      <a class="lk" href="https://www.linkedin.com/in/venkatesh-mungi-320233258">LinkedIn</a>
      <a class="lk" href="https://github.com/venkateshmungi/">GitHub</a>
      <a class="lk" href="mailto:vmentanglement@gmail.com">Gmail</a>
      <a class="lk" href="tel:+919676079392">+91 96760 79392</a>
    </div>
    <div class="code-intro">
      <span class="ck">const</span> <span class="cv">mungi</span>: <span class="cs">AIMLEngineer</span> = {<br>
      &nbsp;&nbsp;<span class="cv">experience</span> : <span class="cs">"3.9 years · production-grade GenAI systems"</span>,<br>
      &nbsp;&nbsp;<span class="cv">expertise</span>  : [<span class="cs">"RAG"</span>, <span class="cs">"NL2SQL"</span>, <span class="cs">"multilingual NLP"</span>, <span class="cs">"voice AI"</span>],<br>
      &nbsp;&nbsp;<span class="cv">stack</span>      : <span class="cs">"GCP · LangChain · FastAPI · FAISS · VertexAI"</span>,<br>
      &nbsp;&nbsp;<span class="cv">impact</span>     : <span class="cs">"500K+ citizens · 60% efficiency gains · 99.7% uptime"</span>,<br>
      &nbsp;&nbsp;<span class="cc">// turning proprietary govt-scale experience into public demos</span><br>
      }
    </div>
  </div>

  <div class="stats-bar">
    <div class="sb"><div class="sb-n">3.9</div><div class="sb-l">Years Exp</div></div>
    <div class="sb"><div class="sb-n">500K+</div><div class="sb-l">Citizens</div></div>
    <div class="sb"><div class="sb-n">99.7%</div><div class="sb-l">Uptime</div></div>
    <div class="sb"><div class="sb-n">60%</div><div class="sb-l">Efficiency↑</div></div>
  </div>

  <div class="section">
    <div class="sec-head">
      <div class="sec-ico">💼</div>
      <div class="sec-title">Work Experience</div>
    </div>

    <div class="job">
      <div class="job-top">
        <div class="job-title">AI Engineer — Entrolabs (Client: Govt. of AP)</div>
        <div class="job-meta">Mar–Nov 2025</div>
      </div>
      <div class="job-org">Hyderabad · Government Scale · GCP</div>
      <div class="proj-tag">Dr. AI — AP Child Health Assistant</div>
      <ul class="bullets">
        <li>Multilingual voice assistant (En/Hi/Te) → <b>500K+ citizens</b>, 40% better health access <span class="impact">-50% manual work</span></li>
        <li>RAG: <b>IndicSBERT + FAISS</b> → 92% accuracy, &lt;2s latency on medical queries</li>
        <li>GCP STT/TTS with custom acoustic models → <b>35% lower transcription error</b> for Indian accents</li>
        <li>FastAPI microservices: 10K+ daily requests, 99.7% uptime, caching + async</li>
        <li>Auto PDF receipt generation — <b>2,000+ daily transactions</b>, saves 15 hrs/week</li>
      </ul>
      <br/>
      <div class="proj-tag">MEPMA — Govt Data Analysis AI</div>
      <ul class="bullets">
        <li>NL2SQL: <b>4 hours → 5 minutes</b> for report generation using plain language queries</li>
        <li>Hybrid LLM (Gemini 1.5 + Mistral Codestral) → <b>88% accuracy</b> on complex joins</li>
        <li>Voice-enabled analytics for <b>200+ officials</b> → 60% faster decision cycles</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-top">
        <div class="job-title">ML Engineer — Inoble Infoway (Client: Mahindra & Mahindra)</div>
        <div class="job-meta">Jan–Sep 2024</div>
      </div>
      <ul class="bullets">
        <li><b>Intelligent Query System</b> — LangChain RAG on PDF manuals, 90% accuracy, 95% user satisfaction</li>
        <li><b>Call Audio Analyzer</b> — GCP Vertex AI assessing agent tone, skills, and CSAT scores</li>
      </ul>
    </div>

    <div class="job">
      <div class="job-top">
        <div class="job-title">Junior Data Scientist — SocialTek AI ML</div>
        <div class="job-meta">Sep 2021–Oct 2023</div>
      </div>
      <ul class="bullets">
        <li>EDA, feature engineering, and traditional ML for business analytics</li>
        <li>NLP pipelines: NER, sentiment analysis, deep learning; self-driven project portfolio</li>
      </ul>
    </div>

    <div class="job" style="margin-bottom:0">
      <div class="job-top">
        <div class="job-title">Desktop Support / Data Analyst — Apollo Hospitals (UPHC, Govt. AP)</div>
        <div class="job-meta">Jan 2020–Aug 2021</div>
      </div>
      <ul class="bullets">
        <li>Healthcare data collection, cluster-wise reporting, COVID-19 vaccination tracking</li>
        <li>IT infrastructure — hardware, software, networks, asset management</li>
      </ul>
    </div>
  </div>

  <div class="section">
    <div class="sec-head">
      <div class="sec-ico">🛠️</div>
      <div class="sec-title">Tech Stack</div>
    </div>
    <div class="skills-grid">
      <div class="sk-cat">
        <div class="sk-label">GenAI / LLM</div>
        <div class="sk-chips">
          <span class="chip hi">LangChain</span><span class="chip hi">LlamaIndex</span><span class="chip hi">RAG</span><span class="chip hi">NL2SQL</span><span class="chip hi">VertexAI</span><span class="chip hi">Gemini 1.5</span><span class="chip hi">HuggingFace</span><span class="chip hi">FAISS</span>
        </div>
      </div>
      <div class="sk-cat">
        <div class="sk-label">Cloud & DevOps</div>
        <div class="sk-chips">
          <span class="chip teal">GCP</span><span class="chip teal">Azure</span><span class="chip teal">AWS</span><span class="chip teal">FastAPI</span><span class="chip teal">Flask</span><span class="chip teal">Git</span>
        </div>
      </div>
      <div class="sk-cat">
        <div class="sk-label">ML / DL</div>
        <div class="sk-chips">
          <span class="chip">TensorFlow</span><span class="chip">PyTorch</span><span class="chip">Scikit-Learn</span><span class="chip">XGBoost</span><span class="chip">CUDA</span><span class="chip">OpenCV</span><span class="chip">YOLO</span>
        </div>
      </div>
      <div class="sk-cat">
        <div class="sk-label">NLP & Interfaces</div>
        <div class="sk-chips">
          <span class="chip">spaCy</span><span class="chip">NLTK</span><span class="chip">BERT</span><span class="chip">Transformers</span><span class="chip">Streamlit</span><span class="chip">Gradio</span>
        </div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="sec-head">
      <div class="sec-ico">🎓</div>
      <div class="sec-title">Education</div>
    </div>
    <div class="edu-row">
      <div><div class="edu-deg">Master of Computer Applications (MCA)</div><div class="edu-inst">IGNOU</div></div>
      <div class="edu-badge">PG</div>
    </div>
    <div class="edu-row">
      <div><div class="edu-deg">M.Sc. Geophysics</div><div class="edu-inst">Andhra University</div></div>
      <div class="edu-badge">PG</div>
    </div>
    <div class="edu-row">
      <div><div class="edu-deg">B.Sc. Computer Science</div><div class="edu-inst">Andhra University</div></div>
      <div class="edu-badge">UG</div>
    </div>
  </div>

  <div class="section">
    <div class="sec-head">
      <div class="sec-ico">🏆</div>
      <div class="sec-title">Certifications</div>
    </div>
    <div class="cert-grid">
      <div class="cert"><div class="cert-name">Master Data Management</div><div class="cert-by">TCS iON</div></div>
      <div class="cert"><div class="cert-name">Data Visualization</div><div class="cert-by">Tata Group</div></div>
      <div class="cert"><div class="cert-name">Azure ML & MLOps</div><div class="cert-by">Udemy</div></div>
      <div class="cert"><div class="cert-name">Deep Learning</div><div class="cert-by">IBM</div></div>
      <div class="cert"><div class="cert-name">Data Analysis with Python</div><div class="cert-by">freeCodeCamp</div></div>
      <div class="cert"><div class="cert-name">Rapid Developer (Low-Code)</div><div class="cert-by">Mendix</div></div>
      <div class="cert"><div class="cert-name">Python 3 Certification</div><div class="cert-by">AttainU</div></div>
      <div class="cert"><div class="cert-name">Web Development</div><div class="cert-by">Microsoft</div></div>
      <div class="cert"><div class="cert-name">Six Sigma Course</div><div class="cert-by">Oxford</div></div>
    </div>
  </div>

  <div class="footer-band">
    <div class="footer-cta">Always eager to learn, build, and collaborate on meaningful AI/ML projects.</div>
    <div class="footer-links">
      <a class="fl" href="https://www.linkedin.com/in/venkatesh-mungi-320233258">LinkedIn</a>
      <a class="fl" href="https://github.com/venkateshmungi/">GitHub</a>
      <a class="fl" href="mailto:vmentanglement@gmail.com">Email</a>
    </div>
  </div>

  <div class="footer-wave"></div>

</div>
