import React, { useState, useRef } from 'react';
import { string } from 'prop-types';
import Form from '../../components/form';

export default function SearchForm(props) {
  const {
    buttonStyle,
    customId,
  } = props;

  // refs for form inputs
  const formInputPlaceRef = useRef(null);
  const formInputLocationRef = useRef(null);

  // state values for form
  const [placeValue, setPlaceValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  // change handler for form
  const changeHandler = (event) => {
    const { target } = event;
    const { value } = target;

    const isPlaceData = target.name.includes('place');
    const isLocationData = target.name.includes('location');

    if (isPlaceData) {
      setPlaceValue(value);
    }

    if (isLocationData) {
      setLocationValue(value);
    }
  };


  // TODO the form needs to have a toggle to leverage the different Yelp API endpoints
  // https://www.yelp.com/developers/documentation/v3
  // submit handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    const [city, state] = locationValue?.split(' ');

    const url = `/search/${placeValue}?city=${city}&state=${state}`;

    window.location = url;
  };
  return (
    <>
      <Form 
        handleSubmit={handleSubmit}
        formInputPlaceRef={formInputPlaceRef}
        formInputLocationRef={formInputLocationRef}
        changeHandler={changeHandler}
        placePlaceholder={'Nicks'}
        locationPlaceholder={'Lexington MA'}
        buttonText={'Submit'}
        customId={customId}
        buttonStyle={buttonStyle ? buttonStyle : undefined}
      />
    </>
  );
}

SearchForm.defaultProps = {
  buttonStyle: '',
  customId: '',
};

SearchForm.propTypes = {
  buttonStyle: string,
  customId: string,
};
