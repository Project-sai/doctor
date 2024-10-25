import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const Navigation = () => {
    const { user } = useAuth();

    return (
        <nav>
            {user?.type === 'doctor' && (
                <>
                    <Link to="/doctor/home">Home</Link>
                    <Link to="/doctor/profile">Profile</Link>
                    <Link to="/doctor/appointments">Appointments</Link>
                </>
            )}
            {user?.type === 'patient' && (
                <>
                    <Link to="/patient/home">Home</Link>
                    <Link to="/patient/profile">Profile</Link>
                    <Link to="/patient/appointments">Appointments</Link>
                </>
            )}
        </nav>
    );
};

export default Navigation;