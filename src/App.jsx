import {
  ArrowRight, BrainCircuit, Cloud, Code2, Database, ShieldCheck, BarChart3,
  ServerCog, Workflow, Boxes, CheckCircle2, CalendarDays, UsersRound, BriefcaseBusiness,
  Search, ChevronRight, Sparkles, Layers3, Network, GraduationCap, Rocket, Menu, X
} from 'lucide-react';
import React, { useMemo, useState } from 'react';

const courses = [
  { title: 'AI & Machine Learning', subtitle: 'Data Science • Big Data • ML', icon: BrainCircuit, tag: 'Popular', category: 'AI' },
  { title: 'Agentic AI', subtitle: 'MCP • RAG • Claude • Codex • Frameworks', icon: Sparkles, tag: 'New', category: 'AI' },
  { title: 'Full Stack Development', subtitle: 'Java • Python • React • Node.js • APIs', icon: Code2, category: 'Development' },
  { title: 'Cloud Computing', subtitle: 'AWS • Azure • GCP', icon: Cloud, category: 'Cloud' },
  { title: 'DevOps & DevSecOps', subtitle: 'Jenkins • Azure DevOps • CI/CD', icon: Workflow, category: 'DevOps' },
  { title: 'Cyber Security', subtitle: 'Application • Identity • Secure Engineering', icon: ShieldCheck, category: 'Security' },
  { title: 'Data Analytics', subtitle: 'Power BI • Tableau • BI', icon: BarChart3, category: 'Data' },
  { title: 'Data Modeling', subtitle: 'Databases • SQL • Logical & Physical Models', icon: Database, category: 'Data' },
  { title: 'Data Engineering', subtitle: 'Databricks • PySpark • Kafka', icon: Boxes, category: 'Data' },
  { title: 'Data Warehousing', subtitle: 'ETL • Dimensional Modeling • DW', icon: Layers3, category: 'Data' },
  { title: 'Linux, Kafka & Redis', subtitle: 'Systems • Messaging • Caching', icon: ServerCog, category: 'Infrastructure' },
  { title: 'Solution Architecture', subtitle: 'Application • Cloud • Data • Integration', icon: Network, tag: 'Advanced', category: 'Architecture' },
];

const paths = [
  { title: 'Full Stack Developer', steps: ['JavaScript', 'React', 'APIs', 'Java / Python / Node', 'Database', 'Cloud'] },
  { title: 'Data Engineer', steps: ['SQL', 'Python', 'Data Modeling', 'PySpark', 'Databricks', 'Kafka'] },
  { title: 'AI Engineer', steps: ['Python', 'ML', 'LLMs', 'RAG', 'MCP', 'Agentic AI'] },
  { title: 'Solution Architect', steps: ['Requirements', 'Design', 'APIs', 'Data', 'Cloud', 'Security'] },
];

