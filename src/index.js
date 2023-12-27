import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

const breakpoints = {
  base: '0px',
  sm: '320px',
  md: '900px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
};

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  breakpoints: breakpoints,
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </Provider>
);
