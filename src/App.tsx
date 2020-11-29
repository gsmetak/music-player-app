import React from 'react';

import Provider from './components/BaseProvider';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider>
      <Layout />
    </Provider>
  );
};

export default App;
