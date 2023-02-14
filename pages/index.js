import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import { Inter } from "@next/font/google";
//import styles from "../styles/Home.module.css";
import { HomePage } from "../src/home/home-page";
import axios from "axios";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Online Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/get-events");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.rows,
    },
  };
}
