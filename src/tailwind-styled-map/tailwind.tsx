import React, { useContext } from 'react';

import elementsArray from './elementTags';
import { CSSModuleClasses, TailwindStyledMapContext } from './Provider';
import { twMerge } from 'tailwind-merge';



type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;



export const cleanTemplate = (template: (string | undefined | null)[]) => {
  const newClasses: string[] = template
    .join(" ")
    .trim()
    .replace(/\n/g, " ") // replace newline with space
    .replace(/\s{2,}/g, " ") // replace line return by space
    .split(" ")
    .filter((c) => c !== ",") // remove comma introduced by template to string

  return newClasses;
}



// convert tailwind class name to css module class name
const convertToClassNameArrays = (styledmap: string[] | string, tailwind: CSSModuleClasses) => {
  let classList: string[] = [];
  let styledMapArray: string[] = [];

  // check is array
  if (typeof styledmap === 'object') {
    styledMapArray = styledmap;
    // console.log(styledMapArray);

  } else if (typeof styledmap === 'string') {
    // console.log('string process engine');
    const splitString = styledmap.split(' ');
    styledMapArray = splitString;
  }

  // console.log('styledMapArray', styledMapArray);

  styledMapArray?.forEach((item) => {
    if (tailwind[item] !== undefined) {
      classList.push(tailwind[item]);
      // console.log('item', tailwind[item]);
    }
  });

  // console.log('classList', classList);
  return classList;
}



// create styled component
const createStyled = <E extends React.ComponentType<any> | IntrinsicElementsKeys>(Element: E, styledmap?: Array<string> | string) => {
  // console.log('Element', Element)
  // console.log('styledmap', styledmap);

  const TailwindCssModuleComponent: any = React.forwardRef<any, any>(({ as, ...props }, ref) => {
    const { tailwind } = useContext(TailwindStyledMapContext);

    const FinalElement = as || Element;

    if (tailwind) {
      // cache class map
      let styledMapArrays: string[] = [];

      if (styledmap !== undefined) {
        if (typeof styledmap === 'string') {
          styledMapArrays = convertToClassNameArrays(cleanTemplate([styledmap]), tailwind);
        } else {
          styledMapArrays = convertToClassNameArrays(styledmap, tailwind);
        }
        // console.log('styledMapArrays', styledMapArrays);
      }

      let sxStyledListArrays: string[] = [];
      // sx props
      if (typeof props?.sx === 'string') {
        sxStyledListArrays = convertToClassNameArrays(cleanTemplate([props?.sx]), tailwind);
      } else {
        sxStyledListArrays = convertToClassNameArrays(props?.sx, tailwind);
      }

      // merge sx and styled map
      const mergeAllStyleArrays = styledMapArrays.concat(sxStyledListArrays);
      // console.log('mergeAllStyleArrays', mergeAllStyleArrays);

      // remove processed props
      const filterProps = Object.fromEntries(Object.entries(props).filter(([key]) => !key.includes('sx') && !key.includes('as')));

      return (
        <FinalElement
          className={twMerge(...mergeAllStyleArrays, props.className)}
          ref={ref}
          {...filterProps}
        />
      );
    } else {
      console.error(`You need to import TailwindCssModuleContext to use styled-map.`);
      console.error(`More info vist: https://github.com/SnowFireWolf/tailwind-styled-map`);
      throw 'TailwindCssModuleProvider is not found';
    }
  });

  return TailwindCssModuleComponent;
}



export type tagFunctionsMap = {
  [key in IntrinsicElementsKeys]: (styledmap?: Array<string> | string) => any
}



const tagFunctions: tagFunctionsMap = elementsArray.reduce((acc, item) => ({
  ...acc,
  [item]: (styledMap: Array<string> | string) => {
    return createStyled(item, styledMap)
  },
}), {} as any);
// console.log('tagFunctions', tagFunctions);



// merge
const styleTailwind = Object.assign(createStyled, tagFunctions);



export default styleTailwind;
