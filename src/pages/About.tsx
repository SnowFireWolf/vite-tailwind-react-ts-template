import React from "react";
import styled from "@/tailwind-styled-map";



// const Box = styled('div')``;
const StyledButton = styled.button('p-3 flex flex-row justify-center items-center bg-indigo-400 text-white rounded-lg shadow-lg focus:outline-none active:bg-indigo-800 disabled:opacity-80');
const Card = styled.div('p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4');

const TemplateCardTest = styled.div(`
  p-6
  max-w-sm
  mx-auto
  bg-white
  rounded-xl
  shadow-lg
  flex
  items-center
  space-x-4
`);



const BigCard = styled('div');



export default function AboutPage() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <BigCard sx='mt-20'>
        Really Big
      </BigCard>
      <StyledButton>
        Button
      </StyledButton>
      <Card>
        Card
      </Card>
      <TemplateCardTest>
        TemplateCardTest
      </TemplateCardTest>
    </React.Fragment>
  );
}
