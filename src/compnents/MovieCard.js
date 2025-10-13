
import React from 'react';

function MovieCard({ poster_path, name, handleWatchlist, movieObj, handleRemove, watchlist }) {

  function doescontain(movieObj) {
  if (!Array.isArray(watchlist)) return false;

  for (let i = 0; i < watchlist.length; i++) {
    if (watchlist[i].id === movieObj.id) {
      return true;
    }
  }
  return false;
}
console.log('Watchlist:', watchlist); 



  return (
    <div
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 cursor-pointer shadow-lg flex flex-col justify-between items-end"
    >
      {doescontain(movieObj) ? (
        <div onClick={() => handleRemove(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center'>
          <i class="fa-solid fa-xmark"></i>
        </div>
      ) : (
        <div onClick={() => handleWatchlist(movieObj)} className='m-4 flex justify-center h-8 w-8 items-center'>
          <i class="fa-solid fa-heart"></i>
        </div>
      )}
      <div className='text-white text-xl w-full p-2 text-center bg-grey-900/60'>
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
