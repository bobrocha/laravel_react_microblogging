import {
    createBrowserRouter
} from 'react-router-dom';

import React          from 'react';
import Register       from '@/pages/Register/Register';
import registerAction from '@/pages/Register/action';

const router = createBrowserRouter([
    {
        path     : '/',
        element  : <p>I am rootz</p>,
        children : [
        {
            path    : '/account',
            element : <p>My account</p>,
        },
        ],
    },
    {
        path    : '/register',
        element : <Register />,
        action  : registerAction,
    },
]);

export default router;
