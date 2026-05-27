
// import React, { useState, useRef } from 'react';
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// import 'remixicon/fonts/remixicon.css' 

// function App() {
//   const [showContent, setShowContent] = useState(false);
//   const animationRef = useRef(null);

//   useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.to(".vi-mask-group", {
//       rotate: 10,
//       ease: "Power4.inOut",
//       transformOrigin: "50% 50%", 
//       duration: 2,
//     })
//       .to(".vi-mask-group", {
//         scale: 10,
//         duration: 1.8,
//         delay: -1.8,
//         ease: "expo.inOut",
//         transformOrigin: "50% 50%",
//         opacity: 0,
//         onComplete: () => {
//           if (animationRef.current) {
//             animationRef.current.remove();
//           }
//           setShowContent(true);
//         }
//       });
//   }, []);
// useGSAP(()=>{
// const main=document.querySelector(".main ")
// main?.addEventListener("mousemove",function(e){
// const xMove=(e.clientX/window.innerWidth-.5)
// });
// } ,[showContent]);
//   return ( 
//     <>
//       <div
//         ref={animationRef}
//         className="fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black"
//       >
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 800 600"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <defs>
//             <mask id="viMask" maskContentUnits="userSpaceOnUse">
//               <rect width="100%" height="100%" fill="black" />
//               <g className="vi-mask-group" overflow="visible">
//                 <text
//                   x="50%"
//                   y="50%"
//                   fontSize="250"
//                   textAnchor="middle"
//                   fill="white"
//                   dominantBaseline="middle"
//                   fontFamily="Arial Black"
//                 >
//                   VI
//                 </text>
//               </g>
//             </mask>
//           </defs>

//           <image
//             href="/2.png"
//             width="100%"
//             height="100%"
//             preserveAspectRatio="xMidYMid slice"
//             mask="url(#viMask)"
//           />
//         </svg>
//       </div>

//       {showContent && (
//         <div className="main w-full bg-black">
//           <div className="landing w-full h-screen bg-black relative">
//             {/* Navbar */}
//             <div className="Navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex items-center justify-between">
//               <div className="logo flex gap-8.2 flex-col gap-0.2">
//                 <div className="lines flex flex-col gap-1">
//                   <div className="line w-10 h-0.5 bg-white" />
//                   <div className="line w-8 h-0.5 bg-white" />
//                   <div className="line w-6 h-0.5 bg-white" />
//                 </div>
//                 {/* <h1 className=" mt[-6px] text-white text-3xl mt-4">
//                   ROCKSTAR
//                 </h1> */}
//                 <h1 className="  mt[-6px] text-white  text-3xl font-[pricedown]">ROCKSTAR</h1>



//               </div>
//             </div>

//             {/* Images */}
//             <div className="imagesdiv relative overflow-hidden w-full h-screen">
//               <img
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src="./2.png"
//                 alt=""
//               />
//               <img
//                 className="absolute top-0 left-0 w-full h-full object-cover"
//                 src="./2.png"
//                 alt="landing"
//               />

//             <div className="text-white text absolute top-0 left-1/2 flex flex-col gap-12 -translate-x-1/2  ">
//                 <h1 className="text-9xl -ml-30"> grand</h1>
//                 <h1 className="text-9xl -ml-10"> theft</h1>
//                 <h1 className="text-9xl -ml-52">auto</h1>   </div>
//               <img
//                 className=" absolute bottom-[-30%] left-109.5 translate-x-0.5 w-half h-full object-cover scale-[1.1] "
//                 src="./1.png"
//                 alt=""
//               />
             
//               <div className="btmbar text-white absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
//   <div className="flex items-center gap-3">
//     <i className="ri-arrow-down-line text-xl"></i>
//     <h3 className="text-lg font-[Helvetica Neue] tracking-wide">Scroll Down</h3>   </div>
//     <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 content-center  h-[56px] " src="./8.png" alt="Scroll Icon" />

// </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default App;


