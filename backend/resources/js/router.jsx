import {
    createBrowserRouter
} from 'react-router-dom';

import Root           from '@/pages/Root/Root';
import Register       from '@/pages/Register/Register';
import registerAction from '@/pages/Register/action';
import Login          from '@/pages/Login/Login';
import loginAction    from '@/pages/Login/action';
import ProtectedRoute from '@/routes/ProtectedRoute';

const router = createBrowserRouter([
    {
        path    : '/',
        element : <Root />,
        children: [
            {
                path   : '/account',
                element: <ProtectedRoute><p>My account</p></ProtectedRoute>,
            },
            {
                path   : '/user',
                element: <ProtectedRoute><p>My user</p></ProtectedRoute>,
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
