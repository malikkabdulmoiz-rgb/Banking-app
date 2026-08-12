import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase Authentication
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      // Get user profile from Firestore
      const userDoc = await getDoc(
        doc(db, "users", user.uid)
      );

      if (!userDoc.exists()) {
        alert("User profile not found.");
        return;
      }

      const userData = userDoc.data();

      console.log("Logged user:", userData);

      // Role based redirect
      if (userData.role === "customer") {
        navigate("/customer");

      } else if (userData.role === "employee") {
        navigate("/employee");

      } else if (userData.role === "manager") {
        navigate("/manager");

      } else {
        alert("Invalid user role.");
      }

    } catch (error) {
      console.log(error);

      if (error.code === "auth/invalid-credential") {
        alert("Email or password is incorrect.");
      } else {
        alert("Login failed. Please try again.");
      }
    }
    navigate("/customer");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🏦
        </div>

        <h1>Welcome Back</h1>

        <p>
          Sign in to your Banking Management System
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <button
          type="button"
          onClick={() => navigate("/signup")}
          style={{
            marginTop: "12px",
            background: "transparent",
            color: "#ff00ff",
            border: "1px solid #ff00ff"
          }}
        >
          Create Customer Account
        </button>

      </div>

    </div>
  );
}

export default Login;