const devData = {
  summary: [
    "My name is Abderrahim Abid, a Full-Stack Developer, UI/UX Designer, and QA & Automation Specialist based in Casablanca, Morocco.",
    "Practical experience in web development, user-centered design, and freelance projects for web applications.",
    "Passionate about continuous learning, creating high-performance digital solutions, and working remotely on global projects.",
  ],

  info: {
    name: "Abderrahim Abid",
    title: "Full-Stack Developer | UI/UX Designer | QA & Automation Specialist",
    email: "abidabderrahim.work@gmail.com",
    phone: "+212 632-473292",
    location: "Casablanca, Morocco",
    age: 25,
    linkedin: "https://linkedin.com/in/abidabderrahim",
    github: "https://github.com/abidabderrahim",
  },

  skills: {
    programmingLanguages: ["JavaScript", "Python", "C"],
    frontEnd: ["HTML5", "CSS3"],
    design: ["UI/UX Design", "Figma", "Responsive Design"],
    personalSkills: [
      "Problem Solving",
      "Communication",
      "Self-Learning",
      "Time Management",
      "Attention to Detail",
    ],
    tools: ["Git", "GitHub", "VS Code", "Linux Terminal"],
    spokenLanguages: {
      Arabic: "Native",
      English: "Intermediate",
      French: "Beginner",
    },
  },

  experience: [
    {
      role: "UI/UX Designer",
      company: "ALX Ventures / 2pi Startup",
      period: "2024 - Present",
      description:
        "Worked on user-centered design and smooth product experiences.",
    },
    {
      role: "Freelance Developer & Designer",
      period: "2023 - Present",
      description: "Delivering web solutions remotely for various clients.",
    },
    {
      role: "Various Jobs (Painter, Tailor, Commerce)",
      period: "2020 - 2023",
      description:
        "Developed communication, interpersonal skills, responsibility, and commitment.",
    },
  ],

  education: [
    {
      degree: "High School Diploma in Physics",
      institution: "Lycée Imam Ghazali, Morocco",
      year: 2020,
    },
    {
      degree: "Continuous Learning & Professional Development",
      institution:
        "ALX Professional Foundations, AI Career Essentials, IBM SkillsBuild Courses",
      period: "2023 - Present",
    },
  ],

  certifications: [
    "IBM SkillsBuild: Web Developer Fundamentals",
    "User Experience Design Fundamentals",
    "Exploring Emerging Technologies",
    "Cybersecurity Fundamentals",
  ],

  hobbies: [
    "Reading tech blogs",
    "Exploring new design trends",
    "Coding personal projects",
    "Weight training",
    "Long-distance running",
    "Hiking",
    "Photography",
    "Traveling",
  ],

  projects: [
    {
      name: "Personal Developer Portfolio",
      link: "https://github.com/abidabderrahim",
      image: "images/project6.jpg",
    },
    {
      name: "E-commerce Store",
      link: "https://github.com/abidabderrahim",
      image: "images/project5.png",
    },
    {
      name: "QA Automation Suite",
      link: "https://github.com/abidabderrahim",
      image: "images/project7.jpg",
    },
  ],
};

const highlight = {
  keyword: (text) =>
    `<span style="color: var(--text-main-o); font-weight:bold;">${text}</span>`,
  type: (text) =>
    `<span style="color: var(--text-main-g); font-weight:bold;">${text}</span>`,
  string: (text) => `<span style="color: var(--text-main-b);">"${text}"</span>`,
  number: (text) => `<span style="color: var(--text-main-p);">${text}</span>`,
  comment: (text) =>
    `<span style="color: var(--text-main-y);">/* ${text} */</span>`,
};

// CONTENT1 = IMAGE + SKILLS
const content1 = document.querySelector(".content1");

// Developer Image
let titleHTML = `
<div class="portfolio-title">
  <pre>
${highlight.keyword("public")} ${highlight.keyword("struct")} Profile {
  ${highlight.type("string")} title = ${highlight.string("My Portfolio")};
};
  </pre>
</div>
`;

// Skills
let skillsHTML = `
  <div class="skills">
    <h3>${highlight.comment("Programming Skills")}</h3>

    <p>${highlight.keyword("public")} ${highlight.keyword(
  "enum"
)} ProgrammingLanguages {</p>
    <ul>${devData.skills.programmingLanguages
      .map((item) => `<li>  ${highlight.type(item)};</li>`)
      .join("")}</ul>
    <p>}</p>

    <p>${highlight.keyword("public")} ${highlight.keyword(
  "struct"
)} FrontEnd {</p>
    <ul>${devData.skills.frontEnd
      .map((item) => `<li>  ${highlight.type(item)};</li>`)
      .join("")}</ul>
    <p>}</p>

    <p>${highlight.keyword("public")} ${highlight.keyword(
  "struct"
)} Design {</p>
    <ul>${devData.skills.design
      .map((item) => `<li>  ${highlight.type(item)};</li>`)
      .join("")}</ul>
    <p>}</p>

    <p>${highlight.keyword("public")} ${highlight.keyword(
  "struct"
)} PersonalSkills {</p>
    <ul>${devData.skills.personalSkills
      .map((item) => `<li>  ${highlight.type(item)};</li>`)
      .join("")}</ul>
    <p>}</p>

    <p>${highlight.keyword("public")} ${highlight.keyword("struct")} Tools {</p>
    <ul>${devData.skills.tools
      .map((item) => `<li>  ${highlight.type(item)};</li>`)
      .join("")}</ul>
    <p>}</p>

    <p>${highlight.keyword("public")} ${highlight.keyword(
  "struct"
)} SpokenLanguages {</p>
    <ul>${Object.entries(devData.skills.spokenLanguages)
      .map(
        ([lang, level]) =>
          `<li>  ${highlight.type(lang)} = ${highlight.string(level)};</li>`
      )
      .join("")}</ul>
    <p>}</p>
  </div>
`;

