import React from 'react'

const InputField = ({labelName,aria_describedby, htmlFor, type, id, name, onChange,minLength}) => {
  return (

          <div className="mb-3">
            <label htmlFor={htmlFor} className="form-label">
              {labelName}
            </label>
            <input
              type={type}
              className="form-control"
              id={id}
              name={name}
              onChange={onChange}
              aria-describedby={aria_describedby}
              minLength={minLength}
              required
            />
          </div>
  )
}

export default InputField