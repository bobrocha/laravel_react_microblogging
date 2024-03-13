import { forwardRef, useState } from 'react';

export default forwardRef(({
    className = '',
    theme,
    children,
    ...props
}, ref) => {
    const [visible, setVisible] = useState(true);
    const baseClass             = [`relative border px-5 py-3 rounded-md notice ${visible ? 'block' : 'hidden'}`];

    const themes = {
        green     : ['bg-green-200 border-green-300 text-green-600'],
        lime      : ['bg-lime-200 border-lime-300 text-lime-600'],
        light     : ['bg-slate-200 border-slate-300 text-slate-600'],
        red       : ['bg-red-200 border-red-300 text-red-600'],
        blue      : ['bg-blue-200 border-blue-300 text-blue-600'],
        sky       : ['bg-sky-200 border-sky-300 text-sky-600'],
    };

    if(className) {
        baseClass.push(className);
    }

    if(!theme) {
        baseClass.push(themes.light);
    }
    else if(theme && Object.hasOwn(themes, theme)) {
        baseClass.push(themes[theme]);
    }

    const finalClass = baseClass.join(' ');
    return (
        <div
            className={finalClass}
            {...props}
            ref={ref}
        >
            {children}
            <CloseButton
                onClick={() => {
                    setVisible(!visible)
                }}
            />
        </div>
    );
});


function CloseButton({ onClick }) {
    return (
        <div
            className="absolute right-2 top-2 cursor-pointer"
            onClick={onClick}
        >X</div>
    );
}
