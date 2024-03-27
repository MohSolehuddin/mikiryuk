import Button from "@/components/Button";
import { CardContainer, CardItem } from "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const data = {
  items: [
    {
      img: "https://unsplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://unsplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://unsplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://unsplash.com/computer?200px*200px",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    }
  ]
};

export default function Home() {
  return (
    <body className="min-h-full w-full bg-slate-100 bg-no-repeat">
      <CardContainer>
        {data.items.map((item) => (
          <CardItem
            key={item.title} // tambahkan key properti untuk setiap item dalam map
            img={item.img}
            title={item.title}
            paragraph={item.paragraph}
          >
            klilk
          </CardItem>
        ))}
      </CardContainer>
      <Button color="blue">klik dong</Button>
    </body>
  );
}
