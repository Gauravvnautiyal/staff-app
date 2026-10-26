import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import './Login.css'

function Profile() {
    const { currentuser } = useContext(UserContext);

    if (!currentuser) {
        return (
            <div className="head">
                <div className="login-style">
                    <h2>You are not logged in</h2>
                    <Link to="/login">Go to Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="head">
            <div className="login-style">
                <h1>Profile</h1>
                {currentuser.photoURL && (
                    <img
                        src={currentuser.photoURL}
                        alt="profile"
                        height="120"
                        width="120"
                        style={{ borderRadius: "50%" }}
                    />
                )}
                <h2>{currentuser.displayName || "No name set"}</h2>
                <p>Email: {currentuser.email}</p>
            </div>
        </div>
    );
}

export default Profile;
