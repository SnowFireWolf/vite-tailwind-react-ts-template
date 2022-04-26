import React from "react";
import styled from "@/tailwind-styled-map";


const Typography = styled.div();



export default function AboutPage() {
  return (
    <React.Fragment>
      <Typography
        sx={`
          mt-10
          text-[2rem]
          text-center
          font-bold
          text-slate-900
          dark:text-slate-200
        `}
      >
        About Page
      </Typography>
    </React.Fragment>
  );
}
