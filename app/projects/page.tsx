import Image from "next/image";
import Link from "next/link";

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
        href: "REPLACE_WITH_PARENTLENSAI_GITHUB_URL",
      },
    ],
  },
  {
    number: "03",
    category: "Web Development",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio designed and developed to communicate my research, software projects, music, and leadership through a clear visual narrative. The site uses a scrolling homepage, detailed project pages, reusable components, and automated deployment.",
    image: "/images/projects/portfolio-website.jpg",
    imageAlt: "Screenshot of the Brady Zhou portfolio website homepage",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "CSS",
      "Vercel",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/bradyzhou1/brady-portfolio",
        primary: true,
      },
    ],
  },
  {
    number: "04",
    category: "Aerospace Engineering · Programming",
    title: "Lunar Rover Engineering",
    description:
      "A collaborative aerospace engineering project focused on designing, programming, testing, and improving a rover for a simulated lunar environment. The project connected software development with physical engineering and iterative problem-solving.",
    image: "/images/projects/lunar-rover.jpg",
    imageAlt: "Lunar rover engineering prototype",
    technologies: [
      "Programming",
      "Engineering Design",
      "Prototyping",
      "Testing",
      "Teamwork",
    ],
    links: [
      {
        label: "GitHub",
        href: "REPLACE_WITH_ROVER_GITHUB_URL",
        primary: true,
      },
    ],
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
          <p className="projectsPageEyebrow">Project Collection</p>

          <h1>
            Research, software, and engineering built around real questions.
          </h1>

          <p>
            These projects reflect how I use computer science across
            neuroscience, family-centered technology, web development, and
            engineering. More projects will be added as I continue learning and
            building.
          </p>
        </div>

        <div className="projectsHeroStats">
          <article>
            <strong>4</strong>
            <span>Featured projects</span>
          </article>

          <article>
            <strong>4</strong>
            <span>Different problem spaces</span>
          </article>

          <article>
            <strong>1</strong>
            <span>Shared purpose: build with meaning</span>
          </article>
        </div>
      </section>

      {/* PROJECT CARDS */}
      <section className="projectsCollection">
        {projects.map((project, index) => (
          <article
            className={`projectFeatureCard ${
              index % 2 === 1 ? "projectFeatureCardReverse" : ""
            }`}
            key={project.title}
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
        ))}
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