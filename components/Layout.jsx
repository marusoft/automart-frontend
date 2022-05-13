import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Auto Mart</title>
        <meta
          name="description"
          content="Auto Mart is an online marketplace for automobiles, with Auto Mart users posting
          their cars for sale."
        />
        <link rel="icon" href="/car.jpeg" />
      </Head>

      <div>
        <header>
          <NavBar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
