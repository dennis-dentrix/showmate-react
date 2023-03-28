import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className=" bg-white shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2030{" "}
          <Link to="/" className="hover:underline">
            Showmate
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://www.instagram.com/_denis_kyu/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6 "
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/denis-kyusya-934a25227"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/dennis-dentrix" rel="noreferrer" target="_blank" className="hover:underline">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
