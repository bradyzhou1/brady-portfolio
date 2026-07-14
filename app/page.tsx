import Link from "next/link";
import TypingIdentity from "@/components/TypingIdentity";
import Image from "next/image";

const featuredProjects = [
  {
    title: "MyChild360",
    category: "Family Technology",
    description:
      "A family-centered platform that combines intelligent document search, dashboards, and long-term tracking to help parents understand and manage complex information about their child.",
    href: "/projects/mychild360",
    number: "01",
  },
  {
    title: "Autism Connectivity Research",
    category: "Machine Learning Research",
    description:
      "A research pipeline using functional brain connectivity and machine learning to study autism-related patterns while examining validation, site effects, and model limitations.",
    href: "/research",
    number: "02",
  },
  {
    title: "Moon Rover Engineering",
    category: "Aerospace Engineering",
    description:
      "A collaborative engineering project involving rover design, programming, testing, and iterative problem-solving for a simulated lunar environment.",
    href: "/projects/moon-rover",
    number: "03",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A personal portfolio designed and built with Next.js and TypeScript to communicate research, technical work, leadership, and creative interests.",
    href: "/projects/portfolio-website",
    number: "04",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="heroSection">
        <div className="heroGlow heroGlowOne" aria-hidden="true" />
        <div className="heroGlow heroGlowTwo" aria-hidden="true" />

        <div className="heroCenter">
          <TypingIdentity />

          <h1 className="heroName">Brady Zhou</h1>

          <p className="heroSlogan">
            Turning personal questions into research, technology, and tools that help others.
          </p>

          <div className="heroProfileLinks">
            <a
              href="/documents/brady-zhou-resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>

            <a
              href="https://github.com/bradyzhou1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
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

        {/* <a href="#about" className="scrollPrompt">
          <span>Scroll</span>
          <span aria-hidden="true">↓</span>
        </a> */}
      </section>

      {/* ABOUT */}
      <section id="about" className="contentSection aboutSection">
        <div className="aboutVisuals">
          <div className="aboutPhoto aboutPhotoPrimary">
            <Image
              src="/images/dis.jpg"
              alt="Portrait of Brady Zhou"
              fill
              sizes="(max-width: 900px) 90vw, 36vw"
              className="aboutImage"
            />
          </div>

          <div className="aboutPhoto aboutPhotoSecondary">
            <Image
              src="/images/Brady-2025-AllState.jpg"
              alt="Brady with his younger brother Mason"
              fill
              sizes="(max-width: 900px) 70vw, 25vw"
              className="aboutImage"
            />
          </div>
        </div>

        <div className="aboutContent">
          <p className="eyebrow">About Me</p>

          <h2>
            I began building because some questions felt too personal to leave
            unanswered.
          </h2>

          <div className="aboutStory">
            <p>
              I am a student researcher, developer, violinist, and student leader interested 
              in how computer science can help us better understand people and respond to real needs.
            </p>

            <p>
              Much of that interest grew from my relationship with my younger brother, Mason, 
              who is autistic. During my sophomore year, he experienced a profound regression. 
              Although his clinical MRI showed no structural abnormality, I was left wondering 
              what changes in the brain might not be visible through conventional imaging. 
              That question led me to study autism-related patterns in functional brain connectivity 
              using resting-state fMRI. I developed a machine-learning research pipeline, investigated 
              how validation methods and research-site differences could influence results, 
              and ultimately presented the project as a Regeneron ISEF finalist.             
            </p>
              
            <p>
              At the same time, I watched my family navigate therapy notes, medical records, 
              school documents, medications, and long periods of uncertainty. I began to see 
              how fragmented information can make an already difficult process even harder. 
              That experience inspired MyChild360, an AI-powered platform that uses large 
              language models, retrieval-augmented generation, and vector search to help families 
              organize and understand educational, medical, therapeutic, and daily-life information 
              in one connected system.
            </p>

            <p>
              Outside of technology, violin has taught me patience, discipline, and how to listen 
              closely to others. Leadership roles in my school, student organizations, and community 
              initiatives have taught me how to communicate, take responsibility, 
              and help a group move toward a shared goal. Whether I am conducting research, 
              building software, solving an engineering problem, rehearsing with an orchestra, 
              or leading a team, I am drawn to the same process: observe carefully, ask better 
              questions, collaborate thoughtfully, and build with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="contentSection researchSection">
        {/* <div className="sectionLabel">
          <span>02</span>
          <p>Featured Research</p>
        </div> */}

        <div className="sectionHeading">
          <p className="eyebrow">Regeneron ISEF Finalist</p>
          <h2>Studying autism through functional brain connectivity</h2>
        </div>

        <div className="researchLayout">
          <div className="researchDescription">
            <p>
              I developed a machine learning pipeline to examine whether
              patterns in functional brain connectivity could distinguish
              autistic participants from neurotypical controls.
            </p>

            <p>
              Beyond model performance, the project focused on a deeper
              challenge: understanding how research-site differences,
              validation choices, and high-dimensional data can affect
              scientific conclusions.
            </p>

            <Link href="/research" className="primaryButton">
              Explore the Research
            </Link>
          </div>

          <div className="researchStats">
            <article>
              <strong>679</strong>
              <span>Participants</span>
            </article>

            <article>
              <strong>24</strong>
              <span>Research Sites</span>
            </article>

            <article>
              <strong>19,900</strong>
              <span>Connectivity Features</span>
            </article>

            <article>
              <strong>ISEF</strong>
              <span>Finalist</span>
            </article>
          </div>
        </div>
      </section>

      {/* MYCHILD360 */}
      <section id="mychild360" className="contentSection productSection">
        {/* <div className="sectionLabel">
          <span>03</span>
          <p>Building for Families</p>
        </div> */}

        <div className="productLayout">
          <div className="productVisual">
            <div className="browserMockup">
              <div className="browserBar">
                <span />
                <span />
                <span />
              </div>

              <div className="mockupContent">
                <p>MyChild360</p>
                <h3>A clearer view of a child’s journey</h3>

                <div className="mockupCards">
                  <div>Documents</div>
                  <div>Health</div>
                  <div>Education</div>
                  <div>Progress</div>
                </div>
              </div>
            </div>
          </div>

          <div className="productDescription">
            <p className="eyebrow">MyChild360</p>

            <h2>Turning scattered information into a connected picture</h2>

            <p>
              Families often manage information across IEPs, therapy notes,
              medical records, medications, school performance, sleep, and
              daily observations. MyChild360 is designed to bring those pieces
              together.
            </p>

            <ul className="featureList">
              <li>Document management and intelligent search</li>
              <li>RAG and vector-database retrieval</li>
              <li>Dashboards and progress visualization</li>
              <li>Medication, health, school, and sleep tracking</li>
            </ul>

            <Link href="/projects/mychild360" className="textLink">
              View the full project →
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="contentSection projectsSection">
        {/* <div className="sectionLabel">
          <span>04</span>
          <p>Selected Projects</p>
        </div> */}

        <div className="sectionHeading">
          <p className="eyebrow">Projects</p>
          <h2>Research, software, and engineering</h2>
        </div>

        <div className="projectList">
          {featuredProjects.map((project) => (
            <Link
              href={project.href}
              className="projectRow"
              key={project.title}
            >
              <span className="projectNumber">{project.number}</span>

              <div className="projectMain">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>

              <p className="projectDescription">{project.description}</p>

              <span className="projectArrow">↗</span>
            </Link>
          ))}
        </div>

        <div className="sectionAction">
          <Link href="/projects" className="secondaryButton">
            View All Projects
          </Link>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="contentSection musicSection">
        {/* <div className="sectionLabel">
          <span>05</span>
          <p>Music</p>
        </div> */}

        <div className="splitSection">
          <div>
            <p className="eyebrow">Violin</p>
            <h2>Discipline, listening, and shared expression</h2>
          </div>

          <div>
            <p>
              Music has been one of the longest commitments in my life. Through
              All-State Orchestra and my role as Principal Second Violin in my
              school chamber orchestra, I have learned how individual
              preparation contributes to a larger ensemble.
            </p>

            <Link href="/music" className="textLink">
              Explore my music journey →
            </Link>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="contentSection leadershipSection">
        {/* <div className="sectionLabel">
          <span>06</span>
          <p>Leadership and Impact</p>
        </div> */}

        <div className="sectionHeading">
          <p className="eyebrow">School and Community</p>
          <h2>Leading through responsibility and long-term commitment</h2>
        </div>

        <div className="leadershipGrid">
          <article>
            <span>01</span>
            <h3>STEM Leadership</h3>
            <p>
              Four-year appointed representative for the AMS pathway in Walton
              High School’s STEM Academy.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Student Government</h3>
            <p>
              Contributing to student initiatives, communication, and school
              community engagement.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>FirstStep</h3>
            <p>
              Supporting organizational programs, major website updates, and
              community-focused initiatives.
            </p>
          </article>
        </div>

        <div className="sectionAction">
          <Link href="/leadership" className="secondaryButton">
            Explore Leadership
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">
        <p className="eyebrow">Connect</p>

        <h2>Thank you for exploring my work.</h2>

        <p>
          My projects continue to evolve as I learn, build, and explore new
          questions.
        </p>

        <div className="contactLinks">
          <a
            href="https://github.com/bradyzhou1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="/documents/brady-zhou-resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
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
      </section>

      <footer className="footer">
        <p>© 2026 Brady Zhou</p>
        <p>Designed and developed with Next.js and TypeScript.</p>
      </footer>
    </main>
  );
}