import React from 'react'
import logo from '@/assets/logo.svg'


import styled from '@/tailwind-styled-map';
import Button from '@/components/system/Button';
// import TestButton from '@/components/system/TestButton';


// const Container = styled('div', [
//   'mt-5',
//   'flex',
// ]);



const Box = styled('div');
const Image = styled('img');
const Card = styled.div('p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4');



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
    <Box sx={['container', 'mx-auto']}>
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

      <Box sx={showContet ? viewSxProps : hideSxProps}>測試內容</Box>

      <Image sx={'w-1/4'} src={logo} alt="logo" />
      <p>Hello Vite + React + React Router!</p>

      <Card sx='bg-[#34eb9b] pd-5'>
        test
      </Card>

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

      <Box sx="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <Image sx="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
        <Box sx="text-center space-y-2 sm:text-left">
          <Box sx="space-y-0.5">
            <Box sx="text-lg text-black font-semibold">
              Erin Lindford
            </Box>
            <Box sx="text-slate-500 font-medium">
              Product Engineer
            </Box>
          </Box>
          <Box sx="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</Box>
        </Box>
      </Box>

    </Box>
  )
}
