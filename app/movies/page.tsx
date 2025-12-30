import Navigation from "../components/Navigation";

const navItems = [
  { href: "/", emoji: "🏠", label: "home" },
  { href: "/hobbies", emoji: "🎯", label: "hobbies" },
];

const favoriteMovies = [
  {
    title: "the prestige",
    year: "2006",
    genre: "thriller/drama",
    description: "favorite movie of all time!",
  },
  {
    title: "the dark knight",
    year: "2008",
    genre: "action/crime",
    description: "the best superhero movie i've seen",
  },
  {
    title: "arrival",
    year: "2016",
    genre: "sci-fi",
    description:
      "a recent watch, but an amazing movie! still can't get over the soundtrack.",
  },
];

export default function Movies() {
  return (
    <>
      <Navigation items={navItems} />

      <section className="hero">
        <header className="container">
          <h1 className="animate-in">movies</h1>
          <p className="tagline animate-in animate-in-delay-1">
            my favorite films + ones i want to see.
          </p>
        </header>
      </section>

      <main className="movies-container">
        <section className="movies-section animate-in animate-in-delay-2">
          <h2>🎬 my favorites</h2>
          <p>in no particular order :)</p>
          <div className="movie-grid">
            {favoriteMovies.map((movie) => (
              <div key={movie.title} className="movie-card">
                <h3>{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-genre">{movie.genre}</p>
                <p className="movie-description">{movie.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="movies-section animate-in animate-in-delay-3">
          <h2>📝 watchlist</h2>
          <p>coming soon...</p>
          <div className="movie-grid"></div>
        </section>
      </main>
    </>
  );
}

