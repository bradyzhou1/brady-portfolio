import Image from "next/image";

const awards = [
  {
    level: "International",
    title: "Regeneron International Science and Engineering Fair",
    recognition: "ISEF Finalist",
  },
  {
    level: "State",
    title: "Georgia Science & Engineering Fair",
    recognition: "Regeneron ISEF Award - Top 4",
  },
  {
    level: "State",
    title: "Georgia Science & Engineering Fair",
    recognition: "Top Ten Grand Award",
  },
  {
    level: "State",
    title: "Georgia Science & Engineering Fair",
    recognition:
      "Best in Category - Computational Biology & Bioinformatics",
  },
  {
    level: "Special Award",
    title: "Citadel Securities Innovation Prize",
    recognition: "Exceptional Data Analysis Techniques",
  },
  {
    level: "State",
    title: "Georgia Science & Engineering Fair",
    recognition: "First Honor Award",
  },
  {
    level: "Regional",
    title: "Cobb-Paulding Regional Science Fair",
    recognition: "First Place Winner",
  },
];

const findings = [
  {
    value: "0.738",
    label: "LOSO ROC-AUC",
  },
  {
    value: "0.675",
    label: "Aggregated accuracy",
  },
  {
    value: "p ≤ 0.001",
    label: "Permutation significance",
  },
  {
    value: "24",
    label: "Unseen-site tests",
  },
];

