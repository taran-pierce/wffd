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
    formInputRef,
    placeholder,
    buttonText,
    buttonStyle,
  } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputText}
          type={'text'} 
          ref={formInputRef} 
          onChange={changeHandler}
          placeholder={placeholder}
        />
        <button 
          type={'submit'}
          className={buttonStyle ? styles[buttonStyle] : styles.button}
        >
          {buttonText}
        </button>
      </form>
    </>
  );
}

Form.defaultProps = {
  placeholder: 'Five Guys, Burlington MA',
  buttonText: 'Submit',
  buttonStyle: '',
};

Form.propTypes = {
  placeholder: string,
  buttonText: string,
  changeHandler: func.isRequired,
  handleSubmit: func.isRequired,
  formInputRef: object.isRequired,
  buttonStyle: string,
};
