import React, { useState, useRef } from 'react';
import Form from '../../components/form';

export default function SearchForm(props) {
  const {
    buttonStyle,
  } = props;
  const formInput = useRef(null);
  const [searchValue, setSearchValue] = useState('');

  const changeHandler = (event) => {
    const value = event.target.value;
    
    setSearchValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const [term, location] = searchValue.split(',');
    let city = 'Burlington';
    let state = 'MA';

    if (location) {
      [city, state] = location.trim().split(' ');
    }

    const url = `/search/${term}?city=${city}&state=${state}`;

    window.location = url;
  };

  return (
    <>
      <Form 
        handleSubmit={handleSubmit}
        formInputRef={formInput}
        changeHandler={changeHandler}
        placeholder={'Nicks, Lexington MA'}
        buttonText={'Submit'}
        buttonStyle={buttonStyle ? buttonStyle : undefined}
      />
    </>
  );
}
