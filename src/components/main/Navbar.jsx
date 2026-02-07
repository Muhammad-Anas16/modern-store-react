import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const menuData = ["Home", "About", "Services", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-black/10 px-3">
        <div className="mx-auto flex h-14 max-w-screen items-center justify-between">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            {/* Hamburger (mobile only) */}
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5 md:hidden"
            >
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Logo */}
            <h1 className="text-sm font-bold uppercase tracking-wide text-[#135BEC]">
              ModernStore
            </h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {menuData.map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#135BEC] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
              className="hover:text-[#135BEC] transition"
            >
              <FiSearch size={18} />
            </button>

            {/* Cart */}
            <button className="relative hover:text-[#135BEC] transition">
              <FiShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#135BEC] text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* FIXED SEARCH BAR */}
      {searchOpen && (
        <div className="fixed top-14 z-40 w-full border-b border-black/10 bg-white">
          <div className="mx-auto flex max-w-screen items-center gap-3 px-4 py-3">
            <input
              type="text"
              placeholder="Search products..."
              autoFocus
              className="w-full rounded-md border border-black/20 px-4 py-2 text-sm outline-none focus:border-[#135BEC]"
            />

            {/* Close Search */}
            <button
              onClick={() => setSearchOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-black/5"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-14 z-40 w-full border-t border-black/10 bg-white md:hidden">
          <ul className="flex flex-col gap-2 p-4 text-sm font-semibold">
            {menuData.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 hover:bg-black/5"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
