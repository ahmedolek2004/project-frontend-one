// pages/LoginRegister.js
import { useState } from "react";

function LoginRegister() {
  const [mode, setMode] = useState("login"); // default mode: login

  const containerStyle = {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    color: "#f1f5f9",
    backgroundColor: "#1a202c",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    width: "100%",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#3182ce",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  const toggleButtonStyle = {
    background: "none",
    border: "none",
    color: "#63b3ed",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {mode === "login" ? "Login" : "Sign Up"}
      </h2>

      {mode === "login" ? (
        <form style={formStyle}>
          <div>
            <label>Email</label>
            <input type="email" required style={inputStyle} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      ) : (
        <form style={formStyle}>
          <div>
            <label>Name</label>
            <input type="text" required style={inputStyle} />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required style={inputStyle} />
          </div>
          <div>
            <label>Password</label>
            <input type="password" required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
      )}

      <hr style={{ margin: "20px 0", borderColor: "#2d3748" }} />

      {mode === "login" ? (
        <p style={{ textAlign: "center" }}>
          Don’t have an account?{" "}
          <button
            type="button"
            onClick={() => setMode("signup")}
            style={toggleButtonStyle}
          >
            Sign Up
          </button>
        </p>
      ) : (
        <p style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setMode("login")}
            style={toggleButtonStyle}
          >
            Login
          </button>
        </p>
      )}
    </div>
  );
}

export default LoginRegister;
