import React from 'react';

export default function Button({ children, type = 'button', onClick}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`border px-4 py-1.5 rounded-md bg-${color}-${strength} hover:bg-${color}-${strength + 100} text-slate-50`}
        >{children}</button>
    );
}
