import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

//components
import Card from "../components/Card";

export default function Home() {
  return (
    <>
      <div className="flex flex-row mx-auto w-full justify-center">
        <div className="flex flex-col text-center">
          <h1 className="text-2xl font-bold mt-20 mb-4">hello D3 data viz</h1>
          <p>this is practice for D3 on react framework</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-20 mb-20 mx-10">
        <Link href="/viz/LineChart">
          <Card
            title="Line Chart"
            body="this is sample of line chart using d3"
          />
        </Link>
        <Link href="/viz/BarChart">
          <Card title="Bar Chart" body="this is sample of bar chart using d3" />
        </Link>
        <Link href="">
          <Card title="sample" body="this is sample of line chart using d3" />
        </Link>
      </div>
    </>
  );
}
