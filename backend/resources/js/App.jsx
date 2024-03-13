import { RouterProvider } from 'react-router-dom';
import { AuthProvider }   from '@/contexts/AuthContext';
import React              from 'react';
import router             from '@/router';

export default function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
