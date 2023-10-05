import { MdOutlineDarkMode } from "react-icons/md";
export const Navbar = ({ handleToggleTheme }) => {
  return (
    <div className="flex justify-end px-7 py-7 ">
      <label htmlFor="toogleA" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toogleA"
            type="checkbox"
            className="sr-only"
            onChange={handleToggleTheme}
            defaultChecked
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-gray-900 rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium dark:text-white">
          <MdOutlineDarkMode size={24} title="dark icon" />
        </div>
      </label>
    </div>
  );
};
