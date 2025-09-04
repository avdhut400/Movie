
// import React, { useState } from "react";
// import Navbar from "./compnents/Navbar";
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Movie from "./compnents/Movie"; // Capitalized!
// import Watchlist from "./compnents/watchlist";
// import Banner from "./compnents/Banner";
// function App() {
//   let [watchlist,setWatchlist]=useState([])

//   let handleWatchlist=(movieObj)=>{
//     let newWatchlist=[...watchlist,movieObj]
//     setWatchlist(newWatchlist)
//     console.log(newWatchlist)

//   }
//   let handleRemove=(movieObj)=>{
//     let filterdWatchlist =watchlist.filter((Movie)=>{
//       return Movie.id!=movieObj.id
//     })
//     setWatchlist(filterdWatchlist)

//   }
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<><Banner/> <Movie watchlist={watchlist} handleWatchlist={handleWatchlist} handleRemove={handleRemove}/></>}/>
//           <Route path="/watchlist" element={<Watchlist />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;













// import React, { useState } from "react";
// import Navbar from "./compnents/Navbar";
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Movie from "./compnents/Movie";
// import Watchlist from "./compnents/watchlist";
// import Banner from "./compnents/Banner";

// function App() {
//   let [watchlist, setWatchlist] = useState([]);
//   console.log(Array.isArray(watchlist));
//   let handleWatchlist = (movieObj) => {
//     // Prevent duplicates
//     if (!watchlist.some(movie => movie.id === movieObj.id)) {
//       let newWatchlist = [...watchlist, movieObj];
//       setWatchlist(newWatchlist);
//       console.log("Watchlist updated:", newWatchlist);
//     }
//   };

//   // let handleRemove = (movieObj) => {
//   //   let filteredWatchlist = watchlist.filter((movie) =>{
//   //     return movie.id != movieObj.id;
//   //   });
//   //   setWatchlist(filteredWatchlist);
//   //   console.log("Movie removed:", movieObj);
//   // };
//   let handleRemove = (movieObj) => {
//   console.log("Trying to remove:", movieObj);
//   console.log("Before remove:", watchlist);

//   let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
  
//   console.log("After remove:", filteredWatchlist);
//   setWatchlist(filteredWatchlist);
// };

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={
//           <>
//             <Banner />
//             <Movie 
//               watchlist={watchlist} 
//               handleWatchlist={handleWatchlist} 
//               handleRemove={handleRemove} 
//             />
//           </>
//         }/>
//         <Route path="/watchlist" element={
//           <Watchlist watchlist={watchlist}
            
//           />
//         }/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;








import React, { useState, useEffect } from "react";
import Navbar from "./compnents/Navbar";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./compnents/Movie";
import Watchlist from "./compnents/watchlist";
import Banner from "./compnents/Banner";

function App() {
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const handleWatchlist = (movieObj) => {
    if (!watchlist.some(movie => movie.id === movieObj.id)) {
      let newWatchlist = [...watchlist, movieObj];
      setWatchlist(newWatchlist);
      console.log("Watchlist updated:", newWatchlist);
    }
  };

  const handleRemove = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => movie.id !== movieObj.id);
    setWatchlist(filteredWatchlist);
    console.log("Movie removed:", movieObj);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Movie 
              watchlist={watchlist} 
              handleWatchlist={handleWatchlist} 
              handleRemove={handleRemove} 
            />
          </>
        }/>
        <Route path="/watchlist" element={
          <Watchlist 
            watchlist={watchlist}
            handleRemove={handleRemove}
            setWatchlist={setWatchlist}
          />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
