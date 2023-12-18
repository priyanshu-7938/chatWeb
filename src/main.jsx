import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Web3ContextProvider } from "./context";
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThirdwebProvider activeChain={ Sepolia } clientId="1bd5a5d2710178fd9588213fbc136d44">
    <BrowserRouter>
      <Web3ContextProvider>
        <App />
      </Web3ContextProvider>
    </BrowserRouter>
  </ThirdwebProvider>
)