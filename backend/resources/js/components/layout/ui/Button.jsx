import { forwardRef } from 'react';

export default forwardRef(({
    className = '',
    theme,
    children,
    loading,
    ...props
}, ref) => {
    const baseClass = [`border border-1 px-4 py-1 rounded-md w-full md:w-auto font-medium ${loading ? 'loading': ''}`];

    const themes = {
        green : ['bg-green-500 border-green-600 text-slate-50 hover:bg-green-600 hover:border-green-700'],
        lime  : ['bg-lime-500 border-lime-600 text-slate-50 hover:bg-lime-600 hover:border-lime-700'],
        light : ['bg-slate-200 border-slate-300 text-slate-950 hover:bg-slate-300 hover:border-slate-400'],
        red   : ['bg-red-500 border-red-600 text-slate-50 hover:bg-red-600 hover:border-red-700'],
        blue  : ['bg-blue-500 border-blue-600 text-slate-50 hover:bg-blue-600 hover:border-blue-700'],
        sky   : ['bg-sky-500 border-sky-600 text-slate-50 hover:bg-sky-600 hover:border-sky-700'],
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
        <button
            className={finalClass}
            {...props}
            ref={ref}
        >{children}</button>
    );
});
