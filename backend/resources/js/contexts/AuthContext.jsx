
import {
    createContext,
    useContext,
    useState
} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(user, callback = () => {}) {
        setUser(user);
        callback();
    }

    function logout(callback = () => {}) {
        setUser(null);
        callback();
    }

    const value = { login, logout, user };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
