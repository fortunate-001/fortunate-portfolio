import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    n: "01",
    title: "Cupid AI Assistant",
    type: "AI / FULL STACK",
    year: "2026",
    desc: "A conversational AI product with authentication, persistent conversations, subscriptions, usage limits, image generation and voice features.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Groq", "JWT"],
    live: "https://cupid-ew8y.vercel.app/",
    repo: "https://github.com/fortunate-001/cupid",
    accent: "AI",
  },
  {
    n: "02",
    title: "EstateHub",
    type: "REAL ESTATE / FULL STACK",
    year: "2026",
    desc: "A responsive property platform built around discovery, authentication, admin workflows and a focused real-estate browsing experience.",
    stack: ["React", "Firebase", "JavaScript", "CSS"],
    live: "https://estate-hub-flame.vercel.app/",
    accent: "ESTATE",
  },
  {
    n: "03",
    title: "MyShop",
    type: "E-COMMERCE",
    year: "2026",
    desc: "A modern clothing storefront with Firebase authentication, Firestore products, cart management, search and a responsive shopping experience.",
    stack: ["React", "Firebase", "Firestore", "CSS"],
    accent: "SHOP",
  },

];
const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Firebase",
  "REST APIs",
  "JWT Authentication",
  "Git & GitHub",
  "Vercel",
  "HTML5",
  "CSS3",
];
const nav = ["home", "about", "projects", "skills", "contact"];

function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light",
  );
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-28% 0px -62%" },
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="app">
      <header className="nav">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => go("home")}
            aria-label="Go home"
          >
            <span className="brand-mark">FO</span>
            <span>
              FORTUNATE<span className="dot">.</span>
            </span>
          </button>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {nav.map((x, i) => (
              <button
                key={x}
                className={active === x ? "active" : ""}
                onClick={() => go(x)}
              >
                <span>0{i}</span>
                {x}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="theme"
              aria-label="Toggle theme"
              onClick={() => setDark((v) => !v)}
            >
              <span>{dark ? "LIGHT" : "DARK"}</span>
              <i>{dark ? "☼" : "◐"}</i>
            </button>
            <button
              className="menu-btn"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>
      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="line" /> SOFTWARE ENGINEER{" "}
                <span className="slash">/</span> LAGOS, NIGERIA
              </div>
              <h1>
                Digital products,
                <br />
                <span>built with intent.</span>
              </h1>
              <p className="lead">
                I’m <strong>Fortunate Olawale</strong>, a software engineer
                focused on building responsive interfaces, practical full-stack
                systems and reliable web experiences.
              </p>
              <div className="hero-actions">
                <button className="primary" onClick={() => go("projects")}>
                  View selected work <span>↗</span>
                </button>
                <button className="text-btn" onClick={() => go("contact")}>
                  Let’s talk <span>→</span>
                </button>
              </div>
            </div>
            <div className="hero-side">
              <div className="status-card">
                <div className="status-top">
                  <span className="status-dot" /> CURRENTLY BUILDING
                </div>
                <strong>Full-stack systems</strong>
                <p>Frontend → backend → deployment</p>
                <div className="status-rule" />
                <div className="status-meta">
                  <span>FO / 001</span>
                  <span>2026</span>
                </div>
              </div>
              <div className="code-card">
                <div className="code-head">
                  <span>developer.config</span>
                  <span>01</span>
                </div>
                <pre>
                  <code>
                    <span className="muted">const</span> developer = {"{"}
                    {`\n`} name: <b>'Fortunate'</b>,{`\n`} role:{" "}
                    <b>'Software Engineer'</b>,{`\n`} focus: [
                    <b>'Full Stack'</b>,{`\n`} <b>'Backend'</b>,{" "}
                    <b>'Security'</b>
                    {`\n`} ],{`\n`} status: <b>'building'</b>
                    {`\n`}
                    {"}"};
                  </code>
                </pre>
              </div>
              <div className="hero-index">
                <span>SCROLL TO EXPLORE</span>
                <b>↓</b>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>01 — REACT</span>
            <span>02 — NODE.JS</span>
            <span>03 — MONGODB</span>
            <span>04 — FIREBASE</span>
            <span>05 — REST APIS</span>
          </div>
        </section>

        <section id="about" className="section split">
          <div className="section-label">
            <p className="eyebrow">01 / ABOUT</p>
            <h2>
              Engineer with a<br />
              <em>builder’s mindset.</em>
            </h2>
            <div className="label-number">FO — 2026</div>
          </div>
          <div className="about-copy">
            <p className="large">
              I like turning rough ideas into products people can actually use.
            </p>
            <p>
              My work spans frontend interfaces, backend services,
              authentication, databases and deployment. I care about clean
              structure, responsive experiences and understanding how the pieces
              of an application fit together.
            </p>
            <p>
              Right now, I’m sharpening my backend skills and building toward a
              stronger foundation in secure application development.
            </p>
            <div className="principles">
              <div>
                <b>01</b>
                <span>
                  <strong>PRODUCT THINKING</strong>
                  <small>Build for the person using it.</small>
                </span>
              </div>
              <div>
                <b>02</b>
                <span>
                  <strong>ENGINEERING</strong>
                  <small>Keep the code practical and maintainable.</small>
                </span>
              </div>
              <div>
                <b>03</b>
                <span>
                  <strong>GROWTH</strong>
                  <small>Learn, ship, review, improve.</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>
              <h2>
                Built, shipped &<br />
                <em>still improving.</em>
              </h2>
            </div>
            <p className="section-note">
              A selection of projects across AI, e-commerce, real estate and
              creative web experiences.
            </p>
          </div>
          <div className="projects">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-n">{p.n}</div>
                <div className="project-visual">
                  <span>{p.accent}</span>
                  <i>↗</i>
                </div>
                <div className="project-content">
                  <div className="project-top">
                    <span>{p.type}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer">
                        LIVE SITE ↗
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer">
                        GITHUB ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="skills-intro">
            <p className="eyebrow">03 / TOOLBOX</p>
            <h2>
              The stack
              <br />
              <em>behind the work.</em>
            </h2>
            <p>
              Tools I use to turn ideas into working web applications, with my
              current learning focused on backend systems.
            </p>
            <div className="mini-stats">
              <div>
                <b>04+</b>
                <span>CORE AREAS</span>
              </div>
              <div>
                <b>12</b>
                <span>TOOLS & TECH</span>
              </div>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map((s, i) => (
              <div className="skill" key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s}</b>
                <i>↗</i>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="contact-main">
            <p className="eyebrow">04 / CONTACT</p>
            <h2>
              Let’s make something
              <br />
              <em>worth building.</em>
            </h2>
            <p>
              Open to internships, collaborations, freelance work and
              opportunities to contribute while growing as an engineer.
            </p>
            <a className="primary big" href="mailto:fortunateolawale@gmail.com">
              fortunateolawale@gmail.com <span>↗</span>
            </a>
          </div>
          <div className="contact-links">
            <a
              href="https://github.com/fortunate-001"
              target="_blank"
              rel="noreferrer"
            >
              <span>GITHUB</span>
              <b>↗</b>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <span>LINKEDIN</span>
              <b>↗</b>
            </a>
            <a href="mailto:fortunateolawale@gmail.com">
              <span>EMAIL</span>
              <b>↗</b>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>© 2026 FORTUNATE OLAWALE</span>
        <span>DESIGNED & BUILT WITH REACT</span>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
