import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useTitle from './hooks/useTitle'
import './App.css'

function App() {
  useTitle('Dependency Finder')

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Link className={'navigation'} to="/extract">extract</Link>
        <Link className={'navigation'} to="/load">load</Link>
        <Link className={'navigation'} to="/query">query</Link>
        <Link className={'navigation'} to="/closure">closure</Link>
        <Link className={'navigation'} to="/cycles">cycles</Link>
        <Link className={'navigation'} to="/metrics">metrics</Link>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
