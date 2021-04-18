import React from 'react';
import { node  } from 'prop-types';
import styles from './main.module.scss';

export default function Main(props) {
  const { children } = props;

  return (
    <main className={styles.main}>
      {children}
    </main>
  );
}

Main.propTypes = {
  children: node.isRequired,
};
