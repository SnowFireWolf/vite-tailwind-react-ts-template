import React from 'react'
import logo from '@/assets/logo.svg'
import tw from '@/styles/tailwind.module.css'


import styled from '../tailwind-styled-map';
import Button from '@/components/system/Button';
// import TestButton from '@/components/system/TestButton';


// const Container = styled('div', [
//   'mt-5',
//   'flex',
// ]);

const Container = styled('div');



export default function HomePage() {
  const [count, setCount] = React.useState<number>(0)
  const [showContet, setShowContent] = React.useState<boolean>(false);

  const handleToggle = () => {
    setShowContent(!showContet);
  }



  const viewSxProps = [
    'bg-blue-500',
    'text-white',
    'rounded',
    'p-4',
    'shadow',
  ];

  const hideSxProps = [
    'hidden'
  ];



  return (
    <div className={`${tw['container']} ${tw['mx-auto']}`}>
      <Button
        sx={[
          'mt-5',
          'p-3',
          'mb-5',
        ]}
        type="button"
        onClick={() => handleToggle()}
      >
        Toggle
      </Button>

      <Container sx={showContet ? viewSxProps : hideSxProps}>測試內容</Container>

      <img className={`${tw['w-1/4']}`} src={logo} alt="logo" />
      <p>Hello Vite + React + React Router!</p>
      <p>
        <Button
          sx={[
            'mt-5',
            'p-3',
          ]}
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </Button>
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
