"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With 7 sisters sushie?",
      "What about Fonce nunchi Ravioli? ",
      "PLEASE BOO",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to taahir's ghost",
      "please raaaa",
      ":((((",
      "PRETTY PLEASE",
      "KUKKAA",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center">
            YAAAYYYY!!! Lesssgoooo repu kaluddammm!! ;))
            <br />
            <a
              href="https://ncase.me/door/#I%60qqx!W%60mdouhodr!E%60x!I%60srihui%60" // replace with your game website URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`mt-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
                style={{ fontSize: 16 }}
                onClick={() => setYesPressed(true)}
              >
                Click Here for a smol game
              </button>
            </a>
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
