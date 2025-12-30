import Link from "next/link";
import Navigation from "../components/Navigation";
import HobbiesAnimation from "../components/HobbiesAnimation";

const navItems = [
  { href: "/", emoji: "🏠", label: "home" },
  { href: "/files/resume.pdf", emoji: "📄", label: "resume", external: true },
  { href: "/research", emoji: "🔬", label: "research" },
];

export default function Hobbies() {
  return (
    <>
      <Navigation items={navItems} />

      <section className="hero hobbies-hero">
        <header className="container">
          <h1 className="animate-in">hobbies & interests</h1>
          <p className="tagline animate-in animate-in-delay-1">
            things i do in my free time.
          </p>
        </header>
        <div className="hobbies-animation-container">
          <HobbiesAnimation />
        </div>
      </section>

      <main className="hobbies-container">
        <div className="hobby animate-in animate-in-delay-2">
          <h2>🎾 tennis</h2>
          <p>
            i started playing junior year of college and i love it. working on
            improving my backhand, serve, and footwork
          </p>
        </div>
        <div className="hobby animate-in animate-in-delay-3">
          <h2>🏀 basketball</h2>
          <p>
            catch me at greg gym or the san jac courts cooking up randoms. some
            say i&apos;m indistinguishable from steph curry
          </p>
        </div>
        <Link href="/movies" className="hobby-link animate-in animate-in-delay-4">
          <div className="hobby">
            <h2>🎬 movies</h2>
            <p>
              i&apos;ve become an avid movie watcher (dare I say connoisseur) of
              cinema since sophomore year. check out my favorite watches!
            </p>
          </div>
        </Link>
        <Link href="/travel" className="hobby-link animate-in animate-in-delay-5">
          <div className="hobby">
            <h2>✈️ travel</h2>
            <p>
              i love to travel and have been fortunate to have visited many
              places around the world. see some recent travel pics here!
            </p>
          </div>
        </Link>
        <div className="hobby animate-in animate-in-delay-6">
          <h2>🎧 music</h2>
          <p>
            i love listening to music and playing instruments. i also learned
            how to play the harmonium and keyboard in high school!
          </p>
        </div>
      </main>
    </>
  );
}

