const movies = [
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "1998",
    imdbID: "tt0118661",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers: Earth's Mightiest Heroes",
    Year: "2010–2012",
    imdbID: "tt1626038",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
  },
  {
    Title: "Ultimate Avengers",
    Year: "2006",
    imdbID: "tt0491703",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDFmZTkxMjktMzRiYS00YzMwLWFhZDctOTQ2N2NlOTAyZDJhXkEyXkFqcGdeQXVyNjgzNDU2ODI@._V1_SX300.jpg"
  },
  {
    Title: "Ultimate Avengers II",
    Year: "2006",
    imdbID: "tt0803093",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Avengers Assemble",
    Year: "2013–",
    imdbID: "tt2455546",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
  },
  {
    Title: "The ABC Murders",
    Year: "2018–",
    imdbID: "tt8463714",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
  },
  {
    Title: "ABC Africa",
    Year: "2001",
    imdbID: "tt0281534",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTU5ODc1ODc2Ml5BMl5BanBnXkFtZTcwMzEyOTgyMQ@@._V1_SX300.jpg"
  },
  {
    Title: "ABC Afterschool Specials",
    Year: "1972–1997",
    imdbID: "tt0202179",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY2MmRiZjQtM2MyMC00MDViLThhMjUtYzZiN2JkYzA4NDE5XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_SX300.jpg"
  },
  {
    Title: "ABC News Nightline",
    Year: "1980–",
    imdbID: "tt0154053",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODUyMGZlY2UtMjM3Ny00YjQwLTgwYTYtNzAwZDBiMTNiN2RjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
  },
  {
    Title: "ABC TGIF",
    Year: "1990–2001",
    imdbID: "tt0312324",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWQ2NTNlMjAtYzJkOS00ODFkLTk5MzQtMjQzZWIyZGQxZGJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjA5MDY1MzM@._V1_SX300.jpg"
  },
  {
    Title: "ABC World News Tonight with David Muir",
    Year: "1953–",
    imdbID: "tt0184090",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDgwMzIyMTM3M15BMl5BanBnXkFtZTcwOTA1MDk2MQ@@._V1_SX300.jpg"
  },
  {
    Title: "ABC Weekend Specials",
    Year: "1977–1995",
    imdbID: "tt0075471",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTdhMGY2NjEtNjNiYy00NGMxLTgxMTEtYzBjMmM5MWNmNWY3XkEyXkFqcGdeQXVyMjgyOTI1ODY@._V1_SX300.jpg"
  },
  {
    Title: "Garotas do ABC",
    Year: "2003",
    imdbID: "tt0327451",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkMTkyMTMtMmU1MC00MDYyLWEwMWUtMDdiYzYwNmI0ZjZiXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg"
  },
  {
    Title: "The ABC of Love and Sex: Australia Style",
    Year: "1978",
    imdbID: "tt0077116",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjQyNzM5ODEtYmU0OC00OTRhLWI1ZTQtNzBkZWQwZjg4MmQzXkEyXkFqcGdeQXVyNjU1MTEwMjI@._V1_SX300.jpg"
  },
  {
    Title: "ABC da Greve",
    Year: "1990",
    imdbID: "tt0317051",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDMxN2FjMjAtNTQ4YS00MWE0LWIzMjktZjc0YTUxOTc5YWFkXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg"
  },
  {
    Title: "JHS: Behind the Seams",
    Year: "2010",
    imdbID: "tt3195602",
    Type: "movie",
    Poster: "N/A"
  },
  {
    Title: "Ra Cha",
    Year: "2012",
    imdbID: "tt2287973",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2ZkZDljNzItZTJjNC00ODczLWFmZTQtMzQ0ZTI0MmUxMTc4XkEyXkFqcGdeQXVyMzI5NzM2ODQ@._V1_SX300.jpg"
  },
  {
    Title: "Cha-cha-chá",
    Year: "1998",
    imdbID: "tt0146547",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTIxODY2OTg3OF5BMl5BanBnXkFtZTcwNzM5MDM0MQ@@._V1_SX300.jpg"
  },
  {
    Title: "Qu mo jing cha",
    Year: "1990",
    imdbID: "tt0098150",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY1MjE4MjUyNF5BMl5BanBnXkFtZTcwNTY1NzYyMQ@@._V1_SX300.jpg"
  },
  {
    Title: "Cha cha cha",
    Year: "2013",
    imdbID: "tt2997896",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzZlMTEzN2EtNGEyNy00YWJlLWFiMDUtMGRkMTIxZjhiZWFkXkEyXkFqcGdeQXVyNjU3ODUxMTc@._V1_SX300.jpg"
  },
  {
    Title: "Cha cha cha",
    Year: "1993–",
    imdbID: "tt0314991",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGNkNWQ5YmMtYWVjYi00YTA3LTg3YjgtMTZhMTBlM2QxYzdmXkEyXkFqcGdeQXVyMjY4MzQzNDk@._V1_SX300.jpg"
  },
  {
    Title: "Cha Cha Cha",
    Year: "1989",
    imdbID: "tt0097035",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEzMTUyNTgwN15BMl5BanBnXkFtZTcwNjM1ODI4MQ@@._V1_SX300.jpg"
  },
  {
    Title: "Pleased to Meet Cha!",
    Year: "1935",
    imdbID: "tt0026871",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWM5NGE3MzEtOTM2Yy00MmI2LTllMzYtZTVlZjY3OGFkYzJkXkEyXkFqcGdeQXVyNDcwNDI2MTk@._V1_SX300.jpg"
  },
  {
    Title: "Cha-Cha",
    Year: "1979",
    imdbID: "tt0078949",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmEyMDE3NjgtYjY4NS00NDY1LWJjMmUtZDFmNDc1MjU1NDllXkEyXkFqcGdeQXVyNzAyMjI3NTI@._V1_SX300.jpg"
  },
  {
    Title: "Cha Cha for Twins",
    Year: "2012",
    imdbID: "tt1534000",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjBjNmVhODAtYzZmOS00YjcxLWEyNGItZjEwMTg2ZWI3N2Q0XkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_SX300.jpg"
  },
  {
    Title: "Nee Ko Nja Cha",
    Year: "2013",
    imdbID: "tt2631098",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTZhYThlMzEtZGViNy00M2YzLWE0YTEtMzA2OTMwNzRhODlhXkEyXkFqcGdeQXVyNjQ5NTA2ODE@._V1_SX300.jpg"
  }
];

