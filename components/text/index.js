import React from 'react';
import {
  string,
} from 'prop-types';
import styles from './text.module.scss';

export default function Text(props) {
  const {
    content,
    type,
  } = props;

  // todo add more elements as needed
  const TextElement = () => {
    if (type === 'h1') {
      return <h1>{content}</h1>;
    }

    return <p>{content}</p>;
  };

  return (
    <div className={styles.text}>
      <TextElement />
    </div>
  );
}

Text.defaultProps = {
  type: 'p',
};

Text.propTypes = {
  content: string.isRequired,
  type: string,
};
