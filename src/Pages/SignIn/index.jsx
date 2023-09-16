import Layout from "../../Components/Layout";
import { initializeLocalStorage } from "../../Context";

function SignIn() {
  return (
    <Layout>
      Sign In!
      <button
        onClick={() => initializeLocalStorage()}
        className="w-80 h-10 bg-black text-white items-center rounded-lg"
      >
        Save
      </button>
    </Layout>
  );
}

export default SignIn;
