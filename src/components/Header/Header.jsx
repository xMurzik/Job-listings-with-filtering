import React from 'react';
import styled from 'styled-components';
import descImg from '../../images/bg-header-desktop.svg';
import mobImg from '../../images/bg-header-mobile.svg';

const HeaderDivElem = styled.div`
  width: 100%;
  background-color: hsl(180, 25%, 52%);
  height: 150px;
`;

const ImgElem = styled.img`
  height: 100%;
  width: 100%;
  background-image: url(${descImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 600px) {
    background-image: url(${mobImg});
  }
`;

const Header = () => {
  return (
    <>
      <HeaderDivElem>
        <ImgElem />
      </HeaderDivElem>
    </>
  );
};

export default Header;
