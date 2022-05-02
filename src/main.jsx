import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


//const container = document.getElementById("app");
//const root = ReactDOM.createRoot(container);
ReactDOM.createRoot(document.getElementById('root')).render(
//root.render(
  <React.StrictMode>
   <ChakraProvider>
     <BrowserRouter>
      <App />
     </BrowserRouter>
   </ChakraProvider>
  </React.StrictMode>
);

