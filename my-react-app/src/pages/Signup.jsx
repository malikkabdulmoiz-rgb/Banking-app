import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      // Create Firebase Authentication account
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      const user = userCredential.user;

      // Generate account number
      const accountNumber =
        "ACC-" +
        Math.floor(100000 + Math.random() * 900000);

      // Create customer profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: name,
        email: email,
        role: "customer",
        accountNumber: accountNumber,
        balance: 0,
        status: "active",
        createdAt: new Date()
      });

      alert("Customer account created successfully!");

      // Go to customer dashboard
      navigate("/customer");

    } catch (error) {
      console.log("Signup error:", error);

      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email address.");
      } else if (error.code === "auth/weak-password") {
        alert("Password is too weak.");
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          🏦
        </div>

        <h1>Create Account</h1>

        <p>
          Create your customer banking account
        </p>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
          />

          <button type="submit">
            Create Customer Account
          </button>

        </form>

        <button
          type="button"
          onClick={() => navigate("/")}
          style={{
            marginTop: "12px",
            background: "transparent",
            color: "#00ffff",
            border: "1px solid #00ffff"
          }}
        >
          Back to Login
        </button>

      </div>

    </div>
  );
}

export default Signup;