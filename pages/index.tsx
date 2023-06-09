import Head from "next/head";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import About from "@/components/About";
import Food from "@/components/Food";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zakład kamieniarski - Andrzej Grzębski - Nagrobki</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="19021593.jpg" alt="sd" className="fixed z-[-1] h-full w-full" />
      <div className="relative">
        <Navbar />
        <Slider />
        <About />
        <Gallery />
        <Food />
      </div>
    </>
  );
}
