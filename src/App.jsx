import { useState } from 'react'
import './App.css'
import { useWeb3Context } from './context';
import { encodeConstructorParamsForImplementation } from '@thirdweb-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, Explore, Chat, Contact } from './components';
import Loader from './utils/Loader';

function App() {
  const [count, setCount] = useState(0)
  const{ contract, address, connect, isLoading } = useWeb3Context();
  return (
    <>
     <div style={{background: '#ADADAD'}} className="h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Account" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Contacts" element={<Contact />} />
          <Route path="/Chat" element={<Chat />} />
        </Routes>
      </div>
    </>
  )
}

export default App
