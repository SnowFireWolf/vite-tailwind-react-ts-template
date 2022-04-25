import React from 'react';
import { useNavigate } from 'react-router-dom';
import tw from '@/styles/tailwind.module.css';



export default function BaseLayout({ ...props }) {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className={`${tw['w-full']} ${tw['bg-white']} ${tw['shadow-lg']} ${tw['py-4']}`}>
        <div className={`${tw['flex']} ${tw['items-center']} ${tw['md:order-2']}`}>
          <button className={`${tw['py-2']} ${tw['pr-4']} ${tw['pl-3']}`} type="button" onClick={() => navigate('/')}>
            Home
          </button>
          <button className={`${tw['py-2']} ${tw['pr-4']} ${tw['pl-3']}`} type="button" onClick={() => navigate('/about')}>
            About
          </button>
        </div>
      </div>
      {props.children}
    </React.Fragment>
  );
}
