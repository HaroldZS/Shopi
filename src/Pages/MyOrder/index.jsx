import { useContext } from "react";
import { ShopiCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";

function MyOrder() {
  const { order } = useContext(ShopiCartContext);
  console.log(order);

  return (
    <Layout>
      My Order!
      <div className="flex flex-col w-80">
        {order?.length > 0 ? (
          order[order.length - 1].products.map((product) => (
            <OrderCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center" >No products in the order.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
