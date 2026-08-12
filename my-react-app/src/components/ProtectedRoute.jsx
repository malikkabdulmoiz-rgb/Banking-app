import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth, db } from "../firebase";

function ProtectedRoute({ children, allowedRole }) {

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {

        if (!user) {
          setAuthorized(false);
          setLoading(false);
          return;
        }

        try {

          const userDoc = await getDoc(
            doc(db, "users", user.uid)
          );

          if (!userDoc.exists()) {
            setAuthorized(false);
            setLoading(false);
            return;
          }

          const userData = userDoc.data();

          if (userData.role === allowedRole) {
            setAuthorized(true);
          } else {
            setAuthorized(false);
          }

        } catch (error) {

          console.log("Role check error:", error);
          setAuthorized(false);

        }

        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, [allowedRole]);


  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Checking authentication...</p>
      </div>
    );
  }


  if (!authorized) {
    return <Navigate to="/" replace />;
  }


  return children;
}

export default ProtectedRoute;