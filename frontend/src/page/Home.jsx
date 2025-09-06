

// import { useEffect, useState } from "react";

// function Home() {
//   const fullText = "Web-developer & Mobile Developer";
//   const [displayedText, setDisplayedText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         setDisplayedText(fullText.slice(0, index + 1));
//         setIndex(index + 1);
//       } else {
//         setDisplayedText(fullText.slice(0, index - 1));
//         setIndex(index - 1);
//       }

//       if (index === fullText.length) {
//         setIsDeleting(true);
//       } else if (index === 0) {
//         setIsDeleting(false);
//       }
//     }, 150);

//     return () => clearTimeout(timeout);
//   }, [index, isDeleting, fullText]);

//   return (
//     <div className="relative h-screen w-full">
//       {/* Background Image with Gradient Overlay */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?_gl=1*11s2nrt*_ga*MTkyMjk5MzMzMy4xNzQ3NjkzMTQ2*_ga_8JE65Q40S6*czE3NTcwMDg3NjQkbzk4JGcxJHQxNzU3MDA4ODM4JGo2MCRsMCRoMA.."
//           alt="background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
//       </div>

//       {/* Text Content */}
//       <div className="relative -mt-20 z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
//         <h1 className="text-4xl font-bold">Muscab Hassan</h1>
//         <p className="mt-4 text-lg max-w-xl flex gap-1 h-8">
//           {displayedText.split("").map((char, idx) => (
//             <span
//               key={idx}
//               className="inline-block animate-bounce"
//               style={{ animationDelay: `${idx * 0.1}s` }}
//             >
//               {char}
//             </span>
//           ))}
//         </p>

//         {/* Profile Info Section */}
//         <div className="mt-10 flex ml-10 flex-col md:flex-row gap-6 text-left">
//           <div className="space-y-2 font-semibold min-w-[100px]">
//             <h1>Age:</h1>
//             <h1>Address:</h1>
//             <h1>Email:</h1>
//             <h1>Phone:</h1>
//             <h1>Freelance:</h1>
//           </div>
//           <div className="space-y-2 text-gray-300">
//             <p>20</p>
//             <p>Karan</p>
//             <p>muscabhassan10@gmail.com</p>
//             <p>619150294</p>
//             <p>Available</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const fullText = "Web-developer & Mobile Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      }

      if (index === fullText.length) {
        setIsDeleting(true);
      } else if (index === 0) {
        setIsDeleting(false);
      }
    }, 150);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <div className="relative h-screen sm:-ml-0 mt-16 sm:mt-0  -ml-10   w-full">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
          Muscab Hassan
        </h1>

        <p className="mt-6 text-xl md:text-2xl max-w-2xl flex gap-1 h-10">
          {displayedText.split("").map((char, idx) => (
            <span
              key={idx}
              className="inline-block animate-bounce"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              {char}
            </span>
          ))}
        </p>

        {/* Profile Info Section */}
        <div className="mt-12 flex flex-col md:flex-row gap-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
          <div className="space-y-2 font-semibold min-w-[120px] text-left">
            <h1>Age:</h1>
            <h1>Address:</h1>
            <h1>Email:</h1>
            <h1>Phone:</h1>
            <h1>Freelance:</h1>
          </div>
          <div className="space-y-2 text-gray-200 text-left">
            <p>20</p>
            <p>Karan</p>
            <p className="hover:text-blue-400 transition">
              muscabhassan10@gmail.com
            </p>
            <p>619150294</p>
            <p className="text-green-400 font-semibold">Available</p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex gap-6">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg font-semibold hover:scale-105 transition">
            Hire Me
          </button>
          <Link to= "/Project" ><button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
            View Portfolio
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
