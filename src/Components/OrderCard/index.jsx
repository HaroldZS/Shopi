import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const OrderCard = ({ product, handleDelete }) => {
  const { id, title, images, price } = product;
  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  useEffect(() => {
    setCalculatedPrice(quantity * price);
  }, [quantity]);

  const addItem = () => {
    setQuantity(quantity + 1);
  };

  const removeItem = (id) => {
    if (quantity === 1) {
      handleDelete(id);
    } else {
      setQuantity(quantity - 1);
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
          <p className="text-lg font-medium text-end">{calculatedPrice}</p>
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
          onClick={() => addItem()}
        ></PlusIcon>
      </div>
    </div>
  );
};

export default OrderCard;
