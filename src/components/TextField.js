import React from 'react';

const TextField = ({ label, inputProps, onChange, value , id}) => {
  return (
    <div className='form-group'>
      <label className='mb-3' style={{ color: 'red' }} htmlFor={id}>{label}</label>
      <input
        id={id}
        className='form-control border border-success'
        {...inputProps}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default TextField;