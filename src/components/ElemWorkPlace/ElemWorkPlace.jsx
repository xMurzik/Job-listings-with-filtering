import React from 'react';
import styles from './ElemWorkPlace.module.css';
import { useDispatch } from 'react-redux';

import { loadNewSkill } from './listSlice';

const ElemWorkPlace = ({
  image,
  compName,
  profName,
  isNew,
  isFeat,
  infoVac,
  infoSkills,
}) => {
  const newInfoSkills = infoSkills.filter((elem) => elem !== undefined);
  const dispatch = useDispatch();

  return (
    <div className={styles.vacancie}>
      <div className={styles.contElems}>
        <div style={{ minWidth: '88px' }} className={styles.imgCont}>
          <img
            src={require(`${image}`)}
            className={styles.imgCompany}
            alt="#"
          />
        </div>
        <div className={styles.infoCompany}>
          <div className={styles.nameCompany}>
            <span className={styles.nameOfCompany}>{compName}</span>
            <div style={{ width: '5px' }}></div>

            {isNew ? <span className={styles.featuresNew}>NEW!</span> : ''}
            {isFeat ? <span className={styles.features}>FEATURED</span> : ''}
          </div>
          <div className={styles.skill}>{profName}</div>
          <div className={styles.aboutVac}>
            {infoVac.map((elem) => (
              <span key={elem}>{elem}</span>
            ))}
          </div>
        </div>
        <div className={styles.skillz}>
          {newInfoSkills.map((elem, id) => (
            <div
              onClick={() => {
                dispatch(loadNewSkill(elem));
              }}
              key={id}
              className={styles.skillName}
            >
              {elem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElemWorkPlace;
