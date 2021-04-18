import React from 'react';
import { object } from 'prop-types';
import ResultCard from '../resultCard';

export default function ResultsContainer(props) {
  const {
    data,
  } = props;

  const {
    total,
    businesses,
    region,
  } = data;

  const topFive = businesses.filter( (business, index) => index <= 4);

  return (
    <>
      <p>Results: {total}</p>
      <p>Top 5</p>
      {topFive.map( (business) => {
        return (
          <ResultCard
            key={business.id}
            data={business}
          />
        );
      })}
    </>
  );
}

ResultsContainer.propTypes = {
  data: object.isRequired,
};
