//import styles from './Burger.module.scss';
import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../RightNav/RightNav.js';

const BurgerStyle = styled.div`
  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
    position: absolute;
    top: 20px;
    right: 25px;
    z-index: 100;

    div {
      width: 40px;
      height: 2px;
      background-color: ${({ open }) => open ? '#fff' : '#227093'};
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3 linear;
      margin: 8px 0;
    }
  }  
`;

const Burger = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <BurgerStyle open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerStyle>
      <RightNav open={open}/>
    </>  
  );
}

export default Burger;