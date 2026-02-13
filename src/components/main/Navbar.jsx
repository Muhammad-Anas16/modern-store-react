import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingBag } from "react-icons/fi";
import { LuHeart } from "react-icons/lu";
import { Link } from "react-router";
import { getAllProducts } from "../../tenStack/fakeStoreApi";

const Navbar = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  const [searchOpen, setSearchOpen] = useState(false);

  // Get Cart data from localStorage and filter it with the data from API to get only products in the cart
  const getId = localStorage.getItem("cart"); // Get cart data from localStorage
  const parseID = getId ? JSON.parse(getId) : []; // Parse cart data in JSON format
  const cartData = data?.filter((item) => parseID.includes(item.id)); // Filter for get only cart in localStorage

// Get Favorites data from localStorage and filter it with the data from API to get only products in the favorites
  const getFav = localStorage.getItem("favorites"); // Get favorites data from localStorage
  const parseFav = getFav ? JSON.parse(getFav) : []; // Parse favorites data in JSON format
  const favData = data?.filter((item) => parseFav.includes(item.id)); // Filter for get only favorites in localStorage


  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-black/10 px-3">
        <div className="mx-auto flex h-14 max-w-screen items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to={"/"}
              className="text-sm font-bold uppercase tracking-wide text-[#135BEC]"
            >
              ModernStore
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => {
                setSearchOpen(true);
              }}
              className="hover:text-[#135BEC] transition"
            >
              <FiSearch size={18} />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative hover:text-[#135BEC] transition"
            >
              <FiShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#135BEC] text-[10px] font-bold text-white">
                {isLoading ? 0 : cartData?.length || 0}
              </span>
            </Link>

            <Link
              to="/favorites"
              className="relative hover:text-[#135BEC] transition"
            >
              <LuHeart size={18} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#135BEC] text-[10px] font-bold text-white">
                {isLoading ? 0 : favData?.length || 0}
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {searchOpen && (
        <div className="fixed top-14 z-40 w-full border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-screen items-center gap-3 px-4 py-3">
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              className="w-full rounded-md border border-black/20 px-4 py-2 text-sm outline-none focus:border-[#135BEC]"
            />

            <button
              onClick={() => setSearchOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
