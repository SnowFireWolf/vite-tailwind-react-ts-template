import React from 'react';
import styled from '@/tailwind-styled-map';



export default function Button({ ...props }) {
  const StyledButton = styled('button', [
    'p-3',
    'flex',
    'flex-row',
    'justify-center',
    'items-center',
    'bg-indigo-400',
    'text-white',
    'rounded-lg',
    'shadow-lg',
    'focus:outline-none',
    'active:bg-indigo-800',
    'disabled:opacity-80',
    // 'bg-[#50d71e]'
  ]);

  // const StyledButton = styled.button([
  //   'p-3',
  //   'flex',
  //   'flex-row',
  //   'justify-center',
  //   'items-center',
  //   // 'bg-indigo-400',
  //   'text-white',
  //   'rounded-lg',
  //   'shadow-lg',
  //   'focus:outline-none',
  //   'active:bg-indigo-800',
  //   'disabled:opacity-80',
  //   'bg-[#42f593]'
  // ]);

  return <StyledButton {...props} />;
};
