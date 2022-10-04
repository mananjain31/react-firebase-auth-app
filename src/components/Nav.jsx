import { Link } from "react-router-dom";
import { auth } from "utils/FirebaseConfigs";
import { useAuthState } from "react-firebase-hooks/auth";

const Nav = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex items-center justify-between py-2">
      <Link to="/">
        <h1>Home</h1>
      </Link>
      {user ? (
        <Link to="/logout">
          <button
            className="
            flex items-center gap-3
            text-lg text-white bg-cyan-700 py-2 rounded-xl px-4"
          >
            <img className="w-8 rounded-full" src={user.photoURL} alt="user" />
            <span>{user.email}</span>
          </button>
        </Link>
      ) : (
        <Link to="/login">
          <button className="text-lg text-white bg-blue-700 py-2 rounded-xl px-4">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Nav;
