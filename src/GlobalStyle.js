import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --black: #22254b;
    --white: aliceblue;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #34495E;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  *{ 
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--black) ;
    color: var(--white);

  h1 {
      font-size: 2rem;
      font-weight: 600;
      color: aliceblue;
  }

  h3 {
      font-size: 1.1rem;
      font-weight: 600;
  }

  p {
      font-size: 1rem;
      color: var(--white);
  }
}
`;
