import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../Doctor/Home.css';
import LogoutButton from '../LogoutButton';
const Home = () => {
    // const navigate = useNavigate(); // Use navigate for redirection

       return (
        <div className="home-container">
            
            <div className="content">
            <LogoutButton />
                <h1>Welcome to the Home Page!</h1>
                <p>Your one-stop solution for managing patient records and appointments.</p>
                <div className="dashboard-cards">
                    <div className="card">
                        <h3>Patient Records</h3>
                        <p>Manage all your patient records efficiently.</p>
                    </div>
                    <div className="card">
                        <h3>Appointments</h3>
                        <p>View and manage your upcoming appointments.</p>
                    </div>
                    <div className="card">
                        <h3>Prescriptions</h3>
                        <p>Manage prescriptions for your patients.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;