import Link from "next/link";

const featuredProjects = [
  {
    title: "MyChild360",
    category: "Family Technology",
    description:
      "A platform that helps families organize educational, medical, therapy, and daily-life information in one connected system.",
    href: "/projects/mychild360",
  },
  {
    title: "Autism Brain Connectivity Research",
    category: "Research",
    description:
      "A machine learning study examining patterns in functional brain connectivity across individuals with and without autism.",
    href: "/research",
  },
  {
    title: "Moon Rover Engineering Project",
    category: "Engineering",
    description:
      "A collaborative aerospace project using coding and engineering design to develop a prototype lunar rover.",
    href: "/projects/moon-rover",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">Student Researcher · Developer · Musician</p>

          <h1>
            Using computer science to understand human differences and build
            tools for families.
          </h1>

          <p className="heroIntro">
            I am Brady Zhou, a high school student interested in computer
            science, machine learning, neuroscience, and human-centered
            technology. My work ranges from studying autism-related brain
            connectivity to developing tools that help families manage complex
            information.
          </p>

          <div className="heroActions">
            <Link href="/projects" className="primaryButton">
              Explore My Work
            </Link>

            <Link href="/research" className="secondaryButton">
              View Research
            </Link>
          </div>

          <div className="profileLinks">
            <a
              href="https://github.com/bradyzhou1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="/documents/brady-zhou-resume.pdf" target="_blank">
              Résumé
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="heroImagePlaceholder">
          <span>Brady’s Photo</span>
        </div>
      </section>

      <section className="highlightSection">
        <div className="sectionHeading">
          <p className="eyebrow">Featured Research</p>
          <h2>Studying autism through brain connectivity</h2>
        </div>

        <div className="researchHighlight">
          <div>
            <p>
              Using functional brain imaging data and machine learning, I built
              a research pipeline to examine whether connectivity patterns
              differed between autistic and neurotypical participants.
            </p>

            <p>
              The project became a Regeneron ISEF finalist and taught me not
              only how to build models, but also how to question bias,
              validation, and the limits of scientific conclusions.
            </p>

            <Link href="/research" className="textLink">
              Read the research story →
            </Link>
          </div>

          <div className="statGrid">
            <div className="statCard">
              <strong>679</strong>
              <span>Participants</span>
            </div>

            <div className="statCard">
              <strong>24</strong>
              <span>Research sites</span>
            </div>

            <div className="statCard">
              <strong>19,900</strong>
              <span>Connectivity features</span>
            </div>

            <div className="statCard">
              <strong>ISEF</strong>
              <span>Finalist</span>
            </div>
          </div>
        </div>
      </section>

      <section className="highlightSection">
        <div className="sectionHeading">
          <p className="eyebrow">Featured Projects</p>
          <h2>Research, software, and engineering</h2>
        </div>

        <div className="projectGrid">
          {featuredProjects.map((project) => (
            <Link
              href={project.href}
              className="projectCard"
              key={project.title}
            >
              <p className="projectCategory">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>View project →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="personalSection">
        <div>
          <p className="eyebrow">Beyond Technology</p>
          <h2>Music, leadership, and community</h2>
        </div>

        <p>
          Alongside research and development, I have spent years playing violin,
          leading within my school’s STEM academy, and contributing to student
          and community organizations.
        </p>

        <div className="personalLinks">
          <Link href="/music">Explore Music →</Link>
          <Link href="/leadership">Explore Leadership →</Link>
        </div>
      </section>
    </main>
  );
}