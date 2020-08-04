import React from 'react';
import './App.scss';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout/Layout';
import { AppProvider } from './AppProvider';

const App = () => (
  <AppProvider>
    <Layout>
      <AppRoutes />
    </Layout>
  </AppProvider>
);

export default App;
