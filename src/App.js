

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
