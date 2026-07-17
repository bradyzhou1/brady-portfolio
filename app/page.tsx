import Link from "next/link";
import TypingIdentity from "@/components/TypingIdentity";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A personal portfolio designed and built with Next.js and TypeScript to communicate research, technical work, leadership, and creative interests.",
    href: "/projects",
    number: "01",
  },
  {
    title: "Moon Rover Engineering",
    category: "Internship at Georgia Tech",
    description:
      "A collaborative engineering project involving programming, rover design, testing, and iterative problem-solving for a simulated lunar environment.",
    href: "/projects",
    number: "02",
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
              alt="All-State 2025"
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
              That experience inspired ParentLensAI, an AI-powered platform that uses large 
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
          <p className="eyebrow">Regeneron ISEF Finalist · GSEF Grand Award · Best in Category</p>
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
              The project examined both model generalization and biological meaning:
              site effects were strong, while the most stable predictive patterns involved
              limbic, attention-control, and sensory-motor networks associated with
              commonly reported autism-related differences.
            </p>



            <Link href="/research" className="primaryButton">
              Explore the Full Project
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
              <strong>0.738</strong>
              <span>LOSO ROC-AUC</span>
            </article>
          </div>
        </div>
      </section>

      {/* PARENTLENSAI */}
      <section id="parentlensai" className="contentSection productSection">
        <div className="productLayout">
          <div className="productVisual">
            <div className="productBrand">
              <Image
                src="/images/parentlensai/logo.png"
                alt="ParentLensAI logo"
                width={784}
                height={200}
                className="productLogo"
              />
            </div>

            <div className="productScreenshotFrame">
              <Image
                src="/images/parentlensai/parentlensai-dashboard.png"
                alt="ParentLensAI dashboard showing records, tasks, notes, and trends"
                fill
                sizes="(max-width: 950px) 92vw, 52vw"
                className="productScreenshot"
              />
            </div>

            <p className="productCaption">
              A connected workspace for records, questions, daily observations, and
              long-term progress.
            </p>
          </div>

          <div className="productDescription">
            <p className="eyebrow">ParentLensAI</p>

            <h2>
              Turning fragmented family information into a connected picture
            </h2>

            <p>
              Families of children with complex needs often manage years of IEPs,
              evaluations, medical records, therapy notes, medications, school
              information, appointments, and daily observations across separate
              systems.
            </p>

            <p>
              ParentLensAI brings those pieces together in one local-first platform.
              It combines intelligent document search, retrieval-augmented
              generation, structured tracking, dashboards, tasks, and notes to help
              parents understand information in context rather than one document at
              a time.
            </p>

            <ul className="featureList">
              <li>Document upload, indexing, summaries, and semantic search</li>
              <li>RAG-based questions grounded in family records</li>
              <li>Medication, academic, and progress trend visualization</li>
              <li>Local data storage with optional local AI models</li>
            </ul>

            <Link href="/parentlensai" className="parentLensHomeButton">
              Explore the Full Project
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
          <p className="eyebrow">Other Projects</p>
          <h2>Software beyond my featured work</h2>
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
            View Full Project Collection
          </Link>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="contentSection musicSection">
        <div className="musicLayout">
          {/* LEFT SIDE: STORY */}
          <div className="musicStory">
            <p className="eyebrow">Music</p>

            <h2>
              Learning to listen, contribute, and create something larger than myself
            </h2>

            <p>
              Violin has been one of the longest commitments in my life. Over nine
              years of lessons, daily practice, rehearsals, auditions, and
              performances have taught me that progress rarely arrives all at once.
              It is built through patience, attention to detail, and the willingness
              to return to a difficult passage until it begins to speak.
            </p>

            <p>
              Ensemble playing has taught me to listen beyond my own part. Whether
              serving as Principal Second Violin in Walton Chamber Orchestra,
              performing in Georgia All-State Orchestra, or participating in chamber
              and early-music programs, I have learned that musicianship is not only
              about being heard. It is about understanding how one contribution fits
              into a shared interpretation.
            </p>

            <p>
              Music has also given me space to explore beyond performance. I have
              composed for string quartet, studied the viola da gamba, and learned
              from musicians outside my regular school environment. Each experience
              has encouraged me to approach music with greater curiosity and
              flexibility.
            </p>

            <p>
              Most importantly, music has become a way for me to serve. I have
              performed for residents of senior communities, supported holiday
              fundraising recitals, and played for children with special needs,
              including children like my younger brother Mason. These experiences
              have shown me that music can offer comfort and connection even when
              words are limited.
            </p>
          </div>

          {/* RIGHT SIDE: VIDEO + SELECTED ACTIVITIES */}
          <div className="musicRightColumn">
            <div className="musicMedia">
              <div className="musicVideoFrame">
                <iframe
                  src="https://www.youtube.com/embed/F3n6xjZCq8Q"
                  title="Brady Zhou violin performance"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="musicVideoCaption">
                2025 violin solo
              </p>
            </div>

            <div className="musicActivities">
              <article>
                <span>01</span>

                <div>
                  <h3>Georgia All-State & Chamber Orchestra</h3>
                  <p>
                    Selected for Georgia GMEA All-State Orchestra across middle and
                    high school and served as Principal Second Violin in Walton High
                    School Chamber Orchestra.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>

                <div>
                  <h3>Youth Orchestra Recognition</h3>
                  <p>
                    Accepted to Emory Youth Symphony Orchestra and Georgia Youth
                    Symphony Orchestra.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>

                <div>
                  <h3>Composition & Early Music</h3>
                  <p>
                    Two-time East Cobb Council finalist in National PTA Reflections
                    for original string-quartet compositions, with additional
                    experience in chamber music and viola da gamba.
                  </p>
                </div>
              </article>

              <article>
                <span>04</span>

                <div>
                  <h3>Community Performance</h3>
                  <p>
                    Founding member, treasurer, and volunteer violinist with
                    Mockingbird Melody, performing for senior communities, special
                    needs children, and community service events.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>


      {/* LEADERSHIP */}
      <section
        id="leadership"
        className="contentSection leadershipSection"
      >
        <div className="leadershipLayout">
          <div className="leadershipRoles">
            <p className="eyebrow">Leadership and Service</p>

            <h2>
              Leadership built through responsibility, access, and follow-through
            </h2>

            <div className="leadershipRoleList">
              <article>
                <span>01</span>
                <div>
                  <h3>Class of 2027 Student Representative</h3>
                  <p className="leadershipOrganization">
                    Walton STEM Academy · Advanced Math and Science Pathway
                  </p>
                  <p>
                    A four-year appointed role supporting academy initiatives,
                    student events, partnerships, and communication.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Co-President</h3>
                  <p className="leadershipOrganization">First Step Team</p>
                  <p>
                    Previously President-elect and VP of Outreach for a student-run
                    nonprofit with more than 200 members serving Metro Atlanta.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Treasurer</h3>
                  <p className="leadershipOrganization">
                    Walton Student Government Association
                  </p>
                  <p>
                    Managed budgets, tracked expenditures, prepared reports, and
                    supported fundraising and major school events.
                  </p>
                </div>
              </article>

              <article>
                <span>04</span>
                <div>
                  <h3>Student Representative</h3>
                  <p className="leadershipOrganization">
                    Expect Respect Anti-Bullying Advisory Council
                  </p>
                  <p>
                    Contributed a student perspective to district-wide efforts
                    focused on creating safer and more respectful school communities.
                  </p>
                </div>
              </article>

              <article>
                <span>05</span>
                <div>
                  <h3>Founding Member and Treasurer</h3>
                  <p className="leadershipOrganization">
                    Mockingbird Melody Georgia Chapter
                  </p>
                  <p>
                    Recruited student musicians, coordinated performances, and helped
                    expand access to live music for senior communities.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="leadershipReflection">
            <p className="eyebrow">What leadership taught me</p>

            <h2>
              Leadership begins by noticing what prevents others from participating.
            </h2>

            <p>
              My most meaningful leadership experiences have started with a practical
              question: what is keeping people from becoming involved, and what can I
              do to remove that barrier?
            </p>

            <p>
              At First Step, I saw that many students wanted to serve but lacked
              accessible and consistent opportunities. I helped establish a
              long-term partnership with the Chattahoochee Nature Center, expanded
              food-bank partnerships closer to members’ communities, and supported
              projects involving habitat restoration, river cleanups, food
              distribution, fundraising, and community events.
            </p>

            <p>
              These experiences taught me that leadership is less about directing
              people than creating the conditions in which they can contribute.
              That requires listening, communicating clearly, following through on
              small details, and accepting responsibility when a plan does not work
              as expected.
            </p>

            <p>
              Community service has also changed how I think about impact. A project
              does not need to be large to matter. Organizing one accessible service
              opportunity, helping one student find a role, or bringing music to one
              group of seniors can create a meaningful connection.
            </p>

            <div className="leadershipImpact">
              <article>
                <strong>200+</strong>
                <span>First Step members</span>
              </article>

              <article>
                <strong>100+</strong>
                <span>Service hours annually</span>
              </article>

              <article>
                <strong>4 years</strong>
                <span>STEM Academy representation</span>
              </article>
            </div>
          </div>
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