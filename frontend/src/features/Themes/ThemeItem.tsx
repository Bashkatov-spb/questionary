import React from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../questions/types/Questions';
import styles from './ThemeItem.module.scss';

function ThemeItem({ theme }: { theme: Theme }): JSX.Element {
  return (
    <div className={styles.item__container}>
      <Link to={`/questions/${theme.id}`}>{theme.title}</Link>
    </div>
  );
}

export default ThemeItem;
