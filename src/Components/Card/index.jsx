import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShopiCartContext } from "../../Context";

const Card = ({ data }) => {
  const {
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    setCartProducts,
    cartProducts,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
  } = useContext(ShopiCartContext);
  const showProduct = (productDetail) => {
    closeCheckoutSideMenu();
    openProductDetail();
    setProductToShow(productDetail);
  };
  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white"></CheckIcon>
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductToCart(event, { ...data, quantity: 1 })}
        >
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.images[0]}
          alt={data.title}
        ></img>
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export default Card;
