import React from "react";
import { useAuth } from "./Context/AuthProvider";

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <button onClick={logout} style={logoutButtonStyles}>
      Logout
    </button>
  );
};

// Basic inline styles for the button, you can modify this
const logoutButtonStyles = {
  padding: "10px 20px",
  backgroundColor: "#f00",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

export default LogoutButton;
