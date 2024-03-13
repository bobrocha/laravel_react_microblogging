import { forwardRef } from 'react';

export default forwardRef(({
    className = '',
    error = false,
    ...props
}, ref) => {
    const baseClass = [`block border w-full p-1.5 rounded-md`];

    if(className) {
        baseClass.push(className);
    }

    if(error) {
        baseClass.push('border-red-500 outline-none focus:shadow-lg focus:shadow-red-500/25');
    }

    const finalClass = baseClass.join(' ');

    return (
        <>
            <input
                className={finalClass}
                {...props}
                ref={ref}
            />
        </>
    );
});
