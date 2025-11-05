
import { useState } from "react";
import "./App.css";

const content = {
  sv: {
    name: "Natalie Hällerdal",
    role: "Frontendutvecklare – bygger tydliga och användbara gränssnitt",
    location: "Sverige",
    profileTitle: "Profil",
    profileText:
      "Strukturerad och lösningsorienterad utvecklare med frontendbakgrund och intresse för webbsäkerhet. Gillar att dela upp problem i mindre delar och bygga gränssnitt som känns lätta att använda. Läser nu backend/C#/.NET för att kunna ta mer fullstackansvar.",
    experienceTitle: "Erfarenhet",
    educationTitle: "Utbildning",
    projectsTitle: "Projekt",
    contactTitle: "Kontakt",
    skillsTitle: "Tech & skills",
    experience: [
      {
        title: "Frontend-utvecklare (intern)",
        place: "Senssera AB",
        period: "nov 2023 – maj 2024",
        text: "Byggde responsiva vyer i React med TypeScript och komponentbaserad struktur. Fokus på konsekvent UI."
      },
    ],
    education: [
      {
        title: "Frontendutvecklare, inriktning webbsäkerhet",
        place: "Jensen Yrkeshögskola",
        period: "2022 – 2024",
        text: "Moderna webbtekniker, UI och säkerhet."
      },
      {
        title: "Backendutvecklare med inriktning cloud (pågående)",
        place: "NBI Handelsakademin",
        period: "2025 – 2027",
        text: "C#/.NET, databaser och moln för att bli mer fullstack."
      }
    ],
    projects: [
      {
        title: "React-komponentbibliotek (dummy)",
        text: "Återanvändbara UI-komponenter med konsekvent styling.",
        link: "https://github.com/natta1995"
      },
      {
        title: "Fullstack-demo (dummy)",
        text: "React-frontend tillsammans med enkel Node.js/SQL-backend.",
        link: "https://github.com/natta1995"
      }
    ],
    contact: {
      email: "mailto:natalie.hallerdal@yahoo.se",
      github: "https://github.com/natta1995",
      linkedin: "https://www.linkedin.com/in/natalie-hällerdal-4b2a9499"
    },
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Node.js",
      "SQL",
      "C# / .NET",
      "Git",
      "Webbsäkerhet",
      "Agilt arbetssätt",
      "Problemlösning"
    ]
  },
  en: {
    name: "Natalie Hällerdal",
    role: "Frontend Developer – building clear and usable interfaces",
    location: "Sweden",
    profileTitle: "Profile",
    profileText:
      "Structured, solution-oriented developer with a frontend background and interest in web security. I like breaking problems into smaller parts and designing UIs that feel easy to use. Currently studying backend/C#/.NET to move towards fullstack.",
    experienceTitle: "Experience",
    educationTitle: "Education",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    skillsTitle: "Tech & skills",
    experience: [
      {
        title: "Frontend Developer (intern)",
        place: "Senssera AB",
        period: "Nov 2023 – May 2024",
        text: "Built responsive views in React with TypeScript and a component-based structure. Focus on consistent UI."
      },
    ],
    education: [
      {
        title: "Frontend Developer, web security",
        place: "Jensen Vocational College",
        period: "2022 – 2024",
        text: "Modern web technologies, UI and security."
      },
      {
        title: "Backend Developer, cloud (ongoing)",
        place: "NBI Handelsakademin",
        period: "2025 – 2027",
        text: "C#/.NET, databases and cloud to become more fullstack."
      }
    ],
    projects: [
      {
        title: "React component library (dummy)",
        text: "Reusable UI components with consistent styling.",
        link: "https://github.com/natta1995"
      },
      {
        title: "Fullstack demo (dummy)",
        text: "React frontend + simple Node.js/SQL backend.",
        link: "https://github.com/natta1995"
      }
    ],
    contact: {
      email: "mailto:natalie.hallerdal@yahoo.se",
      github: "https://github.com/natta1995",
      linkedin: "https://www.linkedin.com/in/natalie-hällerdal-4b2a9499"
    },
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Node.js",
      "SQL",
      "C# / .NET",
      "Git",
      "Web Security",
      "Agile",
      "Problem solving"
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
