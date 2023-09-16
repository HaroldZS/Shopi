import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/productDetail";
import { ShopiCartContext } from "../../Context";

function Home() {
  const { items, setSearchByTitle, filteredItems } =
    useContext(ShopiCartContext);

  return (
    <Layout>
      <div className="flex w-80 items-center justify-center relative mb-4">
        <h1 className="font-medium text-xl">Exlusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a Product"
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {filteredItems
          ? filteredItems.map((item) => <Card key={item.id} data={item} />)
          : items?.map((item) => <Card key={item.id} data={item} />)}
      </div>
      {filteredItems?.length === 0 && <div>We haven't found any matches </div>}
      <ProductDetail />
    </Layout>
  );
}

export default Home;
