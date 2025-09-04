// import React from 'react'

// function Watchlist({watchlist}) {
    
//   return (
//     <>
//     <div className='flex justify-center flex-wrap m-4'>
//         <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'>
//             Action
//         </div>
//         <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold'>
//             Action
//         </div>
//     </div>
//     <div className='flex justify-center my-4'>
//         <input type="text" className='h-[3rem] w-[18rem] bg-gray-200 outline-none' placeholder='Search Movies px-4'/>
//     </div>
//     <div className='overflow-hidden rounded-lg   border border-gray-200 m-8'>
//         <table className='w-full text-gray-500 text-center'>
//             <thead className='border-b-2'>
//                 <tr>
//                     <th>Name</th>
//                     <th>Ratings</th>
//                     <th>Popularity</th>
//                     <th>genre</th>
//                 </tr>
//             </thead>
//             <tbody>

//                 {Array.isArray(watchlist) && watchlist.map((moviObj)=>{
//                     return (
                        
//                 <tr key={moviObj.id}>
//                     <td className='flex items-center px-6 py-4'>
//                         <img src={`https://image.tmdb.org/t/p/original/${moviObj.poster_path}`} alt="r"  className='h-[6rem]'/>
//                         <div className='mx-10'>{moviObj.title}</div>
//                     </td>
//                     <td>{moviObj.vote_average}</td>
//                     <td>{moviObj.popularity}</td>
//                     <td>Action</td>
//                     <td className='text-red-800'>Delete</td>
//                 </tr>
//                     )
//                 })}



// {/* 
//                 <tr>
//                     <td className='flex items-center px-6 py-4'>
//                         <img src="https://nerdnewssocial.com/wp-content/uploads/2021/09/shang-chi.jpg" alt="r"  className='h-[6rem]'/>
//                         <div className='mx-10'>the matrix</div>
//                     </td>
//                     <td>8.5</td>
//                     <td>9</td>
//                     <td>Action</td>
//                     <td className='text-red-800'>Delete</td>
//                 </tr> */}
//             </tbody>
//         </table>
//     </div>
//     </>
//   )
// }

// export default Watchlist;




// import React, { useState } from 'react';

// function Watchlist({ watchlist, handleRemove,setWatchlist }) {
//   const [search, setSearch] = useState('');

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const filteredWatchlist = Array.isArray(watchlist)
//     ? watchlist.filter((movieObj) =>
//         movieObj.title.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];
//     let sortIncresing =()=>{
//         watchlist.sort((moviA,movieB)=>{
//             return moviA.vote_average-movieB.vote_average
//         })
//         setWatchlist([...sortIncresing])
//     }
//     let sortDecreasing =()=>{
//         watchlist.sort((moviA,movieB)=>{
//             return movieB.vote_average - moviA.vote_average
//         })
//         setWatchlist([...sortDecreasing])
//     }
    


//   return (
//     <>
//       <div className='flex justify-center flex-wrap m-4'>
//         <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4'>
//           Action
//         </div>
//         <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold'>
//           Action
//         </div>
//       </div>

//       <div className='flex justify-center my-4'>
//         <input
//           type='text'
//           onChange={handleSearch}
//           value={search}
//           className='h-[3rem] w-[18rem] bg-gray-200 outline-none px-4'
//           placeholder='Search Movies'
//         />
//       </div>

//       <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
//         <table className='w-full text-gray-500 text-center'>
//           <thead className='border-b-2'>
//             <tr>
//               <th >Name</th>
//               <th className='flex justify-center '>
//                 <div  onClick={sortIncresing} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
//                 <div className='p*2'>Ratings/</div>
//                 <div onClick={ sortDecreasing} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
//               </th>
//               <th>Popularity</th>
//               <th>Genre</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredWatchlist.map((movieObj) => (
//               <tr key={movieObj.id}>
//                 <td className='flex items-center px-6 py-4'>
//                   <img
//                     src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
//                     alt={movieObj.title}
//                     className='h-[6rem]'
//                   />
//                   <div className='mx-10'>{movieObj.title}</div>
//                 </td>
//                 <td>{movieObj.vote_average}</td>
//                 <td>{movieObj.popularity}</td>
//                 <td>Action</td>
//                 <td
//                   className='text-red-800 cursor-pointer'
//                   onClick={() => handleRemove(movieObj)}
//                 >
//                   Delete
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Watchlist;





