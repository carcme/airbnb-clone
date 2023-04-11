import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-3xl">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
        Home
      </div>
    </div>
  );
}
