import Image from "next/image";

const features = [
  {
    number: "01",
    title: "Connected document intelligence",
    description:
      "Parents can upload IEPs, evaluations, medical records, therapy notes, and other documents. The platform extracts and indexes their content so information can be searched and referenced across files.",
  },
  {
    number: "02",
    title: "Context-aware AI companion",
    description:
      "The AI companion combines relevant documents, notes, tasks, trends, and recent conversation history to answer questions with information grounded in the family’s own records.",
  },
  {
    number: "03",
    title: "Progress and trend tracking",
    description:
      "Medication, academic, and standardized-testing data can be recorded, filtered, visualized, and reviewed over time to help families recognize patterns and prepare for conversations with professionals.",
  },
  {
    number: "04",
    title: "Daily organization",
    description:
      "A central dashboard brings together child information, upcoming tasks, quick notes, document summaries, and recent trends so families can manage both long-term records and everyday details.",
  },
];

const technologies = [
  "Python",
  "Streamlit",
  "Retrieval-Augmented Generation",
  "ChromaDB",
  "Sentence Transformers",
  "Ollama",
  "OpenAI API",
  "Pandas",
  "Altair",
];

export default function ParentLensAIPage() {
  return (
    <main className="parentLensPage">
      {/* HERO */}
      <section className="parentLensHero">
        <div className="parentLensHeroContent">
          <a className="parentLensBackLink" href="/#parentlensai">
            ← Back to portfolio
          </a>

          <p className="parentLensEyebrow">
            Family Technology · AI · Information Management
          </p>

          <h1>
            ParentLensAI
          </h1>

          <p className="parentLensHeroTagline">
            A clearer view of a child&apos;s journey.
          </p>

          <p className="parentLensHeroSummary">
            ParentLensAI is a family-centered platform that brings together
            educational, medical, therapeutic, and daily-life information in
            one connected system. It helps parents organize records, explore
            long-term patterns, and ask questions grounded in their own data.
          </p>

          <div className="parentLensHeroActions">
            <a
              href="REPLACE_WITH_PARENTLENSAI_GITHUB_URL"
              target="_blank"
              rel="noreferrer"
              className="parentLensPrimaryButton"
            >
              Explore GitHub ↗
            </a>

            <a
              href="#features"
              className="parentLensSecondaryButton"
            >
              Explore Features ↓
            </a>
          </div>
        </div>

        <div className="parentLensHeroVisual">
          <div className="parentLensHeroBrand">
            <Image
              src="/images/parentlensai/logo.png"
              alt="ParentLensAI logo"
              width={313}
              height={80}
              className="parentLensLogo"
            />
          </div>
          <div className="parentLensImageFrame parentLensHeroImageFrame">
            <Image
              src="/images/parentlensai/parentlensai-dashboard.png"
              alt="ParentLensAI dashboard showing child information, tasks, notes, and trends"
              fill
              priority
              sizes="(max-width: 950px) 92vw, 44vw"
              className="parentLensImage parentLensImageContain"
            />
          </div>

          <p className="parentLensCaption">
            One dashboard connects records, questions, tasks, observations, and
            long-term progress.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="parentLensLightSection">
        <div className="parentLensTwoColumn">
          <div>
            <p className="parentLensSectionLabel">Why I built it</p>

            <h2>
              The challenge was not a lack of information. It was that the
              information was everywhere.
            </h2>
          </div>

          <div className="parentLensBodyCopy">
            <p>
              Families of children with complex needs often manage years of
              IEPs, evaluations, therapy notes, medical records, medications,
              school updates, appointments, and daily observations.
            </p>

            <p>
              I saw this challenge in my own family while helping care for my
              younger brother, Mason. Important details existed across folders,
              documents, conversations, and memories, but there was no simple
              way to see how they connected.
            </p>

            <p>
              ParentLensAI began as an attempt to turn that fragmented
              information into a clearer and more useful picture.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="parentLensDarkSection">
        <div className="parentLensSectionHeading">
          <p className="parentLensSectionLabel">The problem</p>

          <h2>
            Families need more than file storage.
          </h2>

          <p>
            A folder can preserve information, but it does not explain how one
            record relates to another, reveal changes over time, or help a
            parent prepare the right question.
          </p>
        </div>

        <div className="parentLensProblemGrid">
          <article>
            <span>01</span>
            <h3>Fragmented records</h3>
            <p>
              Educational, medical, therapy, and home observations often live
              in separate systems and document formats.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Information overload</h3>
            <p>
              Long reports contain valuable details, but locating one specific
              recommendation or historical change can take significant time.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Lost context</h3>
            <p>
              Notes, tasks, medication changes, and school performance may only
              become meaningful when viewed together.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Difficult preparation</h3>
            <p>
              Parents often need to reconstruct months or years of information
              before school meetings, appointments, or care decisions.
            </p>
          </article>
        </div>
      </section>

      {/* WHAT IT DOES */}
      <section id="features" className="parentLensLightSection">
        <div className="parentLensSectionHeading">
          <p className="parentLensSectionLabel">What it does</p>

          <h2>
            From scattered records to connected understanding
          </h2>

          <p>
            ParentLensAI combines document intelligence, conversational search,
            structured tracking, and day-to-day organization in one platform.
          </p>
        </div>

        <div className="parentLensFeatureLayout">
          <div className="parentLensFeatureText">
            {features.map((feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>

                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="parentLensFeatureVisuals">
            <figure>
              <div className="parentLensImageFrame parentLensFeatureImageFrame">
                <Image
                  src="/images/parentlensai/parentlensai-chat.png"
                  alt="ParentLensAI companion answering questions using family records"
                  fill
                  sizes="(max-width: 950px) 92vw, 48vw"
                  className="parentLensImage parentLensImageContain"
                />
              </div>

              <figcaption className="parentLensCaption parentLensCaptionLight">
                The AI companion retrieves relevant documents, notes, tasks,
                trends, and conversation context before generating a response.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="parentLensDarkSection">
        <div className="parentLensSectionHeading">
          <p className="parentLensSectionLabel">How it works</p>

          <h2>
            A local-first retrieval and reasoning pipeline
          </h2>

          <p>
            The system transforms family records into searchable information,
            retrieves the most relevant evidence for each question, and passes
            that evidence to the selected language model.
          </p>
        </div>

        <div className="parentLensArchitecture">
          <div className="parentLensImageFrame parentLensArchitectureFrame">
            <Image
              src="/images/parentlensai/parentlensai-architecture.png"
              alt="ParentLensAI document retrieval and question-answering architecture"
              fill
              sizes="(max-width: 950px) 92vw, 53vw"
              className="parentLensImage parentLensImageContain"
            />
          </div>

          <div className="parentLensArchitectureSteps">
            <article>
              <span>01</span>
              <div>
                <h3>Ingest records</h3>
                <p>
                  PDF, DOCX, TXT, and Markdown documents are uploaded, parsed,
                  divided into overlapping text chunks, and checked for
                  duplicates.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Create searchable representations</h3>
                <p>
                  A local sentence-transformer model converts each chunk into
                  an embedding stored in a persistent ChromaDB collection.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Retrieve relevant context</h3>
                <p>
                  Each question is compared with indexed documents, notes, and
                  tasks to identify the most relevant supporting information.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Generate a grounded response</h3>
                <p>
                  The retrieved context and recent conversation history are
                  organized into a protected prompt and sent to either a local
                  Ollama model or an optional OpenAI model.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="parentLensAtGlance">
          <article>
            <strong>4</strong>
            <span>Supported document types</span>
          </article>

          <article>
            <strong>3</strong>
            <span>Searchable information sources</span>
          </article>

          <article>
            <strong>2</strong>
            <span>Language-model options</span>
          </article>

          <article>
            <strong>1</strong>
            <span>Connected family workspace</span>
          </article>
        </div>
      </section>

      <section className="parentLensPresentationSection">
        <div className="parentLensPresentationVisual">
          <div className="parentLensImageFrame parentLensPresentationFrame">
            <Image
              src="/images/projects/parentlensai.png"
              alt="Brady presenting the ParentLensAI system architecture"
              fill
              sizes="(max-width: 950px) 92vw, 52vw"
              className="parentLensImage"
            />
          </div>
        </div>

        <div className="parentLensPresentationContent">
          <p className="parentLensSectionLabel">Communicating the system</p>

          <h2>
            Building the platform also meant learning to explain how its parts work
            together.
          </h2>

          <p>
            I presented ParentLensAI as an end-to-end system rather than simply an AI
            chatbot. The architecture connects document processing, vector retrieval,
            structured records, local and cloud language models, dashboards, and
            privacy-conscious data handling.
          </p>

          <p>
            Explaining the architecture helped me evaluate the platform from both a
            technical and user perspective: what information enters the system, how
            it is retrieved, what the model receives, and where human judgment still
            matters.
          </p>
        </div>
      </section>


      {/* PRODUCT VIEWS */}
      <section className="parentLensLightSection">
        <div className="parentLensSectionHeading">
          <p className="parentLensSectionLabel">Inside the platform</p>

          <h2>
            Designed for both long-term understanding and everyday use
          </h2>
        </div>

        <div className="parentLensScreenshotGrid">
          <figure>
            <div className="parentLensImageFrame parentLensScreenshotFrame">
              <Image
                src="/images/parentlensai/parentlensai-upload.png"
                alt="ParentLensAI document upload and record management page"
                fill
                sizes="(max-width: 950px) 92vw, 46vw"
                className="parentLensImage parentLensImageContain"
              />
            </div>

            <figcaption>
              <strong>Document intelligence</strong>
              <span>
                Upload, summarize, index, inspect, and manage family records.
              </span>
            </figcaption>
          </figure>

          <figure>
            <div className="parentLensImageFrame parentLensScreenshotFrame">
              <Image
                src="/images/parentlensai/parentlensai-trends.png"
                alt="ParentLensAI medication and academic trend visualization"
                fill
                sizes="(max-width: 950px) 92vw, 46vw"
                className="parentLensImage parentLensImageContain"
              />
            </div>

            <figcaption>
              <strong>Longitudinal trends</strong>
              <span>
                Track medication, academic, and testing data across time.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="parentLensPrivacySection">
        <div className="parentLensTwoColumn">
          <div>
            <p className="parentLensSectionLabel">
              Privacy and responsible design
            </p>

            <h2>
              Sensitive family information requires a different design
              philosophy.
            </h2>
          </div>

          <div className="parentLensBodyCopy">
            <p>
              ParentLensAI was designed with a local-first architecture. Family
              documents, embeddings, notes, tasks, profile information, and
              structured records can remain on the user&apos;s own computer.
            </p>

            <p>
              A local Ollama model allows questions to be answered without
              sending family records to a cloud language model. When the
              optional OpenAI mode is selected, only the limited text context
              required for the current question is sent.
            </p>

            <p>
              The system also treats retrieved documents as reference data
              rather than trusted instructions, helping reduce the risk that
              instructions embedded inside uploaded files can alter the
              assistant&apos;s behavior.
            </p>
          </div>
        </div>
      </section>

      {/* LEARNING */}
      <section className="parentLensLearningSection">
        <div className="parentLensLearningContent">
          <p className="parentLensSectionLabel">What I learned</p>

          <blockquote>
            Building ParentLensAI taught me that a useful AI system is not just
            a language model. It requires thoughtful information architecture,
            careful retrieval, privacy decisions, usable interfaces, and a
            clear understanding of the people the system is meant to support.
          </blockquote>
        </div>
      </section>

      {/* EXPLORE */}
      <section className="parentLensExploreSection">
        <div className="parentLensExploreIntro">
          <p className="parentLensSectionLabel">Explore the project</p>

          <h2>
            See how ParentLensAI was designed and built.
          </h2>

          <p>
            The GitHub repository includes the application structure, document
            processing pipeline, retrieval system, dashboard, trend tracking,
            and language-model integration.
          </p>
        </div>

        <div className="parentLensExploreCards">
          <a
            href="REPLACE_WITH_PARENTLENSAI_GITHUB_URL"
            target="_blank"
            rel="noreferrer"
          >
            <p>Source Code and Documentation</p>
            <h3>GitHub Repository</h3>
            <span>Explore the complete project ↗</span>
          </a>

          <a href="/projects">
            <p>Project Collection</p>
            <h3>More Projects</h3>
            <span>Explore research, software, and engineering →</span>
          </a>
        </div>

        <div className="parentLensTechnologyList">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>
    </main>
  );
}