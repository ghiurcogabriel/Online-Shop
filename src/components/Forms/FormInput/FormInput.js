import React from 'react';
import './FormInput.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className='formRow'>
            {label && (
                <lab>
                    {label}
                </lab>
            )}

            <input className='formInput' onChange={handleChange} {...otherProps} />
        </div>
    )
}
export default FormInput;
