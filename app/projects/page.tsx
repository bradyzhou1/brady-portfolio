import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  links: ProjectLink[];
};

type AdditionalProject = {
  category: string;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

const projects: Project[] = [
  {
    number: "01",
    category: "Machine Learning · Computational Neuroscience",
    title: "Brain Connectivity in Autism",
    description:
      "An interpretable machine-learning study using resting-state fMRI to investigate subtle autism-related patterns in functional brain connectivity. The project also examined how research-site and scanner differences affect model generalization across unseen sites.",
    image: "/images/projects/brain-connectivity.png",
    imageAlt:
      "Brain connectome visualization showing influential functional connections",
    technologies: [
      "Python",
      "Machine Learning",
      "rs-fMRI",
      "Functional Connectivity",
      "LOSO Validation",
    ],
    links: [
      {
        label: "Explore the Full Project",
        href: "/research",
        primary: true,
      },
      {
        label: "View on ISEF",
        href: "https://isef.net/project/cbio065-brain-connectivity-in-autism-with-machine-learning",
      },
      {
        label: "GitHub",
        href: "https://github.com/bradyzhou1/Regeneron-ISEF-Finalist-Brain-Connectivity-in-Autism-with-ML",
      },
    ],
  },
  {
    number: "02",
    category: "AI · Family Technology",
    title: "ParentLensAI",
    description:
      "A family-centered platform designed to organize and connect educational, medical, therapy, and daily-life information. ParentLensAI combines large language models, retrieval-augmented generation, vector search, document management, and dashboards to help families understand a child’s journey more clearly.",
    image: "/images/projects/parentlensai.png",
    imageAlt: "ParentLensAI application dashboard and document interface",
    technologies: [
      "LLM",
      "RAG",
      "Vector Database",
      "Document Search",
      "Dashboards",
    ],
    links: [
      {
        label: "Explore the Full Project",
        href: "/parentlensai",
        primary: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/bradyzhou1/ParentLensAI",
      },
    ],
  },
];

const additionalProjects: AdditionalProject[] = [

  {
    category: "Environmental Research · Community Science",
    title: "Microplastics Mapping in the Chattahoochee River",
    description:
      "Funded by Atlanta Mayor\’s Office, Youth Climate Action Fund, and Bloomberg Philanthropies. The principal investigator was Michelle Huang, Prof. of Chemistry, Georgia Gwinnett College. Our Team Leader, a Georgia Tech Environmental Science undergraduate, presented our project and poster in the Atlanta City Hall.",
    link: {
      label: "Explore Project",
      href: "https://sites.google.com/view/microplastics-ycaf2025/home",
    },
  },

  {
    category: "Georgia Tech Aerospace Engineering Internship",
    title: "Lunar Rover Engineering",
    description:
      "My six-person team was tasked with designing and building a prototype rover for exploration on the Moon or another planet. We chose the Moon and developed a rover intended to map areas with potential Helium-3 concentrations. The rover used several sensors to detect indicators associated with Helium-3 and included a scoop mechanism for collecting samples from promising locations. Powered by Arduino-based circuits, the rover successfully navigated the test environment, operated its sensors, and collected samples using the scoop.",
    link: {
      label: "Watch Project Video",
      href: "https://www.youtube.com/watch?v=8WuslV10caI",
    },
  },

  {
    category: "Applied Mathematics · Data Science",
    title: "MathWorks Math Modeling (M3) Challenge",
    description:
      "My five-person team participated in a 14-hour mathematical modeling challenge focused on predicting sports-betting behavior based on demographic data. We developed a model, ran simulations, analyzed the results, and wrote a paper explaining our methodology and findings. Although we did not advance to the next round, the experience strengthened my skills in data modeling, simulation, collaborative problem-solving, and communicating technical results.",
    link: {
      label: "Explore Challenge",
      href: "https://m3challenge.siam.org/the-challenge/",
    }
  },
];

function isExternalLink(href: string) {
  return href.startsWith("http");
}

export default function ProjectsPage() {
  return (
    <main className="projectsPage">
      {/* HERO */}
      <section className="projectsHero">
        <div className="projectsHeroGlow projectsHeroGlowOne" />
        <div className="projectsHeroGlow projectsHeroGlowTwo" />

        <div className="projectsHeroContent">

          <a className="parentLensBackLink" href="/#projects">
            ← Back to portfolio
          </a>
          
          <p className="projectsPageEyebrow">Selected Work</p>

          <h1>
            Research and technology shaped by real questions.
          </h1>

          <p>
            My flagship work combines machine learning, computational
            neuroscience, and family-centered technology. Additional projects
            reflect broader experience in mathematical modeling, environmental
            research, engineering, and web development.
          </p>
        </div>

        <div className="projectsHeroOverview">
          <article>
            <span>Flagship work</span>
            <strong>Research + Product Development</strong>
          </article>

          <article>
            <span>Technical range</span>
            <strong>Machine Learning · AI Systems · Full-Stack Development</strong>
          </article>

          <article>
            <span>Additional experience</span>
            <strong>Modeling · Environmental Research · Engineering</strong>
          </article>
        </div>

      </section>

      {/* FLAGSHIP PROJECTS */}
      <section className="projectsCollection">
        <div className="projectsCollectionHeader">
          <p className="projectsPageEyebrow">Flagship Projects</p>

          <h2>
            Two substantial projects at the center of my work
          </h2>

          <p>
            These projects represent sustained independent work, technical
            development, personal motivation, and continued iteration.
          </p>
        </div>

        {projects.map((project, index) => (
          <Reveal 
            key={project.title}
            // delay={index * 0.5}
            delay={0}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <article
              className={`projectFeatureCard ${
                index % 2 === 1 ? "projectFeatureCardReverse" : ""
              }`}
            >
            <div className="projectFeatureVisual">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 950px) 92vw, 48vw"
                className="projectFeatureImage"
              />

              <span className="projectFeatureNumber">{project.number}</span>
            </div>

            <div className="projectFeatureContent">
              <p className="projectFeatureCategory">{project.category}</p>

              <h2>{project.title}</h2>

              <p className="projectFeatureDescription">
                {project.description}
              </p>

              <div className="projectTechnologyList">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="projectFeatureLinks">
                {project.links.map((link) => {
                  const className = link.primary
                    ? "projectFeaturePrimaryLink"
                    : "projectFeatureSecondaryLink";

                  if (isExternalLink(link.href)) {
                    return (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={className}
                        key={link.label}
                      >
                        {link.label} ↗
                      </a>
                    );
                  }

                  return (
                    <Link
                      href={link.href}
                      className={className}
                      key={link.label}
                    >
                      {link.label} →
                    </Link>
                  );
                })}
              </div>
            </div>
          </article>
        </Reveal>
        ))}
      </section>

      {/* ADDITIONAL PROJECTS */}
      <section className="additionalProjectsSection">
        <div className="additionalProjectsHeader">
          <p className="projectsPageEyebrow">
            Additional Projects & Team Experiences
          </p>

          <h2>
            Broader experience across research, modeling, and engineering
          </h2>

          <p>
            These collaborative experiences expanded how I approach open-ended
            problems, work under constraints, and communicate technical ideas.
          </p>
        </div>

        <div className="additionalProjectsLayout">
          <Reveal delay={0}
            direction="left"
            className="additionalProjectsVisualReveal"
            >
            <figure className="additionalProjectsVisual">
              <div className="additionalProjectsImageFrame">
                <Image
                  src="/images/projects/microplastics-team.JPG"
                  alt="Microplastics water mapping research team"
                  fill
                  sizes="(max-width: 900px) 92vw, 38vw"
                  className="additionalProjectsImage"
                />
              </div>

              <figcaption>
                <strong>Brady Zhou (far left)</strong> with teammates during microplastics 
                water mapping fieldwork on Lake Lanier.
              </figcaption>
            </figure>
          </Reveal>
          <div className="additionalProjectsList">

            {additionalProjects.map((project, index) => (
              <Reveal
                key={project.title}
                delay={index * 0.1}
                direction="right"
              >
                {project.link ? (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="additionalProjectRow additionalProjectRowClickable"
                    aria-label={`${project.title}: ${project.link.label}`}
                  >
                    <div className="additionalProjectIcon" aria-hidden="true">
                      <span />
                    </div>

                    <div className="additionalProjectRowContent">
                      <p className="additionalProjectCategory">
                        {project.category}
                      </p>

                      <h3>{project.title}</h3>

                      <p className="additionalProjectDescription">
                        {project.description}
                      </p>
                    </div>

                    <span
                      className="additionalProjectRowLink"
                      aria-hidden="true"
                    >
                      {project.link.label} ↗
                    </span>
                  </a>
                ) : (
                  <article className="additionalProjectRow">
                    <div className="additionalProjectIcon" aria-hidden="true">
                      <span />
                    </div>

                    <div className="additionalProjectRowContent">
                      <p className="additionalProjectCategory">
                        {project.category}
                      </p>

                      <h3>{project.title}</h3>

                      <p className="additionalProjectDescription">
                        {project.description}
                      </p>
                    </div>
                  </article>
                )}
              </Reveal>
            ))}



          </div>
        </div>
      </section>




      {/* ABOUT THIS SITE */}
      <section className="projectsSiteNote">
        <div className="projectsSiteNoteHeading">
          <p className="projectsPageEyebrow">About This Site</p>

          <h2>
            Designed and built as part of the portfolio itself.
          </h2>
        </div>

        <div className="projectsSiteNoteContent">
          <p>
            I developed this website using Next.js, React, TypeScript, and
            CSS, creating its visual system, reusable components, responsive
            layouts, and deployment workflow.
          </p>

          <div className="projectsSiteTechnologies">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
            <span>Vercel</span>
          </div>

          <a
            href="https://github.com/bradyzhou1/brady-portfolio"
            target="_blank"
            rel="noreferrer"
            className="projectsSiteLink"
          >
            View source on GitHub ↗
          </a>
        </div>
      </section>

      {/* CLOSING */}
      <section className="projectsClosing">
        <p className="projectsPageEyebrow">Still Building</p>

        <h2>This collection will continue to grow.</h2>

        <p>
          I am continuing to explore new projects across computer science,
          human-centered technology, and engineering.
        </p>

        <a href="/#projects" className="projectsBackLink">
          Return to portfolio →
        </a>
      </section>
    </main>
  );
}