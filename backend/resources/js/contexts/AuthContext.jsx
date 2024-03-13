import {
    createContext,
    useContext,
    useState,
    useEffect,
} from 'react';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const user = getLocalStorageUser();

        if(user) {
            setUser(user);
        }
    }, []);

    function login(user, callback = () => {}) {
        setLocalStorageUser(user);
        setUser(user);
        callback();
    }

    function logout(callback = () => {}) {
        destroyLocalStorageUser();
        setUser(null);
        callback();
    }

    function isAuthenticated() {
        if(user) {
            return user.authenticated;
        }

        return getLocalStorageUser()?.authenticated ?? false;
    }

    function getLocalStorageUser() {
        const user = localStorage.getItem('user');

        return user ? JSON.parse(user) : null
    }

    function setLocalStorageUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    function destroyLocalStorageUser() {
        if(getLocalStorageUser()) {
            localStorage.removeItem('user');
        }
    }

    const value = { login, logout, isAuthenticated, user };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
