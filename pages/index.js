import Head from "next/head";
import CarInfo from "../components/CarInfo";

const Home = () => {
  return (
    <>
      <Head>
        <title>Marketplace for Automobiles</title>
        <meta
          name="description"
          content="Auto Mart is an online marketplace for automobiles, with Auto Mart users posting
          their cars for sale."
        />
        <link rel="icon" href="/car.jpeg" />
      </Head>
      <CarInfo />
    </>
  );
};

export default Home;
