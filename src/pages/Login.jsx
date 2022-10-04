import Layout from "components/Layout";
import {auth, provider} from "utils/FirebaseConfigs"
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signup = async () => {
    try{
      const data = await signInWithPopup(auth,provider);
      console.log(data);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <Layout>
      <div className="shadow-xl p-4 rounded-md">
        <h1 className="text-4xl text-gray-800">Login Page</h1>
        <h2 className="text-xl text-gray-700 mt-4">
          Please Login through any of the below methods
        </h2>
        <div className="text-white text-lg pt-4 flex gap-2">
          <button onClick={signup} className="bg-gray-700 px-3 py-1 rounded-md">Google</button>
          <button className="bg-gray-700 px-3 py-1 rounded-md">Facebook</button>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
