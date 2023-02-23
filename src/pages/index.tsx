import Head from "next/head";
import Link from "next/link";
import { AiFillPhone } from "react-icons/ai";
import { Header } from "@/components/header";
import { Banner } from "@/components/banner";
import Catalogo from "@/components/catalogo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imóveis</title>
        <meta name="description" content="O seu site de imóveis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="homePage">
        <Header isFixed={false} />
        <Banner />
        <Catalogo />
      </main>
    </>
  );
}