export default function ResearchPage() {
  return (
    <main className="researchPage">
      {/* HERO */}
      <section className="researchHero">
        <div className="researchHeroContent">
          <a className="researchBackLink" href="/#research">
            ← Back to portfolio
          </a>

          <p className="researchEyebrow">
            Regeneron ISEF Finalist · Computational Biology
          </p>

          <h1>
            Machine Learning Approaches to Brain Connectivity in Autism
          </h1>

          <p className="researchHeroSummary">
            Using resting-state fMRI and interpretable machine learning, I
            investigated subtle autism-related patterns in functional brain
            connectivity, and the research-site effects that challenge
            real-world generalization.
          </p>

          <div className="researchHeroActions">
            <a
              href="https://isef.net/project/cbio065-brain-connectivity-in-autism-with-machine-learning"
              target="_blank"
              rel="noreferrer"
              className="researchPrimaryButton"
            >
              View on ISEF ↗
            </a>

            <a
              href="https://github.com/bradyzhou1/Regeneron-ISEF-Finalist-Brain-Connectivity-in-Autism-with-ML"
              target="_blank"
              rel="noreferrer"
              className="researchSecondaryButton"
            >
              Explore GitHub ↗
            </a>
          </div>
        </div>

        <div className="researchHeroVisual">
          <div className="researchImageFrame researchImageFrameDark">
            <Image
              src="/images/research/brain-connectome.png"
              alt="Brain connectome showing influential functional connections"
              fill
              priority
              sizes="(max-width: 950px) 92vw, 44vw"
              className="researchImage researchImageContain"
            />
          </div>

          <p className="researchCaption">
            Influential connections were distributed across brain networks
            rather than concentrated in one “autism region.”
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="researchLightSection">
        <div className="researchTwoColumn">
          <div>
            <p className="researchSectionLabel">Why I did this</p>

            <h2>
              The question began with someone close to me.
            </h2>
          </div>

          <div className="researchBodyCopy">
            <p>
              This project began with my younger brother, Mason. During my
              sophomore year, he experienced a profound regression, yet his
              clinical MRI showed no structural abnormality.
            </p>

            <p>
              I began wondering what differences might exist not in the
              appearance of the brain, but in how its regions communicate.
              Resting-state fMRI offered a way to explore that question through
              functional connectivity, the synchronization of activity between
              brain regions while a person is at rest.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT I DID */}
      <section className="researchDarkSection">
        <div className="researchSectionHeading">
          <p className="researchSectionLabel">What I did</p>

          <h2>
            From brain signals to a rigorous multisite machine-learning test
          </h2>

          <p>
            I built a complete analysis pipeline using public, de-identified
            ABIDE neuroimaging data.
          </p>
        </div>

        <div className="researchMethodLayout">
          <div className="researchImageFrame researchPipelineFrame">
            <Image
              src="/images/research/connectivity-pipeline.png"
              alt="Simplified brain connectivity and machine-learning pipeline"
              fill
              sizes="(max-width: 950px) 92vw, 54vw"
              className="researchImage researchImageContain"
            />
          </div>

          <div className="researchMethodSteps">
            <article>
              <span>01</span>
              <div>
                <h3>Build the connectome</h3>
                <p>
                  Converted signals from 200 brain regions into 19,900 unique
                  pairwise connectivity features.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Explore the data</h3>
                <p>
                  Used PCA and UMAP to examine whether patterns reflected
                  diagnosis or research site.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Test generalization</h3>
                <p>
                  Trained logistic-regression models and tested each one on an
                  entirely unseen hospital or scanner site.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Challenge the result</h3>
                <p>
                  Used permutation testing, confidence intervals, site-balanced
                  analysis, and model interpretation to evaluate reliability.
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="researchAtGlance">
          <article>
            <strong>679</strong>
            <span>Participants</span>
          </article>

          <article>
            <strong>24</strong>
            <span>Research sites</span>
          </article>

          <article>
            <strong>200</strong>
            <span>Brain regions</span>
          </article>

          <article>
            <strong>19,900</strong>
            <span>Connectivity features</span>
          </article>
        </div>
      </section>

      {/* FINDINGS */}
      <section className="researchLightSection">
        <div className="researchSectionHeading">
          <p className="researchSectionLabel">What I found</p>

          <h2>
            The signal was real, but the limitations mattered just as much.
          </h2>
        </div>

        <div className="researchFindingsLayout">
          <div className="researchFindingText">
            <article>
              <span>01</span>
              <div>
                <h3>Subtle and distributed</h3>
                <p>
                  Autism-related connectivity differences appeared across many
                  brain-network interactions rather than in one isolated brain
                  region.
                </p>
              </div>
            </article>

            <article>
              <span>02</span>
              <div>
                <h3>Site effects were powerful</h3>
                <p>
                  Scanner and research-site differences were substantially
                  stronger than diagnosis effects, making strict multisite
                  validation essential.
                </p>
              </div>
            </article>

            <article>
              <span>03</span>
              <div>
                <h3>Above chance, not diagnostic</h3>
                <p>
                  The model performed significantly above chance on unseen
                  sites, but its accuracy was not sufficient for standalone
                  clinical diagnosis.
                </p>
              </div>
            </article>

            <article>
              <span>04</span>
              <div>
                <h3>Biologically meaningful network patterns</h3>
                <p>
                  The most informative and reproducible connections were centered on
                  interactions between limbic, attention, control, sensory-motor, and
                  default-mode networks. These patterns are consistent with commonly
                  reported autism-related differences in emotion regulation, sensory
                  processing, and attentional shifting.
                </p>
              </div>
            </article>

          </div>

          <div className="researchResultsVisuals">
            <figure className="researchResultFigure">
              <div className="researchImageFrame researchResultsFrame">
                <Image
                  src="/images/research/site-effects-results1.png"
                  alt="PCA and UMAP visualizations showing clustering by research site and overlap between autism and control groups"
                  fill
                  sizes="(max-width: 950px) 92vw, 50vw"
                  className="researchImage researchImageContain"
                />
              </div>

              <figcaption className="researchCaption researchCaptionLight">
                PCA and UMAP showed that participants clustered more strongly by
                research site than by diagnosis.
              </figcaption>
            </figure>
          </div>

        </div>

        <div className="researchMetricGrid">
          {findings.map((finding) => (
            <article key={finding.label}>
              <strong>{finding.value}</strong>
              <span>{finding.label}</span>
            </article>
          ))}
        </div>

        <div className="researchLesson">
          <p className="researchSectionLabel">What I learned</p>

          <blockquote>
            A model’s accuracy is not enough. I learned to ask what information
            the model might be exploiting, whether the evaluation reflects the
            real setting, and how uncertainty should shape the claims I make.
          </blockquote>
        </div>
      </section>

      {/* AWARDS */}
      <section className="researchAwardsSection">
        <div className="researchSectionHeading">
          <p className="researchSectionLabel">Awards and recognition</p>

          <h2>
            Recognized at regional, state, and international levels
          </h2>
        </div>

        <div className="researchAwardsGrid">
          {awards.map((award) => (
            <article
              className="researchAwardCard"
              key={`${award.title}-${award.recognition}`}
            >
              <p>{award.level}</p>
              <h3>{award.recognition}</h3>
              <span>{award.title}</span>
            </article>
          ))}
        </div>
      </section>

      {/* LINKS */}
      <section className="researchExploreSection">
        <div className="researchExploreIntro">
          <p className="researchSectionLabel">Explore the project</p>

          <h2>Interested in the complete research?</h2>

          <p>
            The official ISEF page contains the full project presentation and
            results. The GitHub repository contains the analysis code,
            reproducibility materials, figures, and technical documentation.
          </p>
        </div>

        <div className="researchExploreCards">
          <a
            href="https://isef.net/project/cbio065-brain-connectivity-in-autism-with-machine-learning"
            target="_blank"
            rel="noreferrer"
          >
            <p>Official Project Page</p>
            <h3>Regeneron ISEF</h3>
            <span>View complete project details ↗</span>
          </a>

          <a
            href="https://github.com/bradyzhou1/Regeneron-ISEF-Finalist-Brain-Connectivity-in-Autism-with-ML"
            target="_blank"
            rel="noreferrer"
          >
            <p>Source Code and Documentation</p>
            <h3>GitHub Repository</h3>
            <span>Explore the analysis pipeline ↗</span>
          </a>
        </div>

        <div className="researchKeywords">
          {[
            "Machine Learning",
            "Autism",
            "Resting-State fMRI",
            "Functional Connectivity",
            "Computational Neuroscience",
            "Multisite Generalization",
            "Interpretable AI",
          ].map((keyword) => (
            <span key={keyword}>{keyword}</span>
          ))}
        </div>
      </section>
    </main>
  );
}