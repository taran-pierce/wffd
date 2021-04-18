import React from 'react';
import { 
  string,
  func,
  object
} from 'prop-types';
import styles from './form.module.scss';

export default function Form(props) {
  const {
    handleSubmit,
    changeHandler,
    formInputPlaceRef,
    formInputLocationRef,
    placePlaceholder,
    locationPlaceholder,
    buttonText,
    buttonStyle,
    customId,
  } = props;

  const placeId = customId ? `${customId}-place` : 'place';
  const locationId = customId ? `${customId}-location` : 'location';

  return (
    <>
      <form 
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <fieldset className={styles.formRow}>
          <label htmlFor={placeId}>Place:</label>
          <input
            className={styles.inputText}
            type={'text'}
            name={placeId}
            id={placeId}
            ref={formInputPlaceRef} 
            onChange={changeHandler}
            placeholder={placePlaceholder}
          />
        </fieldset>
        <fieldset className={styles.formRow}>
          <label htmlFor={locationId}>Location:</label>
          <input 
            className={styles.inputText}
            type={'text'}
            name={locationId}
            id={locationId}
            ref={formInputLocationRef}
            onChange={changeHandler}
            placeholder={locationPlaceholder}
          />
        </fieldset>
        <fieldset className={styles.buttonRow}>
          <button 
            type={'submit'}
            className={buttonStyle ? styles[buttonStyle] : styles.button}
          >
            {buttonText}
          </button>
        </fieldset>
      </form>
    </>
  );
}

Form.defaultProps = {
  placePlaceholder: 'Five Guys',
  locationPlaceholder: 'Burlington MA',
  buttonText: 'Submit',
  buttonStyle: '',
  customId: '',
};

Form.propTypes = {
  placePlaceholder: string,
  buttonText: string,
  changeHandler: func.isRequired,
  handleSubmit: func.isRequired,
  formInputPlaceRef: object.isRequired,
  formInputLocationRef: object.isRequired,
  buttonStyle: string,
  locationPlaceholder: string,
  customId: string,
};
