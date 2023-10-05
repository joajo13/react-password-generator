import React from "react";

export const Footer = React.memo(() => {
  return (
    <footer className="bg-white rounded-lg shadow-xl m-4 dark:bg-gray-900 absolute bottom-0 left-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://react-portfolio-v2-tau.vercel.app"
            className="hover:underline"
          >
            Juan Giupponi
          </a>
        </span>
      </div>
    </footer>
  );
});
