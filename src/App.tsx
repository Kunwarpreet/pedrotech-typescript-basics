import React from 'react';
import './App.css';
import {Person, Country} from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name={'kunwar'} 
      email={'singhkunwarpreet797@gmail.com'} 
      friends={['rahul','raj','mohan']}
      country={Country.Brazil}/>
    </div>
  );
}

export default App;
