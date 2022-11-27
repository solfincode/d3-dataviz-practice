import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-row mx-auto w-full justify-center">
      <div className="flex flex-col text-center">
        <h1 className="text-2xl font-bold mt-20 mb-4">hello D3 data viz</h1>
        <p>this is practice for D3 on react framework</p>
      </div>
    </div>
  );
}
