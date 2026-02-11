import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../tenStack/fakeStoreApi";
import { IoStar } from "react-icons/io5";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <section className="px-4 py-6">
        <h2 className="text-xl font-bold mb-6">Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  const { category, description, image, price, title, rating } = data;
  const { count, rate } = rating;

  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt={title || "product title"}
            src={image || "https://dummyimage.com/720x600"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h6 className="font-bold text-[#135BEC] capitalize">
            {category || "Product Category"}
          </h6>
          <h1 className="font-bold sm:text-4xl text-3xl mb-4 text-black">
            {title || "product title"}
          </h1>

          <div className="flex items-center justify-around gap-6 font-bold">
            <h1 className="text-4xl text-blue-600">${price || "price"}</h1>
            <h1 className="flex items-center justify-center text-yellow-600 text-xl">
              <IoStar /> {`${rate} (${count} reviews)`}
            </h1>
          </div>

          <p className="mb-8 leading-relaxed">
            {description || "product description..."}
          </p>
          <div className="">
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