import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  const animationRef = useRef(null);

  // Intro Animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      opacity: 0,
      duration: 1.8,
      delay: -1.8,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      onComplete: () => {
        animationRef.current?.remove();
        setShowContent(true);
      },
    });
  }, []);

  // Mouse Movement Effect
  useGSAP(() => {
    if (!showContent) return;

    const main = document.querySelector(".main");
    const character = document.querySelector(".character");
    const text = document.querySelector(".hero-text");

    const handleMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 20;

      gsap.to(character, {
        x: xMove,
        y: yMove,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(text, {
        x: xMove * 0.4,
        y: yMove * 0.2,
        duration: 1,
        ease: "power3.out",
      });
    };

    main?.addEventListener("mousemove", handleMove);

    return () => {
      main?.removeEventListener("mousemove", handleMove);
    };
  }, [showContent]);

  return (
    <>
      {/* INTRO SCREEN */}
      <div
        ref={animationRef}
        className="fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="viMask" maskContentUnits="userSpaceOnUse">
              <rect width="100%" height="100%" fill="black" />

              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>

          <image
            href="/2.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {/* MAIN CONTENT */}
      {showContent && (
        <div className="main w-full bg-black overflow-hidden">
          <section className="relative w-full h-screen overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <img
              className="absolute top-0 left-0 w-full h-full object-cover scale-105 blur-[1px]"
              src="./2.png"
              alt=""
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/15 z-[1]"></div>

            {/* NAVBAR */}
            <div className="absolute top-0 left-0 z-[30] w-full px-8 md:px-12 py-8 flex items-center justify-between">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="w-10 h-[2px] bg-white"></div>
                  <div className="w-7 h-[2px] bg-white"></div>
                  <div className="w-5 h-[2px] bg-white"></div>
                </div>

                <h1
                  className="text-white text-3xl md:text-4xl tracking-wide"
                  style={{ fontFamily: "Pricedown" }}
                >
                  ROCKSTAR
                </h1>
              </div>
            </div>

            {/* HERO TEXT */}
            <div className="hero-text absolute top-[7%] left-1/2 -translate-x-1/2 z-[20] flex flex-col items-center leading-[0.82]">
              <h1
                className="text-[5rem] md:text-[8rem] lg:text-[10rem] uppercase text-white tracking-tight"
                style={{
                  fontFamily: "Pricedown",
                  textShadow: "0 4px 30px rgba(0,0,0,0.45)",
                }}
              >
                GRAND
              </h1>

              <h1
                className="text-[5rem] md:text-[8rem] lg:text-[10rem] uppercase text-white -mt-3"
                style={{
                  fontFamily: "Pricedown",
                  textShadow: "0 4px 30px rgba(0,0,0,0.45)",
                }}
              >
                THEFT
              </h1>

              <div className="flex items-end gap-2 -mt-3">
                <h1
                  className="text-[5rem] md:text-[8rem] lg:text-[10rem] uppercase text-white"
                  style={{
                    fontFamily: "Pricedown",
                    textShadow: "0 4px 30px rgba(0,0,0,0.45)",
                  }}
                >
                  AUTO
                </h1>

                <h1
                  className="text-[4rem] md:text-[6rem] lg:text-[7rem] mb-2 md:mb-4 text-pink-500"
                  style={{
                    fontFamily: "Pricedown",
                    textShadow: "0 0 25px rgba(236,72,153,0.9)",
                  }}
                >
                  VI
                </h1>
              </div>
            </div>

            {/* CHARACTER IMAGE */}
            <img
              className="character absolute bottom-0 right-[-3%] h-[88%] md:h-[92%] object-contain z-[10]"
              src="./1.png"
              alt="character"
            />

            {/* BOTTOM BAR */}
            <div className="absolute bottom-0 left-0 w-full px-8 md:px-10 py-6 bg-gradient-to-t from-black/80 to-transparent z-[30]">
              <div className="flex items-center gap-3 text-white">
                <i className="ri-arrow-down-line text-2xl"></i>

                <h3 className="text-sm md:text-lg tracking-wide font-light">
                  Scroll Down
                </h3>
              </div>

              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[40px] md:h-[56px]"
                src="./8.png"
                alt="logo"
              />
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;

