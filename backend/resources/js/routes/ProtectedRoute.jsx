import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export default function ProtectedRoute({ children }) {
    const auth            = useAuth();
    const isAuthenticated = auth.isAuthenticated();

    return (
        !isAuthenticated ?
        <Navigate
            to="/login"
            replace={true}
        />
        : children
    );
}
