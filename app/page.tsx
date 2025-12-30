import Image from "next/image";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ArtContainer from "./components/ArtContainer";
import ExperienceList from "./components/ExperienceList";

const navItems = [
  { href: "/files/resume.pdf", emoji: "📄", label: "resume", external: true },
  { href: "/research", emoji: "🔬", label: "research" },
  { href: "/hobbies", emoji: "🎯", label: "hobbies" },
];

const experiences = [
  {
    company: "Coinbase",
    role: "Software Engineer",
    logo: "/images/company_logos/coinbase.png",
    dates: "Jun '25 – Present",
    location: "San Francisco, CA",
    current: true,
  },
  {
    company: "UT Austin – Huth Lab",
    role: "Undergraduate Researcher",
    logo: "/images/company_logos/ut.jpg",
    dates: "Feb '23 – May '25",
    location: "Austin, TX",
  },
  {
    company: "IMC Trading",
    role: "Software Engineer Intern",
    logo: "/images/company_logos/imc.png",
    dates: "May '24 – Aug '24",
    location: "Chicago, IL",
  },
  {
    company: "Omphalos Lifesciences",
    role: "Software Engineer Intern",
    logo: "/images/company_logos/omphalos.jpg",
    dates: "May '23 – Aug '23",
    location: "Dallas, TX",
  },
  {
    company: "PayPal",
    role: "Machine Learning Intern",
    logo: "/images/company_logos/paypal.webp",
    dates: "Jun '22 – Aug '22",
    location: "San Jose, CA - Remote",
  },
  {
    company: "University of Houston – Cheng Lab",
    role: "Research Intern",
    logo: "/images/company_logos/uh.png",
    dates: "Jun '21 – Aug '21",
    location: "Houston, TX",
  },
  {
    company: "Kumon",
    role: "Math & Reading Tutor",
    logo: "/images/company_logos/kumon.png",
    dates: "Sep '20 – May '21",
    location: "Cypress, TX",
  },
  {
    company: "Rice University",
    role: "Research Intern",
    logo: "/images/company_logos/rice.png",
    dates: "Jun '20 – Aug '20",
    location: "Houston, TX",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <ArtContainer />
      <Navigation items={navItems} />

      <section className="hero hero-home">
        <header className="container hero-with-profile">
          <div className="hero-text">
            <h1 className="animate-in animate-in-delay-1">ashay swadi</h1>
            <p className="hero-subtitle animate-in animate-in-delay-2">
              software engineer @ coinbase
            </p>
          </div>
          <div className="profile-section animate-in animate-in-delay-2">
            <div className="profile-frame">
              <Image
                src="/images/headshot.jpg"
                className="profile-pic"
                alt="Ashay Swadi"
                width={200}
                height={200}
              />
              <div className="profile-ring"></div>
            </div>
          </div>
        </header>
      </section>

      <main className="about me">
        <div className="container about-content">
          <div className="bio-experience-section">
            <h2 className="animate-in animate-in-delay-3"><span className="wave-emoji">👋🏽</span> about me</h2>
            <p className="animate-in animate-in-delay-4">
              i&apos;m a software engineer with experience spanning machine learning,
              applied research, and large-scale infrastructure. i&apos;m very
              passionate about real-world applications of ML and enjoy working on
              problems that sit between research and production.
            </p>
            <p className="animate-in animate-in-delay-4">
              i graduated from the{" "}
              <span className="ut-text">university of texas at austin</span>{" "}
              (hook &apos;em! 🤘) where i studied computer science as part of the{" "}
              <a
                href="https://www.cs.utexas.edu/turing-scholars"
                target="_blank"
                rel="noopener noreferrer"
                className="turing-link"
              >
                turing scholars
              </a>{" "}
              honors program. now, i'm a software engineer on the infrastructure
              team at{" "}
              <a
                href="https://www.coinbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="coinbase-link"
              >
                coinbase
              </a>
              !
            </p>
            <p className="animate-in animate-in-delay-4">
              outside of work, i love playing basketball & tennis, traveling to
              scenic places, and watching movies with my roommates!
            </p>

            <div className="section-divider animate-in animate-in-delay-5"></div>

            <h2 className="experience-header animate-in animate-in-delay-5">
              Experience
            </h2>
            <ExperienceList experiences={experiences} initialCount={5} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
