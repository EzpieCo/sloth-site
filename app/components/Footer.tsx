export default function Footer() {
  return (
    <footer className="text-center my-6 p-8 text-gray-300">
      <div className="mx-auto w-72 h-1 my-12 bg-gradient-to-r from-orange-500 to-red-900 rounded-full"></div>
      <div className="pt-10">
        This project is{" "}
        <a
          href="https://github.com/ezpieCo/sloth-browser/"
          target="_blank"
          className="text-orange-500 animate-pulse"
        >
          open-source
        </a>
        . So is{" "}
        <a
          href="https://github.com/epzieCo/sloth-site/"
          target="_blank"
          className="text-orange-500 animate-pulse"
        >
          this page
        </a>
      </div>
      <div className="my-5">
        Any questions? Email <b className="text-blue-500">ezpie.co@gmail.com</b>
      </div>
    </footer>
  );
}
