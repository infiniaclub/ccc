import './App.css';
import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const checkNumber = () => {
    const num = parseInt(userInput);
    if (!isNaN(num)) {
      if (num === 0) {
        setResult('Enter Number greater than zero');
      } else if (num % 2 === 0) {
        setResult(`${num} is an Even Number`);
      } else {
        setResult(`${num} is an Odd Number`);
      }
    } else {
      setResult('Please enter a valid number.');
    }
  };

  return (
    <div className="App" style={{ fontSize: '20px', margin: '100px'}}>
      <label htmlFor="userInput">Enter a Number:</label>
      <input
        type="text"
        id="userInput"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ fontSize: '16px' }}
      />
      <button onClick={checkNumber} style={{ fontSize: '16px' }}>Check Number</button>

      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{result}</p>
    </div>
  );
}

export default App;
