import React from "react";
import { Link } from "react-router-dom";

import LogoVideo from "../../images/videologo.svg";
import LogoClapper from "../../images/clapper.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Navbar.style";

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={LogoVideo} alt="logo-video" />
        </Link>
        <h1>MoviesDB</h1>
        <Link to="/">
          <TMDBLogoImg src={LogoClapper} alt="logo-clapper" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
