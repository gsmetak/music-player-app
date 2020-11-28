import React from 'react';

import Provider from './components/Provider';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider>
      <Layout />
    </Provider>
  );
};

export default App;
