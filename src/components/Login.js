import { useState } from "react";
import { useAuth } from "./Context/AuthProvider";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // For loading state
    const [error, setError] = useState(null); // For error messages
    const { login } = useAuth();

    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null); // Reset error before login attempt
    
      try {
        await login({ username, password });
      } catch (err) {
        setError(err.response?.data?.data || "Login failed! Please check your credentials."); // Display error from the backend if available
      } finally {
        setLoading(false);
      }
    };
    

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>} {/* Error message */}

            <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? <span className="spinner"></span> : "Login"} {/* Loading spinner */}
                </button>
            </form>
        </div>
    );
};

export default Login;
