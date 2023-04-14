import React from 'react';
import styles from './WorkPlace.module.css';
import ElemWorkPlace from '../ElemWorkPlace/ElemWorkPlace';

const WorkPlace = () => {
  return (
    <div className={styles.mainDiv}>
      <ElemWorkPlace />
      <ElemWorkPlace />
      <ElemWorkPlace />
    </div>
  );
};

export default WorkPlace;
