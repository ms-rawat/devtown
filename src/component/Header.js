import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const HeaderWrapper = styled.header`

  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const ShoppingText = styled.h1`
  font-size: 2rem;
  color: #007bff;
  animation: ${bounce} 2s infinite;
`;

function Header() {
  return (
    <HeaderWrapper>
      <ShoppingText>shopping.com</ShoppingText>
    </HeaderWrapper>
  );
}

export default Header;
