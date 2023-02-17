import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ThemeItem from './ThemeItem';

import styles from './Themes.module.scss';

function Themes(): JSX.Element {
  const { themes } = useSelector((store: RootState) => store.questions);

  return (
    <div className={styles.modules__container}>
      {themes.map((el) => (
        <ThemeItem key={el.id} theme={el} />
      ))}
    </div>
  );
}

export default Themes;
