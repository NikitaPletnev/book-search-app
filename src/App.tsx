import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import { useAuth } from './contexts/AuthContext';

const App: React.FC = () => {
    const { user } = useAuth();
    
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/search"
                    element={user ? <SearchPage /> : <Navigate to="/login" />}
                />
                <Route path="*" element={<Navigate to={user ? "/search" : "/login"} />} />
            </Routes>
        </Router>
    );
};

export default App;
