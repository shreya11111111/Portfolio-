import { useState, useEffect, useRef } from "react";

const SKILLS = {
  Languages: ["Python", "JavaScript", "PHP", "SQL"],
  Frontend: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Next.js", "PHP CodeIgniter", "MySQL"],
  "Data & Analytics": ["Power BI", "DAX", "Excel", "Pandas", "Numpy"],
  Tools: ["Git", "GitHub", "WordPress", "Flask", "SpaCy", "Elementor"],
  Concepts: ["OOP", "DSA", "REST APIs", "NLP", "SSR / SSG", "SEO"],
};

const PROJECTS = [
  {
    title: "Uber Trip Analysis Dashboard",
    tags: ["Power BI", "DAX", "SQL", "Excel"],
    desc: "Interactive dashboard analyzing 100K+ Uber trips, delivering real-time insights on 12M+ revenue and 250K+ km of trip data with dynamic KPIs and slicers.",
    stats: ["85K+ bookings", "₹12M+ revenue", "250K+ km data"],
    accent: "from-violet-500 to-purple-600",
    dot: "bg-violet-400",
    num: "01",
  },
  {
    title: "Banking Performance Dashboard",
    tags: ["Power BI", "SQL", "DAX", "Excel"],
    desc: "Banking analytics dashboard tracking 10+ KPIs across 50,000+ records — NPA ratio, loan approval rates, and customer churn with 12+ DAX measures.",
    stats: ["50K+ records", "12+ DAX measures", "20% less manual work"],
    accent: "from-sky-500 to-blue-600",
    dot: "bg-sky-400",
    num: "02",
  },
  {
    title: "AI Text Summarization",
    tags: ["Python", "Flask", "SpaCy", "NLP"],
    desc: "Extractive NLP summarization system using SpaCy with tokenization, stop-word removal, and sentence ranking. Flask web interface for live summarization.",
    stats: ["Flask web UI", "SpaCy NLP pipeline", "Sentence ranking"],
    accent: "from-emerald-500 to-teal-600",
    dot: "bg-emerald-400",
    num: "03",
  },
];

