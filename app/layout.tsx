import "./global.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="The slowest browser in the world... made just for you're safety"
        />
        <title>Sloth Browser</title>
      </head>
      <body className="bg-slate-900">
        <NavBar />
        {children}
        <Footer />

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
