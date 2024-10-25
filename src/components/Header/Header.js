// import React from 'react';
// import './Header.css'; // Import your CSS file

// const Header = () => {
//     return (
//         <header className="header">
//             <div className="logo">Doctor's Portal</div>
//             <nav className="nav">
//                 <ul>
//                     <li><a href="/">Home</a></li>
//                     <li><a href="/doctors">All Doctors</a></li>
//                     <li><a href="/about">About</a></li>
//                     <li><a href="/contact">Contact</a></li>
//                     <li><a href="/signup">Signup</a></li>
//                     <li><a href="/login">Login</a></li>
//                 </ul>
//             </nav>
//         </header>
//     );
// };

// export default Header;
import { useState } from 'react'
import  styles from './Header.module.css';
import doctor from '../images/doctor.png'; 
import { Link } from 'react-router-dom';
function Header() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
 
    return (
      
        <header className="header">
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href="#home" className={`${styles.logo}`}>
                <img src={doctor} alt="Logo" className={styles.logoImage} />
            </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <Link to="/homepage" className={`${styles.navLink}`}>Home</Link>
            <Link to="/alldoctors" className={`${styles.navLink}`}>All Doctors</Link>
            <Link to="/contact" className={`${styles.navLink}`}>Contact</Link>
            <Link to="#home" className={`${styles.navLink}`}>Signup</Link>
            <Link to="#home" className={`${styles.navLink}`}>Admin Panel</Link>
  
              <Link>
                   {/* Create Account Button */}
           <button className={`${styles.button}`}>
                    Create account
                </button>
              </Link>
           
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
         
          </nav>
          
        </header>
        
     
    );
  }
  export default Header;