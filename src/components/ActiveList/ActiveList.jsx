import React from 'react';
import styled from 'styled-components';
import ElemOfActiveList from '../ElemOfActiveList/ElemOfActiveList';

const DivListElem = styled.div`
  width: 80%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 5px 20px 15px rgba(0, 0, 0, 0.03);
  position: absolute;
  top: 110px;
  left: 50%;
  padding-left: 20px;
  padding-right: 10px;
  transform: translate(-50%);
  min-width: 460px;
  margin-right: 0px;
`;

const DivForListElems = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 10px;
`;

const SpanClearElem = styled.span`
  align-self: center;
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  margin-right: 10px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ActiveList = () => {
  return (
    <DivListElem>
      <DivForListElems>
        <ElemOfActiveList skill={'Front ENd'} />
        <ElemOfActiveList skill={'asd'} />
        <ElemOfActiveList skill={'asd'} />
        <ElemOfActiveList skill={'JavaScript'} />
        <ElemOfActiveList skill={'asd'} />
        <ElemOfActiveList skill={'asd'} />
      </DivForListElems>

      <SpanClearElem>Clear</SpanClearElem>
    </DivListElem>
  );
};

export default ActiveList;
