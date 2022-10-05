import Layout from "components/Layout";
import { auth, provider } from "utils/FirebaseConfigs";
import { signInWithPopup } from "firebase/auth";
import withLayout from "utils/withLayout";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const data = await auth.signOut();
      console.log(data);
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="shadow-xl p-4 rounded-md">
      <h1 className="text-4xl text-gray-800">Logout Page</h1>
      <h2 className="text-xl text-gray-700 mt-4">
        Click below button to logout
      </h2>
      <div className="text-white text-lg pt-4 flex gap-2">
        <button onClick={logout} className="bg-gray-700 px-3 py-1 rounded-md">
          Logout
        </button>
      </div>
    </div>
  );
};

export default withLayout(Logout);
