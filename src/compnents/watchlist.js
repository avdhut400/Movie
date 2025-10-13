
// import genreIds from "../utility/gener";
// import React, { useState } from "react";

// function Watchlist({ watchlist, handleRemove, setWatchlist }) {
//   const [search, setSearch] = useState("");
//   const [selectedGenre, setSelectedGenre] = useState("All");

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

  
//   const filtered = watchlist.filter((movie) => {
//     const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
//     const matchesGenre =
//       selectedGenre === "All" || genreIds[movie.genre_ids?.[0]] === selectedGenre;
//     return matchesSearch && matchesGenre;
//   });

//   return (
//     <>
//       {/* Genre Filter Buttons */}
//       <div className="flex justify-center flex-wrap m-4 gap-2">
//         <button
//           className={`h-[2.5rem] w-[6rem] rounded-xl font-semibold ${
//             selectedGenre === "All" ? "bg-blue-500 text-white" : "bg-gray-300"
//           }`}
//           onClick={() => setSelectedGenre("All")}
//         >
//           All
//         </button>
//         {Object.values(genreIds).map((genre) => (
//           <button
//             key={genre}
//             className={`h-[2.5rem] w-[6rem] rounded-xl font-semibold ${
//               selectedGenre === genre ? "bg-blue-500 text-white" : "bg-gray-300"
//             }`}
//             onClick={() => setSelectedGenre(genre)}
//           >
//             {genre}
//           </button>
//         ))}
//       </div>

     
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
//                 <button onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></button>
//                 Ratings
//                 <button onClick={sortDecreasing}><i class="fa-solid fa-arrow-down"></i></button>
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
//                 <td>{genreIds[movie.genre_ids?.[0]] || "Unknown"}</td>
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
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (e) => setSearch(e.target.value);

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
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen p-6 transition-colors duration-500`}>
      
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
            darkMode ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-white"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Genre Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-3 mb-6">
        <button
          className={`h-[2.5rem] w-[6rem] rounded-xl font-semibold transition-all duration-300 ${
            selectedGenre === "All"
              ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg"
              : darkMode
              ? "bg-gray-700 text-white hover:bg-purple-500 hover:text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-purple-500 hover:text-white shadow-md"
          }`}
          onClick={() => setSelectedGenre("All")}
        >
          All
        </button>
        {Object.values(genreIds).map((genre) => (
          <button
            key={genre}
            className={`h-[2.5rem] w-[6rem] rounded-xl font-semibold transition-all duration-300 ${
              selectedGenre === genre
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg"
                : darkMode
                ? "bg-gray-700 text-white hover:bg-purple-500 hover:text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-purple-500 hover:text-white shadow-md"
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search Movies"
          className={`h-[3rem] w-[18rem] px-4 rounded-lg border shadow-md focus:outline-none focus:ring-2 transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-600 text-white focus:ring-purple-400 placeholder-gray-400"
              : "bg-white border-gray-300 text-gray-900 focus:ring-purple-400 placeholder-gray-500"
          }`}
        />
      </div>

      {/* Table */}
      <div className={`overflow-hidden rounded-2xl border shadow-lg m-8 transition-colors duration-500 ${darkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}>
        <table className="w-full text-center">
          <thead className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-50 text-gray-700"} border-b-2`}>
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="flex justify-center items-center gap-2 py-3">
                <button onClick={sortIncreasing} className="hover:text-blue-400">
                  <i className="fa-solid fa-arrow-up"></i>
                </button>
                Ratings
                <button onClick={sortDecreasing} className="hover:text-blue-400">
                  <i className="fa-solid fa-arrow-down"></i>
                </button>
              </th>
              <th className="py-3">Popularity</th>
              <th className="py-3">Genre</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((movie) => (
              <tr key={movie.id} className="transition-all duration-300 hover:bg-purple-50 dark:hover:bg-gray-700">
                <td className="flex items-center px-6 py-4 gap-4">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className="h-[6rem] rounded-lg shadow-md"
                  />
                  <span className="font-semibold">{movie.title}</span>
                </td>
                <td>{movie.vote_average}</td>
                <td>{Math.round(movie.popularity)}</td>
                <td>{genreIds[movie.genre_ids?.[0]] || "Unknown"}</td>
                <td>
                  <button
                    onClick={() => handleRemove(movie)}
                    className="text-red-600 font-semibold hover:text-red-800 transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="py-6 text-gray-400 font-medium">
                  No movies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Watchlist;
