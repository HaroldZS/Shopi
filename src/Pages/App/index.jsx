import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import {
  ShopiCartProvider,
  initializeLocalStorage,
  ShopiCartContext,
} from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import CheckOutSideMenu from "../../Components/CheckoutSideMenu";
import "./App.css";

const AppRoutes = () => {
  const { signOut, account } = useContext(ShopiCartContext);

  const parsedSignOut = JSON.parse(localStorage.getItem("sign-out"));
  const isUserSignOut = signOut || parsedSignOut;

  const localStorageAccount = localStorage.getItem("account");
  const parsedAccount = JSON.parse(localStorageAccount);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = account
    ? Object.keys(account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const routes = useRoutes([
    {
      path: "/",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/:category",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />,
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);
  return routes;
};

const App = () => {
  initializeLocalStorage();

  return (
    <ShopiCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShopiCartProvider>
  );
};

export default App;
