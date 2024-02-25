import React from 'react';

export default function Button({ text, color, strength, onClick}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-4 py-1.5 rounded-md bg-${color}-${strength} hover:bg-${color}-${strength + 100} text-slate-50`}
    >
      {text}
    </button>
  );
}
