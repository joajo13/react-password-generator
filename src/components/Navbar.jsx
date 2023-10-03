export const Navbar = () => {
  const handleToggleTheme = () => {
    const body = document.querySelector("body");
    body.classList.add("dark");
  };

  return (
    <div className="flex justify-end px-7 py-7 ">
      <label
        htmlFor="toogleA"
        className="flex items-center cursor-pointer"
        onClick={handleToggleTheme}
      >
        <div className="relative">
          <input id="toogleA" type="checkbox" className="sr-only" />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div className="dot absolute w-6 h-6 bg-gray-900 rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium dark:text-white">
          Theme
        </div>
      </label>
    </div>
  );
};
