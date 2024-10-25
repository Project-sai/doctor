import React from 'react';
import './Home.css'; // Make sure to create this CSS file
import doctorImage from '../images/doctor2.png';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Doctorhomepage = () => {
    return (
        <><div className="hero-section">
            <div className="hero-content">
                <h1>Book Appointment With Trusted Doctors</h1>
                <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                <div className="profile-pics">
                    <img src="https://i.pravatar.cc/50?img=1" alt="Profile 1" className="profile-pic" />
                    <img src="https://i.pravatar.cc/50?img=2" alt="Profile 2" className="profile-pic" />
                    <img src="https://i.pravatar.cc/50?img=3" alt="Profile 3" className="profile-pic" />
                </div>

                <button className="cta-button">Book appointment <ArrowRightAltIcon /></button>
            </div>
            <div className="hero-image">
                <img src={doctorImage} alt="Doctors" />
            </div>
        </div><div className="container">
                {/* Find by Speciality Section */}
                <section className="speciality-section">
                    <h2>Find by Speciality</h2>
                    <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                    <div className="speciality-list">
                        <div className="speciality-item">
                            <img src="https://img.icons8.com/ios-filled/50/000000/stethoscope.png" alt="General Physician" />
                            <p>General Physician</p>
                        </div>
                        <div className="speciality-item">
                            <img src="https://img.icons8.com/ios-filled/50/000000/pregnant.png" alt="Gynecologist" />
                            <p>Gynecologist</p>
                        </div>
                        <div className="speciality-item">
                            <img src="https://img.icons8.com/ios-filled/50/000000/skin.png" alt="Dermatologist" />
                            <p>Dermatologist</p>
                        </div>
                        <div className="speciality-item">
                            <img src="https://img.icons8.com/ios-filled/50/000000/baby.png" alt="Pediatricians" />
                            <p>Pediatricians</p>
                        </div>
                        <div className="speciality-item">
                            <img src="https://img.icons8.com/ios-filled/50/000000/brain.png" alt="Neurologist" />
                            <p>Neurologist</p>
                        </div>
                        <div className="speciality-item">
                            <img src="https://img.icons8.com/ios-filled/50/000000/stomach.png" alt="Gastroenterologist" />
                            <p>Gastroenterologist</p>
                        </div>
                    </div>
                </section>

                {/* Top Doctors to Book Section */}
                <section className="doctor-list-section">
                    <h2>Top Doctors to Book</h2>
                    <p>Simply browse through our extensive list of trusted doctors.</p>
                    <div className="doctor-list">
                        {/* Doctor Item */}
                        {doctors.map((doctor) => (
                            <div className="doctor-item" key={doctor.name}>
                                <div className="doctor-info">
                                    <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                                    <div className="doctor-details">
                                        <h4>{doctor.name}</h4>
                                        <p>{doctor.speciality}</p>
                                    </div>
                                </div>
                                <div className="availability">Available</div>
                            </div>
                        ))}
                    </div>
                    <Link to="/alldoctors">
                    <button className="ctc-button">
                            More
                        </button>
                    </Link>
                </section>
                <div className="bnt">
                <button className="ctb-button">Book Appointment <ArrowRightAltIcon /></button>
                </div>

                {/* Footer Section */}
                
                <footer className="footer">
                    <div className="company-info">
                        <h3>COMPANY</h3>
                        <p>Home</p>
                        <p>About us</p>
                        <p>Delivery</p>
                        <p>Privacy policy</p>
                    </div>
                    <div className="contact-info">
                        <h3>GET IN TOUCH</h3>
                        <p>+0-000-000-000</p>
                        <p>greatstackdev@gmail.com</p>
                        <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
                    </div>
                </footer>
            </div></>
    
    );
};
// Dummy Doctor Data
const doctors = [
    { name: 'Dr. Richard James', speciality: 'General Physician', image: 'https://i.pravatar.cc/100?img=1' },
    { name: 'Dr. Emily Larson', speciality: 'Gynecologist', image: 'https://i.pravatar.cc/100?img=2' },
    { name: 'Dr. Sarah Patel', speciality: 'Dermatologist', image: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Dr. Christopher Lee', speciality: 'Pediatricians', image: 'https://i.pravatar.cc/100?img=4' },
    { name: 'Dr. Jennifer Garcia', speciality: 'Neurologist', image: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Dr. Andrew Williams', speciality: 'Gastroenterologist', image: 'https://i.pravatar.cc/100?img=6' },
];

export default Doctorhomepage;