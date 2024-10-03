import React from "react";
import MovieList from "./MoveiList";

function MainContent() {
  const trendingMovies = [
    {
      title: "Stranger Things",
      imageUrl:
        "https://images.hdqwalls.com/wallpapers/stranger-things-season-3-l7.jpg",
    },
    {
      title: "The Crown",
      imageUrl:
        "https://www.flickeringmyth.com/wp-content/uploads/2022/10/TheCrown_S05_Image_10.jpg",
    },
    {
      title: "Money Heist",
      imageUrl: "https://wallpapercave.com/wp/wp5074920.jpg",
    },

    {
      title: "Lucifer",
      imageUrl:
        "https://www.binged.com/wp-content/uploads/2020/07/Lucifer-Web-Series-Netflix-Online-1.jpg",
    },
    {
      title: "Lust in space",
      imageUrl: "https://wallpaperaccess.com/full/2108718.jpg",
    },
  ];
  const popularMovies = [
    {
      title: "Spirited Away",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      title: "The Lion King",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
    },
    {
      title: "My Neighbor Totoro",
      imageUrl:
        " https://thecollegiatelive.com/wp-content/uploads/2018/02/59.png",
    },
    {
      title: "Toy Story",
      imageUrl:
        " https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      title: "Finding Nemo",
      imageUrl:
        "https://cdna.artstation.com/p/assets/images/images/026/044/684/large/christoph-reischutz-all9.jpg?1587714831",
    },
    // Add more movies as needed
  ];
  const actionMovies = [
    {
      title: "Akira",
      imageUrl: "https://wallpaperaccess.com/full/253297.jpg",
    },
    {
      title: "Ninja Scroll",
      imageUrl: "https://i.ytimg.com/vi/U4H32pFc-Qk/maxresdefault.jpg",
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      imageUrl: "https://wallpaperaccess.com/full/5651517.jpg",
    },
    {
      title: "Ghost in the Shell ",
      imageUrl: "https://wallpaperaccess.com/full/4004080.jpg",
    },
    {
      title: "The Adventures of Tintin",
      imageUrl:
        "https://1.bp.blogspot.com/-rwKh1l7QuIw/Uk3m-N3DtII/AAAAAAAAAME/MxvyPmUuZX4/s1600/The+Adventures+of+Tin+Tin+2.jpg",
    },
  ];
  const horrorMovie = [
    {
      title: "The Spine of Night",
      imageUrl: "https://i.ytimg.com/vi/5WOgieXG9ZU/maxresdefault.jpg",
    },
    {
      title: "Mad God",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNDMyM2IyNmMtYmQ3Ny00NmZlLTg3OGMtMDNiYjE2MmQ4ZmQzXkEyXkFqcGdeQXVyNzgxMzc3OTc@._V1_FMjpg_UX1024_.jpg",
    },
    {
      title: "The Night Is Short, Walk on Girl",
      imageUrl:
        "https://www.themoviedb.org/t/p/w500_and_h282_face/3j5dZIR2sJs5SnzI7haAGJqnkHJ.jpg",
    },
    {
      title: "Devilman Crybaby",
      imageUrl:
        "https://i1.wp.com/maroonersrock.com/wp-content/uploads/2018/02/devilman-crybaby3.jpg",
    },
    {
      title: "Parasyte",
      imageUrl: "https://wallpapercave.com/wp/wp4140770.jpg",
    },
  ];
  return (
    <main className="netflix-main">
      <div className="hero-section">
        <h1>
          shows, anime, award-winning Netflix originals and more. Watch as much
          as you want, anytime you want.
        </h1>
        <button className="join-now-main">Join now</button>
      </div>

      <section className="content-row">
        <h2 className="content-row-heading">Trending Now</h2>
        <div className="movie-list">
          <MovieList movies={trendingMovies} />
        {/* dono compoent ke data ko pass karnekelia ham props use karte hei props hamesa object hota hei */}
        </div>
      </section>

      {/* <section className="content-row">
        <h2 className="content-row-heading">PopularMovies</h2>
        <div className="movie-list">
          <MovieList movies={popularMovies} />
        </div>
      </section>
      <section className="content-row">
        <h2 className="content-row-heading">ActionMovies</h2>
        <div className="movie-list">
          <MovieList movies={actionMovies} />
        </div>
      </section>
      <section className="content-row">
        <h2 className="content-row-heading">HorrorMovie</h2>
        <div className="movie-list">
          <MovieList movies={horrorMovie} />
        </div>
      </section> */}
    </main>
  );
}

export default MainContent;
