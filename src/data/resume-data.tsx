import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "David Adarme D.",
  // initials: "BJ",
  location: "Bucaramanga, Santander - Colombia,",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Software Developer",
  summary: (
    <>
      Passionate about software development, DevOps,cloud infrastructure, databases, software architecture,
      and automation. I am currently seeking hands-on experience to grow myskills and maturity as a
      backend developer. I am especially eager to learn more about microservices, frameworks, best practices,
      and building scalable systems. I have experience as Software Developer (Backend mostly) working 0
      monolithic applications using Node.Js, Javascript, Typescript, Express with SQL and NoSQLdatabasesin
      both the medical and financial domains. In the future, I aim to transition into a DevOps-focused role where
      I can contribute to building and maintainingreliable, automated, and efficient infrastructure.
    </>
  ),
  // avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Sena",
      degree: "Software Analysis and Development Technician",
      start: "2022",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Film.io",
      link: "https://film.io",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
      title: "Software Developer (Backend focused)",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description: (
        <>
          {/* Leading technical architecture of a blockchain-based film funding
          platform. */}
          <ul className="list-inside list-disc">
            <li>
              Design, develop, and maintain RESTful APIs and backend services using Node.js with JavaScript and TypeScript.
            </li>
            <li>
              Document API endpoints and automate API workflows using Postman, improving usability for other developers.
            </li>
            <li>
              Modeling, implementation and maintaining NoSQL databases using MongoDB with Moongose ODM,ensuring data integrity.
            </li>
            <li>
              Collaborated with stakeholders and customer deployment teams to coordinate integration processes and product delivery via Docker or Podman.
            </li>
            <li>
              Develop and maintain API-level E2E tests using Jest, improving application reliability.
            </li>
          </ul>
        </>
      ),
    },
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: [
    //     "Remote",
    //     "React",
    //     "TypeScript",
    //     "Node.js",
    //     "GraphQL",
    //     "Tailwind CSS",
    //   ],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description: (
    //     <>
    //       Senior developer and squad leader for an enterprise agile meeting
    //       platform.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Built design system with Tailwind CSS, improving development speed
    //           and time to market
    //         </li>
    //         <li>
    //           Implemented engineering practices: PR automation, code review
    //           guidelines, and workflows
    //         </li>
    //         <li>
    //           Open source contributions to Relay DevTools and React i18n tooling
    //         </li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Clevertech",
    //   link: "https://clevertech.biz",
    //   badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
    //   title: "Lead Android Developer → Full Stack Developer",
    //   logo: ClevertechLogo,
    //   start: "2015",
    //   end: "2021",
    //   description: (
    //     <>
    //       Successfully transitioned from mobile to full-stack development while
    //       leading distributed teams.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Led frontend team at Evercast, building real-time platform
    //           supporting 30+ users per room with HD streaming and collaboration
    //           tools
    //         </li>
    //         <li>
    //           Developed offline-first Android app for DKMS, improving donor
    //           registration process
    //         </li>
    //         <li>
    //           Led development teams across multiple successful client projects
    //         </li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Jojo Mobile",
    //   link: "https://bsgroup.eu/",
    //   badges: ["On Site", "Android", "Java", "Kotlin"],
    //   title: "Android Developer → Lead Android Developer",
    //   logo: JojoMobileLogo,
    //   start: "2012",
    //   end: "2015",
    //   description: (
    //     <>
    //       First Android developer, grew and led a team of 15+ engineers while
    //       establishing engineering culture.
    //       <ul className="list-inside list-disc">
    //         <li>
    //           Developed apps for major Polish companies including LOT, Polskie
    //           Radio, and Agora
    //         </li>
    //         <li>Built and mentored high-performing mobile development team</li>
    //       </ul>
    //     </>
    //   ),
    // },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: ["On Site", "C/C++", "LTE", "Agile"],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description:
    //     "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
    // },
  ],
  skills: [
    "React/Next.js/Remix",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "WebRTC",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Relay",
    "System Architecture",
    "Remote Team Leadership",
  ],
  projects: [
    {
      title: "Monito",
      techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
      description:
        "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
        "Tailwind CSS",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "Platform for online consultations with real-time video meetings and scheduling",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Minimalist CV",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
      description:
        "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
      logo: MonitoLogo,
      link: {
        label: "Minimalist CV",
        href: "https://github.com/BartoszJarocki/cv",
      },
    },
  ],
} as const;
