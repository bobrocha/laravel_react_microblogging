import {
    createBrowserRouter
} from 'react-router-dom';

import Root           from '@/pages/Root/Root';
import Register       from '@/pages/Register/Register';
import registerAction from '@/pages/Register/action';
import Login          from '@/pages/Login/Login';
import loginAction    from '@/pages/Login/action';

const router = createBrowserRouter([
    {
        path    : '/',
        element : <Root />,
        children: [
            {
                path   : '/account',
                element: <p>My account</p>,
            },
            {
                path   : '/user',
                element: <p>My user</p>,
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
