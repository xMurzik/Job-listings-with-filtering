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
      <div className={styles.contElems}>
        <div style={{ minWidth: '88px' }}>
          <img
            src={require('./images/insure.svg').default}
            className={styles.imgCompany}
            alt="#"
          />
        </div>
        <div className={styles.infoCompany}>
          <div className={styles.nameCompany}>
            <span className={styles.nameOfCompany}>Photoshop</span>
            <div style={{ width: '5px' }}></div>

            <span className={styles.featuresNew}>NEW!</span>
            <span className={styles.features}>FEATHURED</span>
          </div>
          <div className={styles.skill}>Senior Frontend Developer</div>
          <div className={styles.aboutVac}>
            <span>5d ago</span>
            <span>Contract</span>
            <span>USA only</span>
          </div>
        </div>
        <div className={styles.skillz}>
          <div className={styles.skillName}>asdasd</div>
          <div className={styles.skillName}>asdasd</div>
          <div className={styles.skillName}>asdasd</div>
          <div className={styles.skillName}>asdasd</div>
        </div>
      </div>
    </div>
  );
};

export default ElemWorkPlace;
