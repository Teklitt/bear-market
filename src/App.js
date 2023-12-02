import './global.css'
//import logo from './images/Bear Market logo.png'
import Products from './components/Products/Products';
import banner from "./images/welcome banner.png";
import Login from './Login';
import { useState } from "react";
import {signOut} from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.reload(false);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-logo" alt="logo" />
        <p>Bear Market, Buy and Sell at Morgan State University.</p>
        <a
          className="App-link"
          href="https://www.figma.com/file/w9q7TeyTENYdX7Vf8sEOS5/Untitled?type=design&node-id=0-1&mode=design&t=adXNODPe3N1KeSxn-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bear Market Figma
        </a>

        <Products />
        {!isAuth ? <Login setIsAuth={setIsAuth} /> : <button onClick={signUserOut}>Log out of Google</button> }
      </header>
    </div>
  )
}

export default App
