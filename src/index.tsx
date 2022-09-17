import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import App from './app/app';
import store from './store/store';
import { AlegreyaFonts, AlegreyaSansFonts } from './vendor/fonts';

const rootDiv = document.getElementById('root');
const rootNode = createRoot(rootDiv as Element);

rootNode.render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <BrowserRouter>
        <AlegreyaFonts />
        <AlegreyaSansFonts />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
