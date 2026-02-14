import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router";
import { getAllProducts } from "../../tenStack/fakeStoreApi";

const SearchBar = ({ setSearchOpen }) => {
  const [value, setValue] = useState("");

  // Fetch all products
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  // Filter products
  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase()),
  );

  const handleClose = () => {
    setValue("");
    setSearchOpen?.(false);
  };

  return (
    <div className="fixed top-14 left-0 z-40 w-full bg-white shadow-md">
      <div className="mx-auto max-w-5xl px-4 py-3">
        {/* Search Input */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search products..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoFocus
            className="w-full rounded-md border border-black/20 px-4 py-2 text-sm outline-none focus:border-[#135BEC]"
          />

          <button
            onClick={handleClose}
            className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Search Results */}
        {value && (
          <div className="mt-4 max-h-80 overflow-y-auto">
            {filteredProducts?.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  onClick={handleClose}
                  className="block border-b border-gray-100 py-2 hover:bg-gray-50"
                >
                  {product.title}
                </Link>
              ))
            ) : (
              <p className="py-3 text-sm text-gray-500">No products found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
