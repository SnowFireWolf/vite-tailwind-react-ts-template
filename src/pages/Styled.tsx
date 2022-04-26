import React from 'react'
import logo from '@/assets/logo.svg'


import styled from '@emotion/styled';
// import TestButton from '@/components/system/TestButton';


// const Container = styled('div', [
//   'mt-5',
//   'flex',
// ]);


const Box = styled('div')``;

const Container = styled(Box)`
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
`;


const Typography = styled('div')`
  padding-top: 2rem;
  font-size: 2.375rem;
  text-align: center;
  font-weight: bold;
`;



const Image = styled('img')``;
const Card = styled.div`
    p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4
`;



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
    <Container>
      <Typography>
        @emotion/styled Test
      </Typography>

    </Container>
  )
}
