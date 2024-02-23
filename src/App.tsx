import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name={'kunwar'} email={'singhkunwarpreet797@gmail.com'} friends={['rahul','raj','mohan']}/>
    </div>
  );
}

export default App;
