// 2a
import MCUShows from "./mcu-shows/MCUShows";

// BONUS 6a & 8a
import { useState, useEffect } from 'react';

// 5a
const releaseDates = {
  wandaVision: 'Jan 2021',
  falconWinter: 'Mar 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021',
  moonKnight: 'March 2022',
  msMarvel: 'June 2022'
};

// BONUS 6b
const mcuCharacters = [
  'Wanda Maximoff',
  'Vision',
  'Falcon',
  'Winter Soldier',
  'Loki',
  'The Watcher',
  'Hawkeye',
  'Kate Bishop',
  'Moon Knight',
  'Ms. Marvel'
];

function App() {
  // BONUS 6c
  const [index, setIndex] = useState(0);

  // BONUS 7a
  const [num, setNum] = useState(0);

  // BONUS 8a
  // The function (1st argument) passed into the useEffect function/hook will run every time the state value ("num" in this example) that is passed into the array (2nd argument) is updated.
  // NOTE: If a second argument (AKA An array) is NOT passed in for the useEffect function/hook, then the function (AKA The alert in this example) will run whenever any state values are updated. Also, if an empty array is passed in as the second argument for the useEffect function/hook, then the function (AKA The alert in this example) will only run when the page first loads.
  useEffect(() => {
    alert("The Next MCU Character has been displayed");
  }, [num]);

  // BONUS 6f
  function randomChar() {
    setIndex(Math.floor(Math.random() * mcuCharacters.length));
  }

  // BONUS 7d
  function nextChar() {
    if (num === mcuCharacters.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  }

  return (
    <div>
      {/* 2b */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2c & 5b & BONUS 6f & 7d */}
      <MCUShows
        dates={releaseDates}
        randomChar={randomChar}
        nextChar={nextChar}
      />
      {/* BONUS 6d & 6f */}
      <h1>Random MCU Character: {mcuCharacters[index]}</h1>
      {/* BONUS 7b & 7d */}
      <h1>Next MCU Character: {mcuCharacters[num]}</h1>
    </div>
  );
}

export default App;