import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(savedUser);
    }
  }, []);
const login = async (credentials) => {
  try {
    const response = await axios.post(
      "http://192.168.0.181:8000/login/",
      credentials,
      {
        headers: {
          'Content-Type': 'application/json', // Ensure this header is set
          'Accept': 'application/json',
        }
      }
    );
    
    const { token, type } = response.data;
    setToken(token);
    setUser({ type: type.toLowerCase() });
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify({ type: type.toLowerCase() }));
  
    if (type.toLowerCase() === "doctor") {
      navigate("/Home");
    } else if (type.toLowerCase() === "patient") {
      navigate("/PatientHomePage");
    } else if (type.toLowerCase() === "admin") {
      navigate("/AdminHome");
    }
  } catch (error) {
    console.error("Login failed", error);
    throw error; // Re-throw the error to be handled by the component
  }
};

const logout = () => {
  setToken(null);
  setUser(null);
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  navigate("/login", { replace: true });
};
  const value = {
    user,
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};






