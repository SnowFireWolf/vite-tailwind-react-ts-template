import React, { createContext } from 'react';



export type CSSModuleClasses = { readonly [key: string]: string }



const TailwindContext = createContext<{ tailwind: CSSModuleClasses | null }>({
  tailwind: null,
});



export const TailwindCssModuleContext = TailwindContext;
export const TailwindCssModuleProvider = TailwindContext.Provider;
