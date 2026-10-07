import Link from "next/link";
import TypingIdentity from "@/components/TypingIdentity";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const featuredProjects = [
  {
    title: "Microplastics Mapping",
    category: "Environmental Research",
    description:
      "A community engaged research project that created the first microplastics map of the Chattahoochee River in the Metro Atlanta area.",
    href: "/projects",
    number: "01",
  },
  {
    title: "MathWorks M3 Challenge",
    category: "Mathematical Modeling",
    description:
      "A team-based mathematical modeling competition focused on developing and communicating a data-driven solution under time constraints.",
    href: "/projects",
    number: "02",
  },
  {
    title: "Lunar Rover Engineering",
    category: "Georgia Tech Internship",
    description:
      "A collaborative project involving rover design, programming, testing, and iterative engineering for a simulated lunar environment.",
    href: "/projects",
    number: "03",
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
        <Reveal direction="left" amount={0.25}>
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

            <div className="aboutPhoto aboutPhotoTertiary">
              <Image
                src="/images/infantrymuseum.jpg"
                alt="Brady and Mason at the National Infantry Museum"
                fill
                sizes="(max-width: 900px) 90vw, 36vw"
                className="aboutImage"
              />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" amount={0.2} delay={0.08}>
          <div className="aboutContent">
            <p className="eyebrow">About Me</p>

            <h2>
              I began building because some questions felt too personal to leave
              unanswered.
            </h2>

            <div className="aboutStory">
              <p>
              My interest in research became deeply personal through my younger brother, who is autistic. During my sophomore year, he experienced a profound regression. 
              Although his clinical MRI showed no structural abnormality, I became curious about what changes in brain function might remain invisible to conventional imaging. 
              That question led me to investigate autism-related patterns in functional brain connectivity using resting-state fMRI data, and ultimately to present the work as a Regeneron ISEF finalist.
              </p>

              <p>
              At the same time, watching my family navigate therapy notes, medical records, school documents, and medications inspired me to create ParentLensAI, 
              a privacy-focused, on-device app that helps families bring all their care information together in one place and generates more insights as more data is added.       
              </p>
                
              <p>
              Beyond technology, eight years of violin have taught me to listen carefully, work patiently, and contribute as part of an ensemble. 
              As co-president of FirstStep and through school and community projects, I've learned that ideas become meaningful when people work together to turn them into action.
              </p>

              <p>
              Across research, technology, music, and service, I keep coming back to the same habits: ask questions from different perspectives, 
              connect ideas that seem unrelated, listen to the people involved, and turn what I learn into something useful.
              </p>
            </div>
          </div>
        </Reveal>

      </section>

      {/* ACADEMIC & TECHNICAL SNAPSHOT */}
      <section
        id="academic-technical"
        className="contentSection snapshotSection"
      >
        <Reveal amount={0.3}>
          <div className="snapshotHeader">
            <p className="eyebrow">Academic & Technical Snapshot</p>

            <h2>
              Preparation across academics, computing, research, and engineering
            </h2>

            <p className="snapshotSchoolLine">
              Walton High School
              <br />
              STEM Academy
              <br />
              Advanced Math and Science (AMS) Pathway
            </p>

            {/* <p>
              A concise view of my academic foundation, technical experience, and
              continuing growth as a student researcher and developer.
            </p> */}
          </div>
        </Reveal>  

        <div className="snapshotGrid">
          {/* GPA */}
          <article className="snapshotCard snapshotMetricCard">
              <p className="snapshotCardLabel">Academic Record</p>

              <strong>
                <CountUp value={4.688} decimals={3} duration={1.5} />
              </strong>

              <h3>Weighted GPA</h3>

              <p>
                4.0 unweighted
                <br />
                As of the end of 11th grade
              </p>
          </article>

          {/* SAT */}
          <article className="snapshotCard snapshotMetricCard">
              <p className="snapshotCardLabel">Standardized Testing</p>

              <strong><CountUp value={1540} duration={1.5} /></strong>

              <h3>SAT · First Sitting</h3>

              <p>
                750 Reading & Writing
                <br />
                790 Math
              </p>
          </article>

          {/* ACADEMIC RECOGNITION */}
          <article className="snapshotCard">
              <p className="snapshotCardLabel">Selected Recognitions</p>

              <h3>Academic Honors</h3>

              <ul className="snapshotList">
                <li>2027 National Merit Semifinalist</li>
                <li>Georgia Certificate of Merit</li>
                <li>Outstanding Achievement — STEM Academy</li>
                <li>Outstanding Achievement — English Department</li>
                <li>AP Capstone Diploma — Anticipated</li>
              </ul>
          </article>

          {/* COMPUTER SCIENCE SKILLS */}
          <article className="snapshotCard snapshotWideCard">
              <p className="snapshotCardLabel">Technical Foundation</p>

              <h3>Computer Science Skills</h3>

              <div className="skillGroups">
                <div>
                  <h4>Programming</h4>
                  <p>Python · Java · TypeScript · HTML/CSS · SQL</p>
                </div>

                <div>
                  <h4>Machine Learning</h4>
                  <p>scikit-learn · XGBoost · PyTorch · Graph Neural Networks</p>
                </div>

                <div>
                  <h4>AI & Data Systems</h4>
                  <p>RAG · Vector Databases · Local LLMs · Data Visualization</p>
                </div>

                <div>
                  <h4>Development</h4>
                  <p>Next.js · React · Streamlit · Git · GitHub</p>
                </div>
              </div>
          </article>

          {/* SENIOR COURSEWORK */}
          <article className="snapshotCard snapshotCourseworkCard">
              <p className="snapshotCardLabel">Academic Rigor</p>

              <h3>AP & College Level Coursework</h3>

              <ul className="snapshotList">
                <li>Georgia Tech Linear Algebra</li>
                <li>Georgia Tech Multivariable Calculus</li>
                <li>AP Calculus BC</li>
                <li>AP Statistics</li>
                <li>AP Precalculus</li>
                <li>AP Research</li>
                <li>AP Seminar</li>
                <li>AP Chemistry</li>
                <li>AP Biology</li>
                <li>AP Physics C: Mechanics</li>
                <li>AP Environmental Science</li>
                <li>AP Cybersecurity</li>
                <li>AP Computer Science A</li>
                <li>AP English Literature</li>
                <li>AP English Language</li>
              </ul>
          </article>

          {/* TECHNICAL EXPERIENCES */}
          <article className="snapshotCard snapshotTechnicalCard">
              <p className="snapshotCardLabel">Beyond the Classroom</p>

              <h3>Technical Experiences</h3>

              <ul className="snapshotList">
                <li>Georgia Tech STEP Internship – Department of Aerospace Engineering</li>
                <li>Georgia Tech Seth Bonder Computational & Data Science Camp</li>
                <li>Independent AI/ML Research</li>
                <li>ParentLensAI Development & Beta Testing</li>
              </ul>
          </article> 

          {/* CURRENT RESEARCH MILESTONE */}
          <article className="snapshotCard snapshotResearchCard">
              <div className="snapshotResearchContent">
                <div>
                  <p className="snapshotCardLabel">Research in Progress</p>

                  <h3>From ISEF to STS</h3>

                  <p>
                    Building on the autism brain-connectivity research I presented at Regeneron ISEF, 
                    I am expanding the study into a full research paper, 
                    developed to the 20-page submission limit for the 2027 Regeneron Scientific Talent Search (STS).
                  </p>
                </div>

                <div className="snapshotResearchStatus">
                  <span>Submitted Regeneron STS Application, October 2027</span>
                </div>
              </div>
          </article>
        


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
              <strong><CountUp value={679} /></strong>
              <span>Participants</span>
            </article>

            <article>
              <strong><CountUp value={24} /></strong>
              <span>Research Sites</span>
            </article>

            <article>
              <strong><CountUp value={19900} /></strong>
              <span>Connectivity Features</span>
            </article>

            <article>
              <strong><CountUp value={0.738} decimals={3} /></strong>
              <span>LOSO ROC-AUC</span>
            </article>
          </div>
        </div>
      </section>

      {/* PARENTLENSAI */}
      <section id="parentlensai" className="contentSection productSection">
        <div className="productLayout">

          <Reveal direction="left" amount={0.25}>
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
                  src="/images/parentlensai/parentlensai-architecture.png"
                  alt="ParentLensAI architecture dashboard showing records, tasks, notes, and trends"
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
          </Reveal>
          
          <Reveal direction="right" amount={0.25} delay={0.08}>
            <div className="productDescription">
              <p className="eyebrow">ParentLensAI</p>

              <h2>
                Turning fragmented family information into a connected picture
              </h2>

              <p>
                Families of children with complex needs often manage years of 
                IEPs, evaluations, medical records, therapy notes, medications, 
                school information, appointments, and daily observations across disconnected systems.
              </p>

              <p>
                ParentLensAI brings these pieces together in an on-device AI platform, 
                helping parents search, organize, and understand information in context 
                rather than one document at a time.
              </p>

              <ul className="featureList">
                <li>Document upload, indexing, summaries, and semantic search</li>
                <li>RAG-based questions grounded in family documents</li>
                <li>Medication, academic, and progress trend visualization</li>
                <li>Powered by local LLMs, managed by Ollama</li>
              </ul>

              <p className="parentLensBetaNote">
                ParentLensAI is currently in beta testing with parents of children with special needs, 
                gathering feedback on privacy and data protection, usability, and usefulness.
              </p>

              <Link href="/parentlensai" className="parentLensHomeButton">
                Explore the Full Project
              </Link>
            </div>
          </Reveal>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="contentSection projectsSection">
        {/* <div className="sectionLabel">
          <span>04</span>
          <p>Selected Projects</p>
        </div> */}

        <div className="sectionHeading">
          <p className="eyebrow">Additional Projects & Team Experiences</p>
          <h2>Exploring problems across research, modeling, and engineering</h2>
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
              fundraising recitals, and played for children with special needs.
            </p>
          </div>

          {/* RIGHT SIDE: PERFORMANCES */}
          <div className="musicRightColumn">
            <div className="musicMedia">
              <div className="musicVideoFrame">
                <iframe
                  src="https://www.youtube.com/embed/F3n6xjZCq8Q"
                  title="Brady Zhou December 2025 violin solo"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="musicVideoCaption">December 2025 violin solo</p>
            </div>

            <div className="musicMedia">
              <div className="musicVideoFrame">
                <iframe
                  src="https://www.youtube.com/embed/6pqC3Cro-cY"
                  title="Brady Zhou August 2026 violin solo"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <p className="musicVideoCaption">August 2026 violin solo</p>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH ACTIVITY CARDS */}
        <div className="musicActivitiesSection">
          <div className="musicActivitiesHeader">
            <p className="eyebrow">Selected Experiences</p>
            <h3>Performance, composition, and community impact</h3>
          </div>

          <div className="musicActivities">
            <article className="musicActivityCard">
              {/* <span className="musicActivityNumber" aria-hidden="true">
                01
              </span> */}

              <div>
                <h4>Georgia All-State & Walton Chamber</h4>
                <p>
                  Selected for Georgia <strong>GMEA All-State</strong> Orchestra throughout middle and
                  high school and served as <strong>Principal Second Violin</strong> in Walton High
                  School Chamber Orchestra.
                </p>
              </div>
            </article>

            <article className="musicActivityCard">
              {/* <span className="musicActivityNumber" aria-hidden="true">
                02
              </span> */}

              <div>
                <h4>Youth Orchestra Recognition</h4>
                <p>
                  Accepted to the Emory Youth Symphony Orchestra and Georgia Youth
                  Symphony Orchestra.
                </p>
              </div>
            </article>

            <article className="musicActivityCard">
              {/* <span className="musicActivityNumber" aria-hidden="true">
                03
              </span> */}

              <div>
                <h4>Composition & Early Music</h4>
                <p>
                  Two-time East Cobb Council finalist in National PTA Reflections for
                  original string-quartet compositions, with additional experience in
                  chamber music and viola da gamba.
                </p>
              </div>
            </article>

            <article className="musicActivityCard">
              {/* <span className="musicActivityNumber" aria-hidden="true">
                04
              </span> */}

              <div>
                <h4>Community Performance</h4>
                <p>
                  Founding member, treasurer, and volunteer violinist with Mockingbird
                  Melody, performing for senior communities, children with special
                  needs, and community service events.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>


      {/* LEADERSHIP */}
      <section
        id="leadership"
        className="contentSection leadershipSection"
      >
        <div className="leadershipHeader">
          <p className="eyebrow">Leadership & Service</p>

          <h2>
            Creating opportunities for others to participate, contribute, and serve
          </h2>

          <p>
            My leadership experiences have centered on expanding access, building
            lasting partnerships, and helping student-led ideas become reliable
            community programs.
          </p>
        </div>

        <div className="leadershipExperienceList">
          <article className="leadershipFeaturedRole">
            <span>01</span>
            <div>
              <p className="leadershipOrganization">
                Walton High School 
              </p>
              <h3>STEM AMS Student Representative Class of 2027</h3>
              <p><strong>2023 - Present</strong></p>

              <p>
                An appointed four-year role as the sole Student Representative for the STEM Academy 
                Advanced Math and Science Pathway, representing the Class of 2027 and supporting 
                academy initiatives, student events, partnerships, and communication between 
                students and program leadership.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <p className="leadershipOrganization">
                <a
                  href="https://www.firststepteam.org/members-leadership/leadership-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leadershipOrganizationLink"
                >
                  <span>First Step Team</span>
                  <span className="externalLinkIcon" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </p>

              <h3>Co-President</h3>

              <p>
                <strong>2026 - Present</strong>
              </p>

              <p>
                Previously President-elect (2025-2026) and VP of Outreach
                (2023-2025) for a student-run nonprofit with more than 200 members.
                I initiated a long-term partnership with the Chattahoochee Nature
                Center, expanded local food bank partnerships, and helped organize
                environmental restoration, food distribution, fundraising, and
                community-service events.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>

            <div>
              <p className="leadershipOrganization">
                Mockingbird Melody Georgia Chapter
              </p>
              <h3>Founding Member, Treasurer, & Volunteer Violinist</h3>
              <p><strong>2025 - Present</strong></p>
              <p>
                Recruited student musicians, helped coordinate performances, and
                expanded access to live music for senior communities.
              </p>
            </div>
          </article>

          <article>
            <span>04</span>

            <div>
              <p className="leadershipOrganization">
                Walton Student Government Association
              </p>
              <h3>Treasurer</h3>
              <p><strong>2023 - 2024</strong></p>
              <p>
                Managed budgets, tracked expenditures, prepared reports, and
                supported fundraising and major school events.
              </p>
            </div>
          </article>

          <article>
            <span>05</span>

            <div>
              <p className="leadershipOrganization">
                Expect Respect Anti-Bullying Advisory Council
              </p>
              <h3>Student Representative</h3>
              <p><strong>2023 - 2025</strong></p>
              <p>
                Contributed a student perspective to district-wide efforts focused on
                safer and more respectful school communities.
              </p>
            </div>
          </article>
        </div>
        
        <div style={{ height: "75px" }} />

        <div className="leadershipHeader">
          <h2>
            Recognition for leadership, initiative, and community impact
          </h2>
        </div>

        <div className="leadershipAwardList">

          <article>
            <span>01</span>

            <div>
              <h3>President's Volunteer Service Award - Gold Level</h3>

              <p><strong>2023</strong></p>

              <p>
                Recognized for more than 100 hours of community service annually. 
                Continued volunteering at the same level after 
                the national program was discontinued in 2025.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <h3>North American Prominent Chinese American High School Student Public Service Scholarship</h3>

              <p><strong>2026</strong></p>

              <p>
                One of four scholarship recipients 
                recognized by the American Chinese Next Generation Education Foundation 
                for academic achievement and commitment to public service.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>

            <div>
              <h3>Shine-A-Light Award</h3>

              <p><strong>2023 - 2026</strong></p>

              <p>
                Recognized by the American Chinese Next Generation Education Foundation 
                for impactful volunteer service to the community.
              </p>
            </div>
          </article>

          <div className="leadershipAwardPicture">
            <img src="\images\leadership-award.png" alt="North American Prominent Chinese American High School Student Public Service Scholarship Ceremony" />
          </div>
        </div>
        
        <div style={{ height: "50px" }} />

        <div className="leadershipHeader">
          <h2>
            Developing the skills to lead, collaborate, and build lasting programs
          </h2>
        </div>

        <div className="leadershipExperienceList">

          <article>
            <span>01</span>

            <div>
              <p className="leadershipOrganization">
                Dale Carnegie
              </p>

              <h3>Dale Carnegie Leadership Training</h3>

              <p><strong>2023</strong></p>

              <p>
                Selected trainee & scholarship recipient that completed an intensive weeklong program 
                through North America Volunteers with a Carnegie-certified trainer.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <p className="leadershipOrganization">
                North America Volunteers
              </p>

              <h3>North America Volunteers Leadership Camp</h3>

              <p><strong>2023</strong></p>

              <p>
                Selected participant & scholarship recipient that completed an intensive residential leadership program 
                focused on teamwork, communication, and leadership development.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">
        <p className="eyebrow">Connect</p>

        <h2>Thank you for checking out my work.</h2>

        <p>
          My projects continue to evolve as I learn, build, and explore new questions.
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

        <p className="siteBuildNote">
          {/* Built with Next.js and TypeScript ·{" "} */}
          <a
            href="https://github.com/bradyzhou1/brady-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            View source code on GitHub ↗
          </a>
        </p>
      </footer>
    </main>
  );
}