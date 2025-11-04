
import { useState } from "react";
import "./App.css";

const content = {
  sv: {
    role: "Frontend Graduate – studerar Backend → mot Fullstack & IT-konsult",
    location: "Sverige",
    profileTitle: "Profil",
    profileText:
      "Strukturerad och lösningsorienterad utvecklare som gillar att förstå helheten, dela upp problem i mindre delar och bygga gränssnitt som faktiskt går att använda. Har frontendbakgrund med fokus på webbsäkerhet och bygger nu på med backend och cloud för att bli mer fullstack.",
    experienceTitle: "Erfarenhet",
    educationTitle: "Utbildning",
    projectsTitle: "Projekt",
    contactTitle: "Kontakt",
    skillsTitle: "Skills",
    experience: [
      {
        title: "Frontend utvecklare intern",
        place: "Senssera AB",
        period: "nov 2023 - maj 2024",
        text: "Byggde en responsiv gränssnitt i React med TypeScript och komponentbaserad struktur."
      },
    ],
    education: [
      {
        title: "Frontendutvecklare med inriktning webbsäkerhet (examaminerad)",
        place: "Jensen Yrkeshögskola",
        period: "2022 – 2024",
        text: "Fokus på moderna webbtekniker, UI och säkerhet."
      },
      {
        title: "Backendutvecklare med inriktning cloud (pågående)",
        place: "NBI Handelsakademi",
        period: "2025 – 2027",
        text: "Pågående studier för att komplettera med backend, C#/.NET, databaser och moln."
      }
    ],
    projects: [
      {
        title: "React komponent-bibliotek (dummy)",
        text: "Strukturerat upplägg med återanvändbara komponenter.",
        link: "https://github.com/natta1995"
      },
      {
        title: "Fullstack demo (dummy)",
        text: "Frontend i React + enklare Node.js/SQL-backend.",
        link: "https://github.com/natta1995"
      }
    ]
  },
  en: {
    role: "Frontend Graduate – currently studying Backend → towards Fullstack & IT Consulting",
    location: "Sweden",
    profileTitle: "Profile",
    profileText:
      "Structured and solution-oriented developer who enjoys breaking problems into small parts and building usable, secure web interfaces. Background in frontend with a focus on web security, now adding backend and cloud to move towards fullstack.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    skillsTitle: "Skills",
    experience: [
      {
        title: "Frontend developer intern",
        place: "Senssera AB",
        period: "nov 2023 - maj 2024",
        text: "Built a responsive interface in React with TypeScript and component-based structure."
      },
    ],
    education: [
      {
        title: "Frontend Developer focused on web security (graduated)",
        place: "Jensen Yrkeshögskola Gothenburg",
        period: "2022 – 2024",
        text: "Modern web technologies, UI and security."
      },
      {
        title: "Backend Developer with cloud specialization",
        place: "NBI Handelsakademi Gothenburg",
        period: "2025 – 2027",
        text: "Ongoing studies to add backend, C#/.NET, databases and cloud."
      }
    ],
    projects: [
      {
        title: "React component library (dummy)",
        text: "Structured setup with reusable components.",
        link: "https://github.com/natta1995"
      },
      {
        title: "Fullstack demo (dummy)",
        text: "React frontend + basic Node.js/SQL backend.",
        link: "https://github.com/natta1995"
      }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState("sv");
  const t = content[lang];

  return (
    <div className="page">
      <div className="bg-grad" />

      <header className="topbar">
        <div>
          <h1 className="brand">Natalie Hällerdal</h1>
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
        <aside className="sidebar">
          <div className="photo-wrapper">
            <img src="../img/profilbild1.jpg" alt="Natalie Hällerdal" className="photo" />
          </div>
          <p className="location">{t.location}</p>

          <div className="section">
            <h2>{t.contactTitle}</h2>
            <div className="contact-list">
              <a href="mailto:natalie.hallerdal@yahoo.se">
                natalie.hallerdal@yahoo.se
              </a>
              <a
                href="https://github.com/natta1995"
                target="_blank"
                rel="noreferrer"
              >
                github.com/natta1995
              </a>
              <a
                href="https://www.linkedin.com/in/natalie-hällerdal-4b2a9499"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/natalie-hällerdal-4b2a9499
              </a>
            </div>
          </div>

          <div className="section">
            <h2>{t.skillsTitle}</h2>
            <ul className="chips">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Node.js</li>
              <li>C# / .NET</li>
              <li>HTML & CSS</li>
              <li>Git</li>
              <li>Web Security</li>
              <li>Agile</li>
              <li>Problemsolving</li>
            </ul>
          </div>
        </aside>

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

          <section className="card">
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
          </section>
        </main>
      </div>
    </div>
  );
}
