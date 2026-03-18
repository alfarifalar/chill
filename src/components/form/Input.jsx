import React from 'react'

function Input({
  id,
  name,
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  className,
  error,
}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="form-label mb-2">
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`form-control  ${className || ''} ${error ? 'is-invalid' : ''}`}
        required
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}

export default Input
