import Navigation from "../components/Navigation";
import ResearchAnimation from "../components/ResearchAnimation";

const navItems = [
  { href: "/", emoji: "🏠", label: "home" },
  { href: "/files/resume.pdf", emoji: "📄", label: "resume", external: true },
  { href: "/hobbies", emoji: "🎯", label: "hobbies" },
];

export default function Research() {
  return (
    <>
      <Navigation items={navItems} />

      <section className="hero research-hero">
        <header className="container">
          <h1 className="animate-in">research</h1>
          <p className="tagline animate-in animate-in-delay-1">
            a collection of my cool research work and projects.
          </p>
        </header>
        <div className="research-animation-container">
          <ResearchAnimation />
        </div>
      </section>

      <main className="research-container">
        <section className="research-section animate-in animate-in-delay-2">
          <h2>🧠 huth lab</h2>
          <p>
            from sophomore to senior year, i was an undergraduate researcher as
            part of the{" "}
            <a
              href="https://www.cs.utexas.edu/~huth/"
              target="_blank"
              rel="noopener noreferrer"
              className="lab-link"
            >
              huth lab
            </a>{" "}
            at ut austin, studying the intersection of{" "}
            <strong>neuroscience</strong> and <strong>machine learning</strong>.
            the lab does some really cool work in understanding how language is
            represented in the brain; in other words, we aim to discover what
            exactly goes on in our brains when we hear, read, or think
            something. my specific research task focused on{" "}
            <strong>
              reconstructing speech audio from fMRI-recorded brain signals.
            </strong>
          </p>
        </section>

        <section className="research-section animate-in animate-in-delay-3">
          <h2>📚 undergraduate honors thesis</h2>
          <p>
            as part of completing the turing scholars program, i wrote a thesis
            paper on my research and{" "}
            <strong>successfully defended my thesis</strong> in my senior year!
            check it out if you&apos;re interested ⬇️
          </p>
          <a
            href="/files/thesis.pdf"
            className="thesis-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📖 read my thesis
          </a>
        </section>

        <section className="research-section animate-in animate-in-delay-4">
          <h2>🚗 self-driving routing optimization</h2>
          <p>
            a cool research project i did my senior year of high school with
            the university of houston department of computer science. i worked
            on developing and evaluating routing algorithms for networks of
            self-driving cars, focusing on optimizing traffic flow while meeting
            vehicle deadlines.
          </p>
          <ul>
            <li>
              proposed a new dijkstra-based algorithm that optimized driving
              routes to reduce overall vehicular congestion while maximizing the
              number of deadlines met
            </li>
            <li>
              measured a <span className="highlight">32% improvement</span> in
              total travel time across all vehicles and a{" "}
              <span className="highlight">12% reduction</span> in deadlines
              missed
            </li>
            <li>
              submitted a work-in-progress research paper to the{" "}
              <span className="conference">IEEE Real Time Systems Symposium</span>{" "}
              conference
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

