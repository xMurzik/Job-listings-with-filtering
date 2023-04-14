import React from 'react';
import styled from 'styled-components';
import ElemOfActiveList from '../ElemOfActiveList/ElemOfActiveList';
import styles from './ActiveList.module.css';

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
    <div className={styles.listElem}>
      <div className={styles.listForElems}>
        <ElemOfActiveList skill={'Front ENd'} />
        <ElemOfActiveList skill={'asd'} />
        <ElemOfActiveList skill={'asd'} />
        <ElemOfActiveList skill={'JavaScript'} />
        <ElemOfActiveList skill={'asd'} />
        <ElemOfActiveList skill={'asd'} />
      </div>

      <SpanClearElem>Clear</SpanClearElem>
    </div>
  );
};

export default ActiveList;
