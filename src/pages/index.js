import Button from "@/component/Button"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body>
      <Button color="red">klik dong</Button>
      <Button color="blue">klik dong</Button>
    <body/>
  );
}
