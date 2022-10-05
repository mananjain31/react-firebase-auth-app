import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "utils/FirebaseConfigs";
import withLayout from "utils/withLayout";

const DashBoard = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user) navigate("/auth/login");
  if (loading)
    return <h1 className="text-4xl text-gray-800">Loading ...</h1>;
  return (
    <div>
      <h1 className="text-4xl text-gray-800">Welcome To the Dashboard</h1>
      <h2 className="text-xl text-gray-700 mt-4">
        I have Nothing to share here
      </h2>
      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta
        dicta laudantium! Reprehenderit impedit molestiae quam voluptatem harum
        dicta qui exercitationem, cumque nemo voluptas ullam nobis! Quasi rerum
        suscipit illo.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta
        dicta laudantium! Reprehenderit impedit molestiae quam voluptatem harum
        dicta qui exercitationem, cumque nemo voluptas ullam nobis! Quasi rerum
        suscipit illo.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi soluta
        dicta laudantium! Reprehenderit impedit molestiae quam voluptatem harum
        dicta qui exercitationem, cumque nemo voluptas ullam nobis! Quasi rerum
        suscipit illo.
      </p>
    </div>
  );
};

export default withLayout(DashBoard);