const NAV_ITEMS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function App() {
  const [activeNav, setActiveNav] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#080812] text-slate-300 font-['Outfit',sans-serif] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #080812; }
        ::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 99px; }
        .glow-dot { position: fixed; pointer-events: none; z-index: 0; border-radius: 50%; background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%); transition: transform 0.1s linear; }
        .clip-corner { clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%); }
        .grid-bg { background-image: linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px); background-size: 40px 40px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.35s; opacity: 0; }
        .delay-4 { animation-delay: 0.5s; opacity: 0; }
        .cursor { display:inline-block; width:2px; height:1em; background:#818cf8; vertical-align:text-bottom; animation: blink 1s step-end infinite; }
        .skill-pill { transition: all 0.15s ease; }
        .skill-pill:hover { background: rgba(99,102,241,0.2); border-color: rgba(99,102,241,0.5); color: #a5b4fc; transform: translateY(-1px); }
        .project-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .project-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        .nav-pill { transition: all 0.2s ease; }
      `}</style>

      {/* Ambient glow following mouse */}
      <div
        className="glow-dot"
        style={{
          width: 500,
          height: 500,
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none" />

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#080812]/90 backdrop-blur-xl border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-['DM_Mono',monospace] text-indigo-400 text-sm tracking-widest">
            &lt;shreya /&gt;
          </span>
          <nav className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`nav-pill px-4 py-1.5 rounded-full text-sm font-medium ${
                  activeNav === item
                    ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 relative z-10">

        {/* ── Hero ── */}
        <section id="About" className="min-h-screen flex flex-col justify-center pt-16">
          <div className="py-24">

            

            {/* Heading */}
            <h1 className="fade-up delay-2 text-6xl md:text-7xl font-bold leading-none text-white mb-2 tracking-tight">
              Shreya
            </h1>
            <h1 className="fade-up delay-2 text-6xl md:text-7xl font-bold leading-none tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400">
                Panwar
              </span>
              <span className="cursor ml-2" />
            </h1>

            <p className="fade-up delay-3 text-lg text-slate-400 leading-relaxed max-w-xl mb-10 font-light">
              CS student (AI/ML) building full-stack products, data dashboards, and NLP tools.
              Incoming grad 2026 · Based in Delhi, India.
            </p>

            {/* CTAs */}
            <div className="fade-up delay-4 flex flex-wrap gap-3 mb-14">
              <button
                onClick={() => scrollTo("Projects")}
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
              >
                View Projects →
              </button>
              <a
                href="mailto:shreyapanwar051@gmail.com"
                className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold text-sm transition-all"
              >
                Get in touch
              </a>
              <a
                href="https://linkedin.com/in/shreya-panwar"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold text-sm transition-all"
              >
                LinkedIn ↗
              </a>
            </div>

            {/* Stats row */}
            <div className="fade-up delay-4 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { v: "70+", l: "APIs shipped" },
                { v: "150K+", l: "Records analyzed" },
                { v: "5mo", l: "Industry experience" },
              ].map((s) => (
                <div key={s.l} className="border border-white/5 rounded-xl p-4 bg-white/[0.02]">
                  <div className="text-2xl font-bold text-white font-['DM_Mono',monospace]">{s.v}</div>
                  <div className="text-xs text-slate-500 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section id="Experience" className="py-24">
          <SectionLabel label="02" title="Experience" />

          <div className="mt-12 border border-white/5 rounded-2xl bg-white/[0.02] p-8 clip-corner relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white">Software Engineering Intern</h3>
                <p className="text-indigo-400 font-medium mt-1">Piana IT Solutions Pvt Ltd · Delhi</p>
              </div>
              <span className="self-start px-3 py-1 rounded-full text-xs font-['DM_Mono',monospace] bg-white/5 border border-white/10 text-slate-400 whitespace-nowrap">
                Jul – Nov 2025
              </span>
            </div>

            <ul className="space-y-4">
              {[
                "Engineered 50–60 backend APIs in Next.js following REST standards to support scalable application features.",
                "Developed 3 interactive, mobile-optimized websites using WordPress & Elementor focused on performance.",
                "Created 20+ server-side APIs with PHP CodeIgniter and structured relational data models in MySQL.",
                "Optimized 30+ MySQL queries via indexing and schema refinement — improved API response time by 35%.",
                "Implemented Next.js SSR and API route optimizations across 10+ modules, boosting load speed and SEO.",
              ].map((b, i) => (
                <li key={i} className="flex gap-4 text-slate-400 text-sm leading-relaxed">
                  <span className="text-indigo-500 font-['DM_Mono',monospace] text-xs mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
              {["Next.js", "PHP CodeIgniter", "MySQL", "WordPress", "REST APIs", "SSR"].map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="Projects" className="py-24">
          <SectionLabel label="03" title="Projects" />

          <div className="mt-12 space-y-6">
            {PROJECTS.map((p) => (
              <div key={p.title} className="project-card border border-white/5 rounded-2xl bg-white/[0.02] p-8 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${p.accent} opacity-5 blur-3xl pointer-events-none`} />

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
                  <span className={`font-['DM_Mono',monospace] text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${p.accent} opacity-40`}>
                    {p.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2.5 py-0.5 text-xs rounded-md bg-white/5 border border-white/10 text-slate-400 font-['DM_Mono',monospace]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-4">
                  {p.stats.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dot}`} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="Skills" className="py-24">
          <SectionLabel label="04" title="Skills" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="border border-white/5 rounded-xl p-5 bg-white/[0.02]">
                <p className="text-xs font-['DM_Mono',monospace] text-indigo-400 mb-4 tracking-widest uppercase">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill px-3 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-slate-400 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education card */}
          <div className="mt-6 border border-white/5 rounded-xl p-6 bg-white/[0.02] flex items-start gap-5">
            <div className="text-3xl shrink-0">🎓</div>
            <div>
              <h3 className="font-bold text-white text-base">B.Tech in Computer Science (AIML)</h3>
              <p className="text-indigo-400 text-sm mt-0.5">Noida Institute of Engineering Technology · CGPA: 6.9</p>
              <p className="text-slate-500 text-xs mt-1">Greater Noida, UP · Expected August 2026</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {["Python for Data Science", "Intro to AI (IBM)", "Human-Centered Design (UoT)"].map((c) => (
                  <span key={c} className="px-2.5 py-0.5 text-xs rounded-full bg-white/5 border border-white/10 text-slate-500">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="Contact" className="py-24">
          <SectionLabel label="05" title="Contact" />

          <div className="mt-12 border border-white/5 rounded-2xl bg-white/[0.02] p-12 text-center relative overflow-hidden clip-corner">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-violet-600/5 pointer-events-none" />
            <h2 className="text-4xl font-bold text-white mb-4">Let's build something.</h2>
            <p className="text-slate-400 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Open to frontend developer roles, internships, and freelance work.
              Drop me a message anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:shreyapanwar051@gmail.com"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors"
              >
                shreyapanwar051@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/shreya-panwar"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-semibold transition-all"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/shreyapanwar"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-sm font-semibold transition-all"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="relative z-10 border-t border-white/5 text-center py-8 text-slate-600 text-xs font-['DM_Mono',monospace]">
        &copy; {new Date().getFullYear()} Shreya Panwar — Designed & coded with care.
      </footer>
    </div>
  );
}

function SectionLabel({ label, title }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-['DM_Mono',monospace] text-xs text-indigo-500 opacity-60">{label}</span>
      <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  );
}