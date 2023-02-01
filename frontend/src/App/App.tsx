import React from 'react';
import './App.scss';
import Navigation from '../features/Navigation/Navigation';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>
    </div>
  );
}

export default App;
