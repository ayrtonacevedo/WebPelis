import "./Profile.css";
import { useAuth } from "../../context/authContext";
import imgProfile from "../../components/assets/perfil.webp";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spiner/Spinner";

const Profile = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signout();
    navigate("/home");
  };

  return (
    <div className="profile-container">
      {user ? (
        <div className="profile">
          <img src={user.photoURL ? user.photoURL : imgProfile}></img>
          <h2>Welcome</h2>
          <h1>{user.displayName ? user.displayName : user.email}</h1>
          <button type="button" className="btn-signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <div className="profile">
          <p>
            To view your profile, you need to sign in or register.
            <br />
            Please click on one of the following links:
          </p>
          <div className="links">
            <a href="/login">Sign In</a> | <a href="/signUp">Sign Up</a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