const highlights = [
  [CalendarDays, 'Flexible Schedules', 'Choose batches that work around college, work, and personal commitments.'],
  [UsersRound, 'Weekend Batches', 'Dedicated weekend programs for working professionals and busy learners.'],
  [BriefcaseBusiness, 'Real-Time Projects', 'Practice with realistic software delivery scenarios—not isolated demos.'],
  [GraduationCap, 'Strong Technical Trainers', 'Learn from professionals with deep enterprise implementation experience.'],
  [CheckCircle2, 'Beginner-Friendly Teaching', 'Complex ideas are explained progressively from foundations to hands-on practice.'],
  [Rocket, 'Career-Oriented Curriculum', 'Every course is mapped to practical technology roles and modern project needs.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return courses;
    return courses.filter(c =>
      `${c.title} ${c.subtitle} ${c.category}`.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top">
            <div className="brand-mark"><Network size={22} /></div>
            <div>
              <div className="brand-name">Nexora</div>
              <div className="brand-sub">TECH ACADEMY</div>
            </div>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a>
            <a href="#paths" onClick={() => setMenuOpen(false)}>Learning Paths</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#why-us" onClick={() => setMenuOpen(false)}>Why Us</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          <div className="nav-actions">
            <a className="btn btn-small btn-outline" href="#courses">Explore Courses</a>
            <a className="btn btn-small btn-primary" href="#contact">Free Counselling</a>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={16} /> Enterprise experience. Career-focused training.</div>
            <h1>
              Learn technology the way it is used in
              <span className="gradient-text"> real software systems.</span>
            </h1>
            <p className="hero-text">
              Industry-focused training in AI, Full Stack, Cloud, Data, DevOps, Cyber Security
              and Solution Architecture—guided by 25+ years of enterprise IT delivery experience.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#courses">Explore Courses <ArrowRight size={18} /></a>
              <a className="btn btn-outline" href="#contact">Talk to a Training Advisor</a>
            </div>

            <div className="hero-stats">
              <div><strong>25+</strong><span>Years IT Experience</span></div>
              <div><strong>12+</strong><span>Technology Programs</span></div>
              <div><strong>100%</strong><span>Project-Focused Learning</span></div>
              <div><strong>∞</strong><span>Growth Mindset</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit-card orbit-card-a">
              <BrainCircuit size={22}/><span>AI</span>
            </div>
            <div className="orbit-card orbit-card-b">
              <Cloud size={22}/><span>Cloud</span>
            </div>
            <div className="orbit-card orbit-card-c">
              <Database size={22}/><span>Data</span>
            </div>
            <div className="orbit-card orbit-card-d">
              <Workflow size={22}/><span>DevOps</span>
            </div>
            <div className="system-card">
              <div className="system-glow" />
              <div className="system-label">MODERN TECHNOLOGY ECOSYSTEM</div>
              <div className="system-title">From Code to Cloud</div>
              <div className="flow">
                {['UI', 'API', 'Services', 'Data', 'Cloud'].map((x, i) => (
                  <div className="flow-item" key={x}>
                    <div className="flow-node">{x}</div>
                    {i < 4 && <ChevronRight className="flow-arrow" size={18} />}
                  </div>
                ))}
              </div>
              <div className="system-footer">
                <span><span className="dot live"/> Enterprise-ready</span>
                <span>Architecture • Security • Scale</span>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container logo-line">
            <span>AI</span><span>JAVA</span><span>PYTHON</span><span>REACT</span><span>AWS</span>
            <span>AZURE</span><span>DATABRICKS</span><span>POWER BI</span><span>DEVOPS</span><span>KAFKA</span>
          </div>
        </section>

        <section className="section container" id="courses">
          <div className="section-head">
            <div>
              <div className="eyebrow">Explore programs</div>
              <h2>Build skills across the modern technology stack.</h2>
            </div>
            <p>Find the program that matches your goal—from first principles to enterprise architecture.</p>
          </div>

          <div className="search-box">
            <Search size={20}/>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search AI, Java, AWS, Databricks, Power BI, DevOps..."
            />
          </div>

          <div className="course-grid">
            {filteredCourses.map(({title, subtitle, icon: Icon, tag}) => (
              <article className="course-card" key={title}>
                <div className="course-top">
                  <div className="icon-box"><Icon size={24}/></div>
                  {tag && <span className="tag">{tag}</span>}
                </div>
                <h3>{title}</h3>
                <p>{subtitle}</p>
                <button className="text-link">View curriculum <ArrowRight size={16}/></button>
              </article>
            ))}
          </div>
        </section>

        <section className="section learning-section" id="paths">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="eyebrow">Learning paths</div>
                <h2>Know where you want to go. We’ll show you the path.</h2>
              </div>
              <p>Career-oriented learning sequences connect technologies into practical job-ready skills.</p>
            </div>

            <div className="path-grid">
              {paths.map((path, idx) => (
                <div className="path-card" key={path.title}>
                  <div className="path-number">0{idx + 1}</div>
                  <h3>{path.title}</h3>
                  <div className="path-steps">
                    {path.steps.map((step, i) => (
                      <div className="step" key={step}>
                        <span>{step}</span>{i < path.steps.length - 1 && <ArrowRight size={14}/>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="projects">
          <div className="project-panel">
            <div className="project-copy">
              <div className="eyebrow">Learn by building</div>
              <h2>Training that goes beyond slides.</h2>
              <p>
                Understand how technologies work together inside real systems. Build end-to-end solutions
                that connect frontend, APIs, services, data, cloud, security and CI/CD.
              </p>
              <div className="check-list">
                {['Realistic project scenarios', 'Architecture-first thinking', 'Hands-on implementation', 'Deployment and support considerations'].map(x => (
                  <div key={x}><CheckCircle2 size={18}/>{x}</div>
                ))}
              </div>
              <a className="btn btn-primary" href="#contact">See project-based training <ArrowRight size={18}/></a>
            </div>

            <div className="architecture">
              <div className="arch-title">REAL-TIME PROJECT FLOW</div>
              {['React Web App', 'REST API', 'Java / Python Services', 'Database + Kafka + Redis', 'Cloud + CI/CD', 'Monitoring + Security'].map((x, i) => (
                <div className="arch-row" key={x}>
                  <span className="arch-index">{String(i + 1).padStart(2,'0')}</span>
                  <span>{x}</span>
                  <span className="pulse-line"/>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Why learners choose us</div>
              <h2>Designed for practical learning and real career growth.</h2>
            </div>
          </div>

          <div className="highlight-grid">
            {highlights.map(([Icon, title, text]) => (
              <div className="highlight-card" key={title}>
                <Icon size={24}/>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section why-section" id="why-us">
          <div className="container why-grid">
            <div>
              <div className="eyebrow">Built on experience</div>
              <h2>25+ years of real IT delivery experience.</h2>
              <p className="why-copy">
                Our training is grounded in decades of software delivery experience across enterprise environments,
                including work associated with Fortune 100 and Fortune 500 organizations.
              </p>
              <p className="why-copy">
                That experience spans the entire lifecycle—requirements, design, data modeling, development,
                testing, CI/CD, deployment, maintenance and production support.
              </p>
              <div className="quote-box">
                “We don’t just teach technologies. We teach how technologies are used to build, run and evolve real systems.”
              </div>
            </div>

            <div className="timeline-card">
              {['Requirement Gathering','Analysis & Design','Solution Architecture','Data Modeling','Development','Testing','CI/CD & Deployment','Maintenance & Support'].map((x, i) => (
                <div className="timeline-item" key={x}>
                  <span className="timeline-dot"/>
                  <div>
                    <small>STAGE {String(i+1).padStart(2,'0')}</small>
                    <strong>{x}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="cta-panel" id="contact">
            <div>
              <div className="eyebrow">Start your next chapter</div>
              <h2>From fundamentals to enterprise architecture.</h2>
              <p>Tell us your background and career goal. We’ll help you identify the right learning path.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-light" href="mailto:training@example.com">Book Free Counselling <ArrowRight size={18}/></a>
              <a className="btn btn-ghost" href="#courses">Browse All Courses</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="brand footer-brand">
              <div className="brand-mark"><Network size={22}/></div>
              <div>
                <div className="brand-name">Nexora</div>
                <div className="brand-sub">TECH ACADEMY</div>
              </div>
            </div>
            <p>Enterprise experience. Practical learning. Modern technology careers.</p>
          </div>
          <div>
            <strong>Programs</strong>
            <a href="#courses">AI & ML</a>
            <a href="#courses">Full Stack</a>
            <a href="#courses">Cloud</a>
            <a href="#courses">Data Engineering</a>
          </div>
          <div>
            <strong>Academy</strong>
            <a href="#why-us">Why Us</a>
            <a href="#paths">Learning Paths</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="container copyright">© 2026 Nexora Tech Academy. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;