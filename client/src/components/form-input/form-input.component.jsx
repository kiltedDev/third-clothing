import React from 'react';

import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, length, ...otherProps }) => (
  <div className='group'>
    <input
      className='form-input'
      onChange={ handleChange }
      { ...otherProps }
    />
  {
    console.log(otherProps)
  }
    {
      label ?
      (<label className={`${ length ? 'shrink': ''} form-input-label`}>
        { label }
      </label>)
      : null
    }
  </div>
)

export default FormInput;
