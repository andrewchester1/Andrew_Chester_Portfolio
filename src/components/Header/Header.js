import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
import NavDropDown from '../NavDropDown';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects"> 
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech"> 
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about"> 
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#resume"> 
          <NavLink>Resume</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/andrewchester1?tab=repositories">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/andrew-chester-280152201/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/dachester13/?hl=en">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </Div3>
  </Container>
);

export default Header;
