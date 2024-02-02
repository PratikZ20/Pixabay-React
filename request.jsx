export const API_KEY="a03ec0f90ff0a11265e25bd618a5d76b"

const request ={
    fetchTrending:`/trending/movie/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv/?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchingActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchingHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchingComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchingRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchingDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request



// https://api.themoviedb.org/3/movie/63174/credits?api_key=a03ec0f90ff0a11265e25bd618a5d76b