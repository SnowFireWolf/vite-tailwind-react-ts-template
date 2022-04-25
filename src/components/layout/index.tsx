import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from '@/styles/tailwind.module.css';
import styled from '@/tailwind-styled-map';



const Box = styled('div');
const LinkButton = styled('button', [
  'py-2',
  'pr-4',
  'pl-3'
]);



export default function BaseLayout({ ...props }) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box sx={['w-full', 'bg-white', 'shadow-lg', 'py-4']}>
        <Box sx={['flex', 'items-center', 'md:order-2']}>
          <LinkButton type="button" onClick={() => navigate('/')}>
            Home
          </LinkButton>
          <LinkButton type="button" onClick={() => navigate('/about')}>
            About
          </LinkButton>
        </Box>
      </Box>

      <main>
        {props.children}
      </main>
    </React.Fragment>
  );
}
