import Button from "@/components/Button";
import {CardCotainer, CardItem} "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const data = {
  items[
    {
      img: "https://unplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://unplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://unplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://unplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    ]
}
export default function Home() {
  return (
    <body className="min-h-full w-full bg-slate-100 bg-no-repeat">
      <CardCotainer>
        {data.items.map(item)=>{
          <CardItem img={item.img} title={item.title}
          paragraph={item.paragraph}>klilk</CardItem>
        }}
      </CardCotainer>
      <Button color="blue">klik dong</Button>
    </body>
  );
}
