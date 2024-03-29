// import { Link } from 'react-router-dom';
import Button from "@/components/Button";
import { CardContainer, CardItem } from "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const data = {
  items: [
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "public/Solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
  ]
};

export default function Home() {
  return (
    <main>
      <CardContainer>
        {data.items.map((item) => (
          <CardItem
            img={item.img}
            title={item.title}
            paragraph={item.paragraph}
            link={item.link}
          >
            {item.link}
          </CardItem>
        ))}
      </CardContainer>
    </main>
  );
}
