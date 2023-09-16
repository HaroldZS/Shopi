import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShopiCartContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(ShopiCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
