import {
    createBrowserRouter
} from 'react-router-dom';

import Register       from '@/pages/Register/Register';
import registerAction from '@/pages/Register/action';
import Login          from '@/pages/Login/Login';
import loginAction    from '@/pages/Login/action';

const router = createBrowserRouter([
    {
        path    : '/',
        element : <p>I am rootz</p>,
        children: [
            {
                path   : '/account',
                element: <p>My account</p>,
            },
        ],
    },
    {
        path   : '/register',
        element: <Register />,
        action : registerAction,
    },
    {
        path   : '/login',
        element: <Login />,
        action : loginAction,
    }
]);

export default router;
