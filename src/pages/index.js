import Button from "@/components/Button";
import { CardContainer, CardItem } from "@/components/Card";
import ScrollContainer from "@/components/ScrollContainer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const data = {
  items: [
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
    {
      img: "/solehuddin.png",
      title: "Solehuddin",
      link: "https://github.com/MohSolehuddin/",
      paragraph: "hallo everyone, My name is MohSolehuddin, I am a Software a engineer, You can hire me to Front End or Back End Project",
    },
  ]
};

export default function Home() {
  return (
    <main className="max-w-full overflow-x-hidden">
      <ScrollContainer>
        <CardContainer>
          {data.items.map((item) => (
            <CardItem
              key={item.title}
              img={item.img}
              title={item.title}
              paragraph={item.paragraph}
              link={item.link}
            />
          ))}
        </CardContainer>
      </ScrollContainer>
      <CardContainer>
      {data.items.map((item)=>{
        <CardItem
          key={item.title}
          img={item.img}
          title={item.title}
          paragraph={item.paragraph}
          link={item.link}
          customStyle={`full flex-no-wrap`}
        />
      })}
      </CardContainer>
    </main>
  );
}