// import genreIds from "../utility/gener";
// import React, { useState } from "react";

// function Watchlist({ watchlist, handleRemove, setWatchlist }) {
//   const [search, setSearch] = useState("");

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   const sortIncreasing = () => {
//     const sorted = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
//     setWatchlist(sorted);
//   };

//   const sortDecreasing = () => {
//     const sorted = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
//     setWatchlist(sorted);
//   };

//   const filtered = watchlist.filter((movie) =>
//     movie.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <div className="flex justify-center my-4">
//         <input
//           type="text"
//           onChange={handleSearch}
//           value={search}
//           className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
//           placeholder="Search Movies"
//         />
//       </div>

//       <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
//         <table className="w-full text-gray-500 text-center">
//           <thead className="border-b-2">
//             <tr>
//               <th>Name</th>
//               <th className="flex justify-center items-center gap-2">
//                 <button onClick={sortIncreasing}>⬆️</button>
//                 Ratings
//                 <button onClick={sortDecreasing}>⬇️</button>
//               </th>
//               <th>Popularity</th>
//               <th>Genre</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map((movie) => (
//               <tr key={movie.id}>
//                 <td className="flex items-center px-6 py-4">
//                   <img
//                     src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
//                     alt={movie.title}
//                     className="h-[6rem]"
//                   />
//                   <div className="mx-10">{movie.title}</div>
//                 </td>
//                 <td>{movie.vote_average}</td>
//                 <td>{movie.popularity}</td>
//                 <td>
//                   {
                   
//                     genreIds[movie.genre_ids[0]]
                      
//                   }
//                 </td>
//                 <td
//                   className="text-red-800 cursor-pointer"
//                   onClick={() => handleRemove(movie)}
//                 >
//                   Delete
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export default Watchlist;






import genreIds from "../utility/gener";
import React, { useState } from "react";

function Watchlist({ watchlist, handleRemove, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortIncreasing = () => {
    const sorted = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(sorted);
  };

  const sortDecreasing = () => {
    const sorted = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(sorted);
  };

  
  const filtered = watchlist.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
    const matchesGenre =
      selectedGenre === "All" || genreIds[movie.genre_ids?.[0]] === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <>
      {/* Genre Filter Buttons */}
      <div className="flex justify-center flex-wrap m-4 gap-2">
        <button
          className={`h-[2.5rem] w-[6rem] rounded-xl font-semibold ${
            selectedGenre === "All" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelectedGenre("All")}
        >
          All
        </button>
        {Object.values(genreIds).map((genre) => (
          <button
            key={genre}
            className={`h-[2.5rem] w-[6rem] rounded-xl font-semibold ${
              selectedGenre === genre ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

     
      <div className="flex justify-center my-4">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
          placeholder="Search Movies"
        />
      </div>

      
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center items-center gap-2">
                <button onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></button>
                Ratings
                <button onClick={sortDecreasing}><i class="fa-solid fa-arrow-down"></i></button>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((movie) => (
              <tr key={movie.id}>
                <td className="flex items-center px-6 py-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className="h-[6rem]"
                  />
                  <div className="mx-10">{movie.title}</div>
                </td>
                <td>{movie.vote_average}</td>
                <td>{movie.popularity}</td>
                <td>{genreIds[movie.genre_ids?.[0]] || "Unknown"}</td>
                <td
                  className="text-red-800 cursor-pointer"
                  onClick={() => handleRemove(movie)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
