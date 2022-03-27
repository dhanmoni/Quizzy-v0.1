import React from 'react';
import Layout from './layout/layout';

import { Provider } from 'react-redux';
import { store } from './redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
};

export default App;
