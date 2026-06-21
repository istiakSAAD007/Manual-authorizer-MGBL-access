import { Menu, X } from "lucide-react";

function Navbar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="bg-auntviolet h-14 w-full fixed top-0 left-0 z-50 px-4 md:px-10">
      <div className="h-full flex flex-row items-center justify-between">
        {/* Left Section: Mobile Menu Trigger + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen((prev) => !prev)}
            className="text-white p-1 hover:bg-white/10 rounded lg:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <p className="md:text-lg lg:text-xl font-medium text-white">
            MGBL Access
          </p>
        </div>

        {/* Right Section: User Profile Profile Group */}
        <div className="flex items-center gap-2 text-white text-sm">
          <div className="h-7 w-7 rounded-full bg-gossamerparchment flex items-center justify-center overflow-hidden border border-white/40">
            <img
              src="/User-avatar.svg"
              alt="user"
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
          <select
            name="dropdown"
            id="dropdown"
            className="bg-transparent text-white focus:outline-none cursor-pointer font-light"
          >
            <option value="user" className="text-black">
              united_maker
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
