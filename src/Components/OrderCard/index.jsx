import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopiCartContext } from "../../Context";

const OrderCard = ({ product, handleDelete }) => {
  const { id, title, images, price, quantity } = product;
  const { cartProducts, setCartProducts, count, setCount } =
    useContext(ShopiCartContext);

  const addItem = (id) => {
    const updatedCartProducts = cartProducts.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    handleDelete(id);
    setCartProducts(updatedCartProducts);
  };

  const removeItem = (id) => {
    if (quantity === 1) {
      handleDelete(id);
      setCount(count - 1);
    } else {
      const updatedCartProducts = cartProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      handleDelete(id);
      setCartProducts(updatedCartProducts);
    }
  };

  return (
    <div className="flex justify-between item-center mb-3">
      <div className="flex items-center w-full justify-between gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={images}
            alt={title}
          />
        </figure>
        <div className="flex-grow w-[80px] flex flex-col items-end pr-3">
          <p className="text-lg font-medium text-end">{price * quantity}</p>
          <p className="text-sm font-light text-end">{title}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <MinusIcon
          className="h-4 w-4 text-black cursor-pointer"
          onClick={() => removeItem(id)}
        ></MinusIcon>
        <span className="bg-slate-200 rounded-md">{quantity}</span>
        <PlusIcon
          className="h-4 w-4 text-black cursor-pointer"
          onClick={() => addItem(id)}
        ></PlusIcon>
      </div>
    </div>
  );
};

export default OrderCard;
