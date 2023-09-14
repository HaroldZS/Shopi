import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopiCartContext } from "../../Context";
import OrderCard from "../OrderCard";

const CheckOutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShopiCartContext);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      } flex-col fixed bg-white right-0 border top-[68px] border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutSideMenu()}
          ></XMarkIcon>
        </div>
      </div>
      <div className="px-6">
        {cartProducts.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
    </aside>
  );
};

export default CheckOutSideMenu;
