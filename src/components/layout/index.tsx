import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function BaseLayout({ ...props }) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <p>
        <button type="button" onClick={() => navigate('/')}>
          Home
        </button>
        {' | '}
        <button type="button" onClick={() => navigate('/about')}>
          About
        </button>
      </p>
      {props.children}
    </React.Fragment>
  );
}
