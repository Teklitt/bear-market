import './global.css'
import logo from './images/Bear Market logo.png'
import Products from './components/Products/Products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  )
}

export default App
