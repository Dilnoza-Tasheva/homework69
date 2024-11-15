import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline/>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
