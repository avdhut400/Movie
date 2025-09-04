// import React from 'react'

// function MovieCard() {
//   return (
//     <div style={{backgroundImage:"url(https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_0e557717-f9ae-4d45-82c3-27e08c2a9eeb.jpg?v=1579504984)" }} className='h-[40vh] w-[200px] bg-cover rounded-xl hover: scale-110 duration-300 hover:cursor-pointer '>

//     </div>
//   )
// }

// export default MovieCard




// import React from 'react';

// function MovieCard({poster_path,name,handleWatchlist,movieObj,handleRemove,Watchlist}) {
  
//   function doescontain(movieObj){
//     for(let i=0 ;i<Array.isArray(Watchlist).length;i++){
//       if(Array.isArray(Watchlist[i]).id===movieObj.id){
//         return true
//       }
//     }
//     return false
//   }
//   return (
//     <div
//       style={{
//         backgroundImage:
//           `url(https://image.tmdb.org/t/p/original/${poster_path})`,
//       }}
//       className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 cursor-pointer shadow-lg flex flex-col justify-between items-end"
//     >
//       {doescontain(movieObj)? (
//         <div onClick={()=>(handleRemove(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center '>&#10060;</div>
//       ):(

//       <div onClick={()=>(handleWatchlist(movieObj))} className='m-4 flex justify-center h-8 w-8 items-center '>
//         &#128525;
//       </div>
//       )}
//         <div className='text-white text-xl w-full p-2 text-center bg-grey-900/60'>
//             {name}
//         </div>
//     </div>
//   );
// }

// export default MovieCard;

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
