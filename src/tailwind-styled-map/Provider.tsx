import React, { createContext } from 'react';



export type CSSModuleClasses = { readonly [key: string]: string }



const TailwindContext = createContext<{ tailwind: CSSModuleClasses | null }>({
  tailwind: null,
});



// TailwindCssModuleContext
export const TailwindStyledMapContext = TailwindContext;
export const TailwindStyledMapProvider = TailwindContext.Provider;
