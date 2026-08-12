import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function LogoutButton() {

  const navigate = useNavigate();

  const handleLogout = async () => {

    try {

      await signOut(auth);

      navigate("/", { replace: true });

    } catch (error) {

      console.log("Logout error:", error);

    }

  };

  return (
  <LogoutButton />
  );
}

export default LogoutButton;