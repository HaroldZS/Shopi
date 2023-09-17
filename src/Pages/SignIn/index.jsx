import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShopiCartContext } from "../../Context";

function SignIn() {
  const { account, setSignOut, setAccount } = useContext(ShopiCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  const localStorageAccount = localStorage.getItem("account");
  const parsedAccount = JSON.parse(localStorageAccount);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = account
    ? Object.keys(account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSignIn = () => {
    localStorage.setItem("sign-out", JSON.stringify(false));
    setSignOut(false);

    return <Navigate replace to={"/"} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    localStorage.setItem("account", JSON.stringify(data));
    setAccount(data);

    handleSignIn();
  };

  return (
    <Layout>
      <h1 className="font-medium text-xl text-center mb-6 w-80">Welcome!</h1>
      {view === "create-user-info" ? (
        <form ref={form} className="flex flex-col gap-4 w-80">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-light text-sm">
              Your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={parsedAccount?.name}
              placeholder="Harold"
              className="rounded-lg broder border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-light text-sm">
              Your email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              defaultValue={parsedAccount?.email}
              placeholder="haroldzs@gmail.com"
              className="rounded-lg broder border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-light text-sm">
              Your password:
            </label>
            <input
              type="text"
              id="password"
              name="password"
              defaultValue={parsedAccount?.password}
              placeholder="******"
              className="rounded-lg broder border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
            />
          </div>
          <Link to="/">
            <button
              className="bg-black text-white w-full rounded-lg py-3"
              onClick={() => createAnAccount()}
            >
              Create
            </button>
          </Link>
        </form>
      ) : (
        <div className="flex flex-col w-80">
          <p>
            <span className="font-ligth text-sm">Email: </span>
            <span>{parsedAccount?.email}</span>
          </p>
          <p>
            <span className="font-light text-sm">Password: </span>
            <span>{parsedAccount?.password}</span>
          </p>
          <Link to="/">
            <button
              className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
              onClick={() => handleSignIn()}
              disabled={!hasUserAnAccount}
            >
              Log In
            </button>
          </Link>
          <div className="text-center">
            <a
              className="font-light text-xs underline underline-offset-4"
              href="/"
            >
              Forgot my password
            </a>
          </div>
          <button
            onClick={() => setView("create-user-info")}
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            disabled={hasUserAnAccount}
          >
            Sign Up
          </button>
        </div>
      )}
    </Layout>
  );
}

export default SignIn;
