import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchForm from '../searchForm';
import styles from './header.module.scss';

export default function Header() {

  const [innerWidth, setInnerWidth] = useState(992);

  // watch for window resize
  const watchWindowResize = () => {
    window.addEventListener('resize', () => {
      window.requestAnimationFrame(() => {
        setInnerWidth(window.innerWidth);
      });
    });
  };

  // set initial inner window width
  useEffect(() => {
    setInnerWidth(window.innerWidth);

    watchWindowResize();
  }, []);

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
            {/* search form only fits at tablet and above */}
            {innerWidth >= 768 && (
              <li>
                <SearchForm 
                  buttonStyle={'inverse'}
                  customId={'header'}
                />
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}
