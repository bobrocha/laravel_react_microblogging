import React from 'react';


export default function Input({
    type = 'text',
    name,
    placeholder = '',
    onChange = () => {},
    required = false,
    disabled = false
}) {
    return (
        <>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className="block border w-full p-1.5 rounded-md"
            required={required}
            disabled={disabled}
        />
        </>
    );
}
