import React, { useState } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');

  const checkPrime = () => {
    const num = parseInt(userInput);

    if (!isNaN(num) && num > 1) {
      let isPrime = true;

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }

      setResult(isPrime ? `${num} is a Prime Number` : `${num} is not a Prime Number`);
    } else {
      setResult('Please enter a valid number greater than 1.');
    }
  };

  return (
    <div className="App" style={{ fontSize: '20px' }}>
      <label htmlFor="userInput">Enter a Number:</label>
      <input
        type="text"
        id="userInput"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ fontSize: '16px' }}
      />
      <button onClick={checkPrime} style={{ fontSize: '16px' }}>Check Prime</button>

      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{result}</p>
    </div>
  );
}

export default App;
