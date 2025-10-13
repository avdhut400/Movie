
// import React, { useEffect, useState } from 'react';
// import MovieCard from './MovieCard';
// import axios from 'axios';
// import Pagination from './Pegination';

// console.log("API Key is:", process.env.API_KEY);
// function Movie({handleWatchlist,handleRemove,watchlist}) {
//   const [movies, setMovies] = useState([]);
//   const [pageNo, setPageNo] = useState(1);

//   useEffect(() => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=&language=en-US&page=${pageNo}`
//       )
//       .then((res) => {
//         setMovies(res.data.results);
//       });
//   }, [pageNo]); 
//   const handlePrev = () => {
//     if (pageNo > 1) {
//       setPageNo((prev) => prev - 1);
//     }
//   };

//   const handleNext = () => {
//     setPageNo((prev) => prev + 1);
//   };

//   return (
//     <div className='p-5'>
//       <div className='text-2xl m-5 font-bold text-center'>Trending Movies</div>

//       <div className='flex flex-row flex-wrap justify-around gap-8'>
//         {movies.map((movieObj) => (
//           <MovieCard
//             key={movieObj.id}
//             poster_path={movieObj.poster_path}
//             name={movieObj.original_title}
//             handleWatchlist={handleWatchlist}
//             movieObj={movieObj}
//             handleRemove={handleRemove}
//             watchlist={watchlist}
//           />
//         ))}
//       </div>

//       <Pagination
//         handleNext={handleNext}
//         handlePrev={handlePrev}
//         currentPage={pageNo} 
//       />
//     </div>
//   );
// }

// export default Movie;



import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pegination';

function Movie({ handleWatchlist, handleRemove, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;
  console.log("API Key from env:", API_KEY);



  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, [pageNo]);

  const handlePrev = () => pageNo > 1 && setPageNo((prev) => prev - 1);
  const handleNext = () => setPageNo((prev) => prev + 1);

  return (
    <div
      className={`min-h-screen p-5 transition-colors duration-500 ${
        darkMode
          ? 'bg-gray-50 text-gray-800'
          : 'bg-black text-gray-900'
      }`}
    >
    
      <div className="flex justify-end mb-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md border ${
            darkMode
              ? 'border-gray-300 hover:bg-gray-200'
              : 'border-gray-400 hover:bg-gray-100'
          } transition`}
        >
          {darkMode ? 'Light Feel' : 'Softer Light'}
        </button>
      </div>

      
      <h1 className="text-3xl font-bold text-center mb-8">
        Trending Movies
      </h1>

      
      <div className="flex flex-wrap justify-around gap-8">
        {movies.map((movieObj) => (
          <MovieCard
            key={movieObj.id}
            poster_path={movieObj.poster_path}
            name={movieObj.original_title}
            handleWatchlist={handleWatchlist}
            movieObj={movieObj}
            handleRemove={handleRemove}
            watchlist={watchlist}
          />
        ))}
      </div>

      
      <div className="mt-10 flex justify-center">
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={pageNo}
        />
      </div>
    </div>
  );
}

export default Movie;
