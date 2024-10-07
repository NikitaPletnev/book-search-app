import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface HeaderProps {
    avgSearchDuration: number;
}

const Header: React.FC<HeaderProps> = ({ avgSearchDuration }) => {
    const { user, logout } = useAuth();
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Book Search Application
                </Typography>
                <Typography variant="body1" style={{ marginRight: '20px' }}>
                    Avg Search Time: {avgSearchDuration.toFixed(2)} ms
                </Typography>
                {user ? (
                    <>
                        <Typography variant="body1" style={{ marginRight: '10px' }}>
                            Welcome, {user}
                        </Typography>
                        <Button color="inherit" onClick={logout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button color="inherit">Login</Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
