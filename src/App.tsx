import React from 'react';
import Provider from './components/Provider';

const App = () => {
  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <p>Hello world!</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </Provider>
  );
};

export default App;
