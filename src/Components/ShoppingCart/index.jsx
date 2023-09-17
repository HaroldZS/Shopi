import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { ShopiCartContext } from "../../Context";

const ShoppingCart = () => {
  const { count, openCheckout, closeProductDetail } =
    useContext(ShopiCartContext);

  const openCheckoutSideMenu = () => {
    openCheckout();
    closeProductDetail();
  };

  return (
    <div
      className="relative flex gap-0.5 items-center"
      onClick={() => openCheckoutSideMenu()}
    >
      <ShoppingBagIcon className="w-6 h-6 fill-none stroke-black cursor-pointer" />
      <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-white">
        {count}
      </div>
    </div>
  );
};

export default ShoppingCart;