content1.innerHTML = titleHTML + skillsHTML;

// CONTENT2 = SUMMARY + INFO + EXPERIENCE + EDUCATION + PROJECTS + CERTIFICATIONS + HOBBIES

const content2 = document.querySelector(".content2");

// Summary
let summaryHTML = `
  <div class="summary">
    <h3>${highlight.comment("Summary")}</h3>
    <p>${highlight.keyword("public")} ${highlight.keyword(
  "void"
)} summary() {</p>
    <ul>${devData.summary
      .map(
        (item) =>
          `<li>  ${highlight.comment(
            item.replace(/\/\*/g, "").replace(/\*\//g, "")
          )}</li>`
      )
      .join("")}</ul>
    <p>}</p>
  </div>
`;

// Info
let infoHTML = `
  <div class="info">
    <h3>${highlight.comment("Info")}</h3>
    <p>${highlight.keyword("public")} ${highlight.keyword("struct")} Info {</p>
    <p>  ${highlight.type("string")} name = ${highlight.string(devData.info.name)};</p>
    <p>  ${highlight.type("string")} title = ${highlight.string(devData.info.title)}</p>
    <p>  ${highlight.type("string")} email = <a href="mailto:${devData.info.email}" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.email)}</a>;</p>
    <p>  ${highlight.type("string")} phone = <a href="tel:${devData.info.phone}" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.phone)}</a>;</p>
    <p>  ${highlight.type("string")} location = <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(devData.info.location)}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.location)}</a>;</p>
    <p>  ${highlight.type("int")} age = ${highlight.number(devData.info.age)};</p>
    <p>  ${highlight.type("string")} linkedin = <a href="${devData.info.linkedin}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.linkedin)}</a>;</p>
    <p>  ${highlight.type("string")} github = <a href="${devData.info.github}" target="_blank" style="color: var(--text-main-b); text-decoration:none;">${highlight.string(devData.info.github)}</a>;</p>
    <p>}</p>
  </div>
`;

// Experience with functions
let experienceHTML = `
  <div class="experience">
    <h3>${highlight.comment("Experience")}</h3>
    ${devData.experience
      .map(
        (exp, index) => `
      <p>${highlight.keyword("public")} ${highlight.keyword(
          "void"
        )} experience${index + 1}() {</p>
      <p>  ${highlight.type("string")} role = ${highlight.string(exp.role)};</p>
      <p>  ${highlight.type("string")} company = ${highlight.string(
          exp.company || ""
        )};</p>
      <p>  ${highlight.type("string")} period = ${highlight.string(
          exp.period
        )};</p>
      <p>  ${highlight.type("string")} description = ${highlight.string(
          exp.description
        )};</p>
      <p>}</p>
    `
      )
      .join("")}
  </div>
`;

// Education with functions
let educationHTML = `
  <div class="education">
    <h3>${highlight.comment("Education")}</h3>
    ${devData.education
      .map(
        (edu, index) => `
      <p>${highlight.keyword("public")} ${highlight.keyword("void")} education${
          index + 1
        }() {</p>
      <p>  ${highlight.type("string")} degree = ${highlight.string(
          edu.degree
        )};</p>
      <p>  ${highlight.type("string")} institution = ${highlight.string(
          edu.institution
        )};</p>
      <p>  ${highlight.type("string")} yearOrPeriod = ${highlight.string(
          edu.year || edu.period
        )};</p>
      <p>}</p>
    `
      )
      .join("")}
  </div>
`;

// Projects
const projectsHTML = `
<div class="projects">
  <h3>${highlight.comment("Projects")}</h3>
  <p>${highlight.keyword("public")} ${highlight.keyword("enum")} Projects {</p>
  <ul>${devData.projects
    .map(
      (p) =>
        `<li><a href="${p.link}" target="_blank" class="project-link">${highlight.type(
          p.name
        )}</a>;</li>`
    )
    .join("")}</ul>
  <p>}</p>
</div>
`;

// Certifications
let certificationsHTML = `
  <div class="certifications">
    <h3>${highlight.comment("Certifications")}</h3>
    <ul>${devData.certifications
      .map((c) => `<li>  ${highlight.string(c)};</li>`)
      .join("")}</ul>
  </div>
`;

// Hobbies
let hobbiesHTML = `
  <div class="hobbies">
    <h3>${highlight.comment("Hobbies")}</h3>
    <ul>${devData.hobbies
      .map((h) => `<li>  ${highlight.type(h)};</li>`)
      .join("")}</ul>
  </div>
`;

content2.innerHTML =
  summaryHTML +
  infoHTML +
  experienceHTML +
  educationHTML +
  projectsHTML +
  certificationsHTML +
  hobbiesHTML;
