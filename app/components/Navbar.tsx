export default function NavBar() {
  return (
    <nav className="nav p-5 flex flex-wrap justify-evenly sticky top-0 z-10">
      <h1 className="headers">
        <span className="text-gradient header">SLOTH</span> browser
      </h1>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 rounded hover:text-blue-500 md:p-0"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#answer"
              className="block py-2 pl-3 pr-4 rounded hover:text-blue-500 md:p-0"
            >
              Solution
            </a>
          </li>
          <li>
            <a
              href="#why"
              className="block py-2 pl-3 pr-4 rounded hover:text-blue-500 md:p-0"
            >
              Why
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
