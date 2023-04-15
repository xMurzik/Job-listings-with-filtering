import React from 'react';
import styles from './WorkPlace.module.css';
import ElemWorkPlace from '../ElemWorkPlace/ElemWorkPlace';
import { useSelector } from 'react-redux';

const WorkPlace = () => {
  const list = useSelector((state) => state.listWork.listVac);

  return (
    <div className={styles.mainDiv}>
      {list.map((elem) => (
        <ElemWorkPlace
          key={elem.id}
          image={elem.logo}
          compName={elem.company}
          profName={elem.position}
          isNew={elem.new}
          isFeat={elem.featured}
          infoVac={[elem.postedAt, elem.contract, elem.location]}
          infoSkills={[elem.role, elem.elem, ...elem.languages]}
        />
      ))}
    </div>
  );
};

export default WorkPlace;
