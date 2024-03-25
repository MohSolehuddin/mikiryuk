import Button from "@/component/Button"
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <body className="p-10 w-1 h-1 bg-no-repeat flex justify-center flex-col bg-sky-400 rounded-2xl">
      <Button color="red">klik dong</Button>
      <Button color="blue">klik dong</Button>
    </body>
  );
}
