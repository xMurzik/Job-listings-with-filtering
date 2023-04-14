import React from 'react';
import styles from './ElemWorkPlace.module.css';

const ElemWorkPlace = ({
  image,
  compName,
  profName,
  isNew,
  isFeat,
  infoVac,
  infoSkills,
}) => {
  return (
    <div className={styles.vacancie}>
      <div>
        <img src={require('./images/insure.svg').default} alt="#" />
      </div>
    </div>
  );
};

export default ElemWorkPlace;
