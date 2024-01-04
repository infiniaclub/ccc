import React, { useState } from 'react';
import './App.css'; // You can keep your existing CSS or modify it as needed

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value))
  }

  const clear = () => {
    setResult("");
  }

  const answer = () => {
    setResult(eval(result).toString());
  }

  return (
    <div className="container text-center">
      <div>
        <h1 style={{ marginTop: '10px' }}>Calculator</h1>
        <div>
          <input className='form-control' type='text' value={result} />
          <table>
            <tbody>
              <tr>
                <td><input type='button' value="9" onClick={clickHandler} /></td>
                <td><input type='button' value="8" onClick={clickHandler} /></td>
                <td><input type='button' value="7" onClick={clickHandler} /></td>
                <td><input type='button' value="+" onClick={clickHandler} /></td>
              </tr>
              <tr>
                <td><input type='button' value="6" onClick={clickHandler} /></td>
                <td><input type='button' value="5" onClick={clickHandler} /></td>
                <td><input type='button' value="4" onClick={clickHandler} /></td>
                <td><input type='button' value="-" onClick={clickHandler} /></td>
              </tr>
              <tr>
                <td><input type='button' value="3" onClick={clickHandler} /></td>
                <td><input type='button' value="2" onClick={clickHandler} /></td>
                <td><input type='button' value="1" onClick={clickHandler} /></td>
                <td><input type='button' value="/" onClick={clickHandler} /></td>
              </tr>
              <tr>
                <td><input type='button' value="0" onClick={clickHandler} /></td>
                <td><input type='button' value="AC" onClick={clear} /></td>
                <td><input type='button' value="=" onClick={answer} /></td>
                <td><input type='button' value="*" onClick={clickHandler} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
