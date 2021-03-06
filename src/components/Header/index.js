import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiFoodTruck as Logo } from 'react-icons/gi';
import { FaBars, FaAngleDown } from 'react-icons/fa';

// Components
import Nav from '../Nav';

// Styles
import { Container } from './styles';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = () => setWidth(window.innerWidth);
  }, []);

  return (
    <Container>
      <Link className="logo" to="/">
        <Logo />
        <h1>PRATTU</h1>
      </Link>
      {width < 768 && (
        <button
          id="toggle"
          type="button"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          {isNavActive ? <FaAngleDown /> : <FaBars />}
        </button>
      )}
      <Nav screenWidth={width} isNavActive={isNavActive} />
    </Container>
  );
}
