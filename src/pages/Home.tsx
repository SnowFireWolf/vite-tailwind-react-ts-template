import React from 'react'
import logo from '@/assets/logo.svg'
import tw from '@/styles/tailwind.module.css'



export default function HomePage() {
  const [count, setCount] = React.useState<number>(0)

  return (
    <div className={`${tw['container']} ${tw['mx-auto']}`}>
      <img className={`${tw['w-1/4']}`} src={logo} alt="logo" />
      <p>Hello Vite + React + React Router!</p>
      <p>
        <button
          className={`${tw['mt-5']} ${tw['flex']} ${tw['flex-row']} ${tw['justify-center']} ${tw['items-center']} ${tw['p-3']} ${tw['bg-indigo-900']} ${tw['text-white']} ${tw['rounded-lg']} ${tw['shadow-lg']} ${tw['focus:outline-none']} ${tw['active:bg-indigo-800']} ${tw['disabled:opacity-80']}`}
          type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code>./src/pages/Home.jsx</code> and save to test HMR updates.
      </p>
      <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {' | '}
        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </div>
  )
}
