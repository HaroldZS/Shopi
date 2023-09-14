import { createContext, useState } from "react";

export const ShopiCartContext = createContext();

export const ShopiCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  return (
    <ShopiCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShopiCartContext.Provider>
  );
};
