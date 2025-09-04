import React from 'react';

function Banner() {
  return (
    <>
    <div
      style={{
        backgroundImage:
          "url(https://wallpaperbat.com/img/827180-avengers-endgame-hd-wallpaper-and-background.png)",
      }}
      className="h-[30vh] md:h-[80vh] bg-cover bg-center flex justify-center items-end"
    >
      <div className="text-white text-1xl text-center w-full bg-gray-900/60  p-4 mt-[4px] rounded-lg font-bold shadow-lg">
        Avengers Endgame
      </div>
    </div>
        
    </>
  );
}

export default Banner;
