import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import questions from "./questions";

export default function App() {

  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // EXTRA PAGES
  const [showExtraPage, setShowExtraPage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  // IMAGES
  const images = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
  ];

  // FLOATING HEARTS
  const hearts = Array.from({ length: 20 });

  // CHECK ANSWER
  const handleAnswer = (option) => {

    let updatedScore = score;

    if (option === questions[currentQuestion].answer) {
      updatedScore += 1;
      setScore(updatedScore);
      setPopupMessage("Correct 😭💖");
    } else {
      setPopupMessage("Wrong 😭");
    }

    setShowPopup(true);

    setTimeout(() => {

      setShowPopup(false);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }

    }, 2000);
  };

  // REAL CONFETTI
  useEffect(() => {

    if (showResult && score >= 8) {

      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(() => {

        if (Date.now() > animationEnd) {
          clearInterval(interval);
          return;
        }

        confetti({
          particleCount: 10,
          startVelocity: 40,
          spread: 360,
          ticks: 100,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2,
          },
        });

      }, 250);
    }

  }, [showResult, score]);

  // ================= EXTRA PAGE =================

  if (showExtraPage) {

    // VIDEO PAGE
    if (showVideo) {
      return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">

          {/* BACK BUTTON */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-6 left-6 z-20 bg-white/20 backdrop-blur-lg text-white px-6 py-3 rounded-full text-xl hover:scale-110 transition duration-300"
          >
            ← Back
          </button>

          {/* VIDEO */}
          <video
            controls
            autoPlay
            onEnded={() => {
              setShowVideo(false);
            }}
            className="w-full h-screen object-contain"
          >
            <source src="/video/love.mp4" type="video/mp4" />
          </video>

        </div>
      );
    }

    // GALLERY PAGE
    if (showGallery) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-pink-200 to-rose-300 flex flex-col items-center justify-center p-10">

          <h1 className="text-5xl font-bold text-red-500 mb-10">
            Beautiful Memories 📸
          </h1>

          <img
            src={images[currentImage]}
            alt=""
            className="w-[450px] h-[650px] object-cover rounded-3xl shadow-2xl border-8 border-white"
          />

          <button
            onClick={() => {

              if (currentImage + 1 < images.length) {
                setCurrentImage(currentImage + 1);
              } else {
                setCurrentImage(0);
                setShowGallery(false);
              }

            }}
            className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 transition duration-300 shadow-2xl"
          >
            Next Memory 💖
          </button>

        </div>
      );
    }

    // LOVE LETTER PAGE
    if (showLetter) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center p-10">

          <div className="bg-white p-14 rounded-[40px] shadow-2xl max-w-3xl text-center rotate-[-2deg] border-4 border-pink-200">

            <h1 className="text-5xl font-bold text-red-500 mb-10">
              My Love Letter 💌
            </h1>

            <p className="text-2xl text-gray-700 leading-loose font-serif italic">

              Hiii Thangoo 💖

              <br /><br />

              Thanks for always being with me 😭💕

              <br /><br />

              Etha past 3 years la naa first day
              unna love pannatha vida,
              ipo every single day um
              unna innum naraya love panren 💖

              <br /><br />

              I will always love you so much 😘

              <br /><br />

              Naraya sanda poturukom...
              Naraya misunderstandings vanthuruku 😭💔

              <br /><br />

              Aana athu elame
              enaku unna innum nalla purinjuka vachiruku 💕

              <br /><br />

              Athu mattum illaama,
              unna mela iruka love ah
              innum increase panniruku 😭✨

              <br /><br />

              Starting la irunthu
              naama long distance love la thaa irukom...

              <br /><br />

              But the distance doesn't matter 💖

              <br /><br />

              Because our love is more than the distance 😭✨

              <br /><br />

              Naa unaku naraya happiness um kuduthuruken...
              kastam um kuduthuruken 😭

              <br /><br />

              But athu elame
              namma love journey la
              oru beautiful part nu thaa paakuren 💕

              <br /><br />

              So ennum unna naraya naraya love pannanum 😘

              <br /><br />

              Naraya memories create pannanum 📸💖

              <br /><br />

              I Love You So Much Daaa
              Kutty Paiyaaa 😭💖

            </p>

          <button
            onClick={() => setShowLetter(false)}
            className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 transition duration-300 shadow-2xl"
          >
            Back 💖
          </button>

        </div>
        </div >
      );
    }

    // MAIN EXTRA PAGE
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-rose-300 to-red-400 flex flex-col items-center justify-center gap-10">

        <h1 className="text-6xl font-bold text-white mb-10">
          Our Forever Memories 💖
        </h1>

        <button
          onClick={() => setShowVideo(true)}
          className="bg-white text-pink-600 px-10 py-5 rounded-full text-3xl font-bold shadow-2xl hover:scale-110 transition duration-300"
        >
          Watch Our Journey 🎥
        </button>

        <button
          onClick={() => setShowGallery(true)}
          className="bg-white text-pink-600 px-10 py-5 rounded-full text-3xl font-bold shadow-2xl hover:scale-110 transition duration-300"
        >
          Beautiful Memories 📸
        </button>

        <button
          onClick={() => setShowLetter(true)}
          className="bg-white text-pink-600 px-10 py-5 rounded-full text-3xl font-bold shadow-2xl hover:scale-110 transition duration-300"
        >
          Love Letter 💌
        </button>

      </div>
    );
  }

  // ================= RESULT PAGE =================

  if (showResult) {

    // GOOD SCORE
    if (score >= 8) {
      return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-300 to-red-400">

          {/* CENTER CARD */}
          <div className="z-10 bg-white/20 backdrop-blur-lg px-20 py-16 rounded-[50px] shadow-2xl border border-white/30 text-center">

            <h1 className="text-8xl font-extrabold text-white mb-6">
              {score}/10 😭💖
            </h1>

            <h2 className="text-6xl font-bold text-yellow-200 mb-8 animate-pulse">
              Superrrr ✨
            </h2>

            <p className="text-3xl text-white font-semibold leading-relaxed">
              I Love You So Much Daaa 💕
              <br />
              Kutty Davusar 😘
            </p>

            <button
              onClick={() => setShowExtraPage(true)}
              className="mt-10 bg-white text-pink-600 px-8 py-4 rounded-full text-2xl font-bold hover:scale-110 transition duration-300 shadow-2xl"
            >
              Continue Our Journey 💖
            </button>

          </div>
        </div>
      );
    }

    // MEDIUM SCORE
    if (score >= 5) {
      return (
        <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-300 to-red-300">

          {Array.from({ length: 35 }).map((_, index) => (
            <div
              key={index}
              className="absolute animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 30}px`,
              }}
            >
              😭💔😒
            </div>
          ))}

          <div className="z-10 bg-white/20 backdrop-blur-lg px-16 py-14 rounded-[40px] shadow-2xl border border-white/30 text-center">

            <h1 className="text-8xl font-extrabold text-white mb-6">
              {score}/10 😭
            </h1>

            <h2 className="text-5xl font-bold text-red-600 mb-8">
              Nee Romba Mosooo 😒
            </h2>

            <p className="text-3xl text-white font-semibold leading-relaxed">
              Ini Naa Unkita Pesave Maaten 💔
            </p>

          </div>
        </div>
      );
    }

    // LOW SCORE
    return (
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800 via-red-800 to-black">

        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 35}px`,
            }}
          >
            😡🤬💢
          </div>
        ))}

        <div className="z-10 bg-white/10 backdrop-blur-lg px-16 py-14 rounded-[40px] shadow-2xl border border-white/20 text-center">

          <h1 className="text-8xl font-extrabold text-white mb-6">
            {score}/10 😡
          </h1>

          <h2 className="text-5xl font-bold text-red-300 mb-8">
            Enimel Naa Unkita Pesama Maaten 😤
          </h2>

          <p className="text-3xl text-white font-semibold leading-relaxed">
            Angry Ah Iruken 😡💢
          </p>

        </div>
      </div>
    );
  }

  // ================= QUESTIONS PAGE =================

  if (start) {
    return (
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-pink-400 p-6">

        {/* FLOATING HEARTS */}
        {hearts.map((_, index) => (
          <div
            key={index}
            className="absolute animate-bounce opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${15 + Math.random() * 20}px`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          >
            💖
          </div>
        ))}

        {/* QUESTION CARD */}
        <div className="z-10 bg-white/30 backdrop-blur-lg p-10 rounded-[40px] shadow-2xl border border-white/30 max-w-2xl w-full text-center">

          <h1 className="text-5xl font-bold text-red-500 mb-8">
            Question {currentQuestion + 1} 💕
          </h1>

          <h2 className="text-3xl font-semibold text-pink-700 mb-10 leading-relaxed">
            {questions[currentQuestion].question}
          </h2>

          {/* OPTIONS */}
          <div className="grid gap-5">

            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="bg-pink-500 hover:bg-pink-600 text-white text-xl py-4 rounded-2xl transition duration-300 hover:scale-105 shadow-lg"
              >
                {option}
              </button>
            ))}

          </div>
        </div>

        {/* POPUP */}
        {showPopup && (
          <div className="absolute bg-white text-pink-600 px-10 py-6 rounded-3xl shadow-2xl text-3xl font-bold animate-bounce z-20">
            {popupMessage}
          </div>
        )}
      </div>
    );
  }

  // ================= HOME PAGE =================

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-rose-200 to-pink-400">

      {/* FLOATING HEARTS */}
      {hearts.map((_, index) => (
        <div
          key={index}
          className="absolute animate-bounce opacity-60"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${15 + Math.random() * 20}px`,
            animationDuration: `${2 + Math.random() * 4}s`,
          }}
        >
          💖
        </div>
      ))}

      {/* HOME CONTENT */}
      <div className="z-10 text-center px-4">

        <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-2xl mb-6">
          Our Love Journey ❤️
        </h1>

        <p className="text-white text-2xl mb-10 font-semibold">
          Every love story is beautiful,
          but ours is my favorite ✨
        </p>

        <button
          onClick={() => setStart(true)}
          className="bg-red-500 hover:bg-red-600 text-white text-2xl px-10 py-4 rounded-full shadow-2xl transition duration-300 hover:scale-110"
        >
          Start Journey ✨
        </button>

      </div>
    </div>
  );
}