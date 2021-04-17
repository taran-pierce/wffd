import React from 'react';
import Link from 'next/link';
import SearchForm from '../searchForm';
import styles from './header.module.scss';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.logo}>
              <Link href={'/'}>
                <a className={styles.links}>WFFD</a>
              </Link>
            </li>
            <li>
              <SearchForm 
                buttonStyle={'inverse'}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
