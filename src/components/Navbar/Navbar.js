import React from "react";
import { Link } from "react-router-dom";

import LogoMovie from "../../images/moviedb.svg";
import LogoClapper from "../../images/clapper.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Navbar.style";

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={LogoMovie} alt="logo-video" />
        </Link>
        <Link to="/">
          <TMDBLogoImg src={LogoClapper} alt="logo-clapper" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
