import { object } from 'prop-types';
import React from 'react';
import Text from '../text';
import styles from './resultCard.module.scss';

export default function ResultCard(props) {
  const {
    data,
  } = props;

  console.log({data});

  const {
    display_phone,
    image_url,
    name,
    price,
    location,
    rating,
  } = data;

  // TODO what else should I show here???
  console.log({location});

  return (
    <>
      <Text
        content={`${name} - ( ${price} )`}
        type={'h3'}
      />
      <Text
        content={`Phone: ${display_phone}`}
        type={'h4'}
      />
      <Text
        content={`Rating: ${rating} star${rating > 1 ? 's' : ''}`}
        type={'h4'}
      />
      {location?.display_address.map((address, key) => {
        return (
          <Text
            key={`${address}-${key}`} 
            content={address}
          />
        );
      })}
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
