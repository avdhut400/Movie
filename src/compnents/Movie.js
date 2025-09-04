// import React, { useEffect, useState } from 'react'
// import MovieCard from './MovieCard';
// import axios from 'axios';
// import Pegination from './Pegination';
// function Movie() {
//     const [movies,setMovies]=useState([]);
//     const [pageNo,setPageNo]=useState(1)
//     useEffect(()=>{
//         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=10ea5193e7b34adcbd5823dd8c8e29cb&language=en-US&page=2`).then( (res)=>{
//             setMovies(res.data.results)
//         })
        
//     },[])
//     const handlePrev=()=>{
//         if(pageNo==1){
//             setPageNo(1)
//         }
//         setPageNo(pageNo-1)
//     }
//     const handleNext=()=>{
    
//         setPageNo(pageNo+1)
//     }

//   return (
//     <div className='p-5'>
//         <div className='text-2xl m-5 font-bold text-center'>
//             Trending Movies
//         </div>
//         <div className='flex flex-row flex-wrap justify-around gap-8'>
//             {movies.map((movieObj)=>{
//                 return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
//             })}
            
//         </div>
//         <Pegination handleNext={handleNext} handlePrev={handlePrev}/>
        
//     </div>
//   )
// }

// export default Movie;

// //https://api.themoviedb.org/3/movie/popular?api_key=10ea5193e7b34adcbd5823dd8c8e29cb&language=en-US&page=2



import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pegination';

function Movie({handleWatchlist,handleRemove,watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=10ea5193e7b34adcbd5823dd8c8e29cb&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]); 
  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    setPageNo((prev) => prev + 1);
  };

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>Trending Movies</div>

      <div className='flex flex-row flex-wrap justify-around gap-8'>
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

      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        currentPage={pageNo} 
      />
    </div>
  );
}

export default Movie;
