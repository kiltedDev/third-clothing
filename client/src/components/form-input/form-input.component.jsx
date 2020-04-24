import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles.jsx';


export const FormInput = ({ handleChange, label, length, ...otherProps }) => (
  <GroupContainer className='group'>
    <FormInputContainer
      className='form-input'
      onChange={ handleChange }
      { ...otherProps }
    />
    {
      label ?
      (<FormInputLabel
        className={`${ length ? 'shrink': ''} form-input-label`}
        children={ label }
      />)
      : null
    }
  </GroupContainer>
)

export default FormInput;
