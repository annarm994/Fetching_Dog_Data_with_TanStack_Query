import React from 'react';
import DogBreeds from './DogBreeds';
import DogFacts from './DogFacts';
import DogGroups from './DogGroups';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dog API App</h1>
        <DogBreeds />
        <DogFacts />
        <DogGroups />
      </header>
    </div>
  );
}

export default App;