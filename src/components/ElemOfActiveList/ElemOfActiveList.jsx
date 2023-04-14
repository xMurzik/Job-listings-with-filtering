import React from 'react';
import styled from 'styled-components';

const MainDivElem = styled.div`
  min-width: 80px;
  height: 28px;
  background-color: hsl(180, 31%, 95%);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SpanSkillTextElem = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: 550;
  width: 70%;
  text-align: center;
  display: block;
  margin: 0px 10px 0px 10px;
`;

const DivButtonToTextIntoDivElem = styled.span`
  height: 100%;
  background-color: hsl(180, 29%, 50%);
  width: 30px;
  border-radius: 0px 5px 5px 0px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: hsl(180, 14%, 20%);
  }
`;

const ElemOfActiveList = ({ skill }) => {
  SpanSkillTextElem.textContent = skill;
  return (
    <MainDivElem>
      <SpanSkillTextElem>{skill}</SpanSkillTextElem>
      <DivButtonToTextIntoDivElem>
        <p>X</p>
      </DivButtonToTextIntoDivElem>
    </MainDivElem>
  );
};

export default ElemOfActiveList;
