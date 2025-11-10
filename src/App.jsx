
import { useState } from "react";
import {content} from "./content/content.js";
import "./App.css";


export default function App() {
  const [lang, setLang] = useState("sv");
  const t = content[lang];

  return (
    <div className="page">
      <div className="bg-grad" />

      <header className="topbar">
        <div>
          <h1 className="brand">{t.name}</h1>
          <p className="subtitle">{t.role}</p>
        </div>
        <button
          className="lang-btn"
          onClick={() => setLang(lang === "sv" ? "en" : "sv")}
        >
          {lang === "sv" ? "English" : "Svenska"}
        </button>
      </header>

      <div className="layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="photo-wrapper">
            <img
              src="../img/profilbild1.jpg"
              alt={t.name}
              className="photo"
            />
          </div>
          <p className="location">{t.location}</p>

          <div className="section">
            <h2>{t.contactTitle}</h2>
            <div className="contact-list">
              <a href={t.contact.email}>natalie.hallerdal@yahoo.se</a>
              <a href={t.contact.github} target="_blank" rel="noreferrer">
                github.com/natta1995
              </a>
              <a href={t.contact.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/natalie-hällerdal-4b2a9499
              </a>
            </div>
          </div>

          <div className="section">
            <h2>{t.skillsTitle}</h2>
            <ul className="chips">
              {t.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="section">
            <h2>{t.languageTitle}</h2>
            <p>{t.lang1}</p>
            <p>{t.lang2}</p>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="content">
          <section className="card">
            <h2>{t.profileTitle}</h2>
            <p>{t.profileText}</p>
          </section>

          <section className="card">
            <h2>{t.experienceTitle}</h2>
            {t.experience.map((exp, i) => (
              <div key={i} className="item">
                <div className="item-head">
                  <h3>{exp.title}</h3>
                  <span>{exp.period}</span>
                </div>
                <p>{exp.place}</p>
                <p>{exp.text}</p>
              </div>
            ))}
          </section>

          <section className="card">
            <h2>{t.educationTitle}</h2>
            {t.education.map((edu, i) => (
              <div key={i} className="item">
                <div className="item-head">
                    <h3>{edu.title}</h3>
                    <span>{edu.period}</span>
                </div>
                <p>{edu.place}</p>
                <p>{edu.text}</p>
              </div>
            ))}
          </section>


          {/* <section className="card">
            <h2>{t.projectsTitle}</h2>
            <div className="projects">
              {t.projects.map((p, i) => (
                <article key={i} className="project-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <a href={p.link} target="_blank" rel="noreferrer">
                    GitHub →
                  </a>
                </article>
              ))}
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
}
