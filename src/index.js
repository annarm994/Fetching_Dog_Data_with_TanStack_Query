import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import queryClient from './queryClient';
import './index.css';

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);