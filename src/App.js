
import React, { useState, useRef } from 'react';
import useRamdomJoke from './useRandowJoke';
import useWindowSize from './useWindowSize';

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loader, joke] = useRamdomJoke(firstName, lastName);
  const [width, height] = useWindowSize(); 

  const GeneratorJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <center>
        <h2>Joke Hook</h2>
        <h4>{loader ? loader : joke}</h4>

        <form>
          <input ref={firstNameRef} placeholder="first name" type="text" />
          <input ref={lastNameRef} placeholder="last name" type="text" />
          <button onClick={GeneratorJoke}>Generate Joke</button>
        </form>      
      </center>

      <center>
        <h2>UseWindow Hook</h2>
        <p>{width}</p>
        <p>{height}</p>
      </center>
    </div>
  );
}

export default App;
