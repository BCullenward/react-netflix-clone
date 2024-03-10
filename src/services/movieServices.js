const key = import.meta.env.VITE_TMDB_KEY;

const baseUrl = "https://api.themoviedb.org/3";
const backdropPath = "https://image.tmdb.org/t/p";

const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=1`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=true`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}`,
};

const mediaListRow = [
  {
    rowId: 1,
    rowName: "Popular Movies",
    rowLink: `${baseUrl}/movie/popular?api_key=${key}`,
  },
  {
    rowId: 2,
    rowName: "Top Rated Movies",
    rowLink: `${baseUrl}/movie/top_rated?api_key=${key}`,
  },
  {
    rowId: 3,
    rowName: "Trending Movies",
    rowLink: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=1`,
  },
  {
    rowId: 4,
    rowName: "Comedy Movies",
    rowLink: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=true`,
  },
  {
    rowId: 5,
    rowName: "Upcoming Movies",
    rowLink: `${baseUrl}/movie/upcoming?api_key=${key}`,
  },
];

export function createImageUrl(filename, size) {
  return `${backdropPath}/${size}/${filename}`;
}

//export default endpoints;
export default mediaListRow;
