import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: 2rem 0;
`;

const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
