import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShopiCartContext } from "../../Context";

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productToShow } =
    useContext(ShopiCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      } flex-col fixed bg-white right-0 border top-[68px] border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeProductDetail()}
          ></XMarkIcon>
        </div>
      </div>
      <figure className="px-6">
        <img
          src={productToShow.images}
          alt={productToShow.title}
          className="w-full h-full rounded-lg"
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productToShow.price}
        </span>
        <span className="font-medium text-md">${productToShow.title}</span>
        <span className="font-light text-sm">${productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
