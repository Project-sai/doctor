
import './App.css';
import Login from './components/Login';
import Home from './components/Doctor/Home';
// import About from './components/Header/About';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Signup from './components/Signup';
import { BrowserRouter as Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Context/AuthProvider";
import ProtectedRoute from "./components/Context/ProtectedRoute";
import PatientPage from "./components/Patient/PatientHomePage";
import AdminHome from './components/Doctor/AdminHome';
import Header from './components/Header/Header';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import AllDoctors from './components/Header/AllDoctors';
import Doctorhomepage from './components/Doctor/Doctorhomepage'

function App() {
  // const myWidth = 240; // Define your drawer width here

  return (
  
    //   <>  
    //       <Routes>
    //           <Route path="/login" element={<Login />} />
    //           {/* Route for Signup */}
    //           <Route path="/signup" element={<Signup />} />
    //           {/* Protected Routes */}
    //           {/* Only accessible after logging in */}
    //           <Route path="/home" element={
    //               <>
    //                   <Navbar drawerWidth={myWidth} content={<Home />} />
    //               </>
    //           } />
    //           {/* About Page */}
    //           <Route path="/about" element={
    //               <>
    //                   <Navbar drawerWidth={myWidth} content={<About />} />
    //               </>
    //           } />
    //       </Routes>
    //   </>
    // <AuthProvider>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/Home"
    //       element={
    //         <ProtectedRoute allowedRoles={["Doctor"]}>
    //           <Home />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route
    //       path="/PatientHomePage"
    //       element={
    //         <ProtectedRoute allowedRoles={["patient"]}>
    //           <PatientPage />
    //         </ProtectedRoute>
    //       }
    //     />
    //     <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />
    //   </Routes>
    // </AuthProvider>

<AuthProvider>
<Header />
  <Routes>
  <Route path="/homepage" element={<Doctorhomepage />} />
  {/* <Route path="/home" element={<Home />} /> */}
  <Route path="/about" element={<About />} />
  <Route path="/alldoctors" element={<AllDoctors />} />
  <Route path="/contact" element={<Contact />} />
 
   <Route path="/login" element={<Login />} />
   <Route
      path="/Home"
      element={
        <ProtectedRoute allowedRoles={["doctor"]}>
          <Home />
        </ProtectedRoute>
      }
    />
    <Route
      path="/PatientHomePage"
      element={
        <ProtectedRoute allowedRoles={["patient"]}>
          <PatientPage />
        </ProtectedRoute>
      }
    />
     <Route
      path="/AdminHome"
      element={
        <ProtectedRoute allowedRoles={["admin"]}>
          <AdminHome />
        </ProtectedRoute>
      }
    />
    <Route path="/unauthorized" element={<h2>Unauthorized</h2>} />
  </Routes>
</AuthProvider>

  );
}

export default App;


