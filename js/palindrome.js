import React, { useState } from 'react';

function PalindromeChecker() {
  const [inputString, setInputString] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = () => {
    const cleanedStr = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    setIsPalindrome(cleanedStr === cleanedStr.split('').reverse().join(''));
  };

  return (
    <div>
      <h2>Palindrome Checker</h2>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={checkPalindrome}>Check</button>
      {isPalindrome !== null && (
        <p>{isPalindrome ? 'It is a palindrome!' : 'It is not a palindrome.'}</p>
      )}
    </div>
  );
}

export default PalindromeChecker;
