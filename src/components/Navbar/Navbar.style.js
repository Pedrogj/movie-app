import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--darkGrey);
  padding: 0 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  padding: 10px 0;
  margin: 0 auto;

  h1 {
    font-size: 25px;
  }
`;

export const LogoImg = styled.img`
  width: 50px;
`;

export const TMDBLogoImg = styled.img`
  width: 50px;
`;
