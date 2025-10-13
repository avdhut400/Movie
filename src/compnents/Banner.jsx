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




// import React from 'react';

// function Banner() {
//   return (
//     <div
//       style={{
//         backgroundImage:
//           "url(https://wallpaperbat.com/img/827180-avengers-endgame-hd-wallpaper-and-background.png)",
//       }}
//       className="relative h-[30vh] md:h-[80vh] bg-cover bg-center flex justify-center items-end"
//     >
//       {/* Gradient overlay for modern effect */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

//       {/* Text container with glassmorphism */}
//       <div className="relative z-10 text-center w-full md:w-2/3 bg-black/40 backdrop-blur-md p-4 rounded-lg shadow-xl">
//         <h1 className="text-white text-xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
//           Avengers Endgame
//         </h1>
//       </div>
//     </div>
//   );
// }

// export default Banner;
