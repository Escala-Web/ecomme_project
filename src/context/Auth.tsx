import { createContext, useEffect, useState, ReactNode } from "react";

interface UserLogin {
    email: string;
    password: string;
}

interface AuthContextType {
    login: UserLogin | null;
    setLogin: (user: UserLogin | null) => void;
    logout: () => void;
    role: string;
    setRole: (role: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [role, setRole] = useState<string>('');
    
    const [login, setLogin] = useState<UserLogin | null>(() => {
        const storedLogin = localStorage.getItem("auth");
        return storedLogin ? JSON.parse(storedLogin) : null;
    });

    function logout():any {
        setLogin(null);
        localStorage.removeItem("auth");
    }

    useEffect(() => {
        if (login) {
            localStorage.setItem("auth", JSON.stringify(login));
        } else {
            localStorage.removeItem("auth");
        }
    }, [login]);

    return (
        <AuthContext.Provider value={{ login, setLogin, logout, role, setRole }}>
            {children}
        </AuthContext.Provider>
    );
};
