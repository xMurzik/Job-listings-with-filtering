import React from 'react';
import styled from 'styled-components';
import ElemOfActiveList from '../ElemOfActiveList/ElemOfActiveList';
import styles from './ActiveList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../ElemWorkPlace/listSlice';

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
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listWork.listSkills);
  return (
    <div className={styles.listElem}>
      <div className={styles.listForElems}>
        {list.map((elem, id) => (
          <ElemOfActiveList key={id} skill={elem} />
        ))}
      </div>

      <SpanClearElem
        onClick={() => {
          dispatch(reset());
        }}
      >
        Clear
      </SpanClearElem>
    </div>
  );
};

export default ActiveList;
