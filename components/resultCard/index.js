import { object } from 'prop-types';
import React from 'react';
import styles from './resultCard.module.scss';

export default function ResultCard(props) {
  const {
    data,
  } = props;

  const {
    display_phone,
    image_url,
  } = data;

  return (
    <>
      <p>Phone: {display_phone}</p>
      {image_url && (
        <img
          className={styles.image} 
          src={image_url} 
        />
      )}
    </>
  );
}

ResultCard.propTypes = {
  data: object.isRequired,
};
