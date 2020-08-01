import React from 'react';
import './App.scss';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout/Layout';

const App = () => (
  <Layout>
    <AppRoutes />
  </Layout>
);

export default App;
