import { Link } from 'react-router-dom';
import Button from "@/components/Button";
import { CardContainer, CardItem } from "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const data = {
  items: [
    {
      img: "https://.source.unsplash.com/random/200×200?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://source.unsplash.com/random/200×200/?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://source.unsplash.com/random/200×200/?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
      img: "https://.source.unsplash.com/random/200×200?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://source.unsplash.com/random/200×200/?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://source.unsplash.com/random/200×200/?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
    {
      img: "https://source.unsplash.com/random/200×200/?img=1",
      title: "coba",
      link: "https://github.co/ohSolehuddin/",
      paragraph: "hai ini aalaparagraff"
    },
  ]
};

export default function Home() {
  return (
    <>
      <CardContainer>
        {data.items.map((item) => (
          <CardItem
            key={item.title} // tambahkan key properti untuk setiap item dalam map
            img={item.img}
            title={item.title}
            paragraph={item.paragraph}
          >
            klik
          </CardItem>
        ))}
      </CardContainer>
      <Link to="/example">
        <Button>Go to Example</Button>
      </Link>
    </>
  );
}