const movieListRow = document.querySelector(".movie-list-container > .row");

function movieItemFactory(movie) {
  const { Title, Year, Poster } = movie;
  const maxChars = 25;
  return `
    <div class="movie-item col-3 d-flex justify-content-between flex-column mb-2"
    style="height: 300px">
        <div class="title">
            ${
              Title.length > maxChars ? Title.slice(0, maxChars) + "..." : Title
            }
        </div>
        <div class="poster" style="overflow: hidden;">
            <img src="${Poster == 'N/A' ? 'https://media.comicbook.com/files/img/default-movie.png' : Poster}" alt="movie poster" class="w-100">
        </div>
        <div class="year text-center mt-2">
            <b>(${Year})</b>
        </div>
    </div>
    `;
}
const moviesTemplate = movies.map(movie => movieItemFactory(movie)).join("");
movieListRow.innerHTML = moviesTemplate;


const filterInput = document.getElementById('filter-input');
const filterButton = document.querySelector('.filter-button');
let searchTerm;
const filterMovies = (e) => searchTerm = e.target.value;

function doFilter() {
    const result = movies
    .filter((movie) => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map((m) => movieItemFactory(m)).join('');
    movieListRow.innerHTML = result;
}
function doFilterWithEnterKey(e) {
    if (e.keyCode == 13) {
        doFilter();
    }
}
filterInput.addEventListener('input', filterMovies);
filterInput.addEventListener('keydown', doFilterWithEnterKey);
filterButton.addEventListener('click', doFilter);