import {useState, useEffect} from "react";
import Button from "@/components/Button";
import { CardContainer, CardItem } from "@/components/Card";
import ScrollContainer from "@/components/ScrollContainer";
import { Inter } from "next/font/google";

const getData = async (link) => {
  const response = await fetch(link, {
    method: 'GET'
  })
  const result = await response.json();
  return result.then((data)=>{
    return data;
  }).catch(e=>console.error(e))
};

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  [data, setData] = useState(null);
  
  useEffect(()=>{
    const fectData = async() => {
      const result = await getData("/api/product");
      setData(result);
    };
    fectData();
  }, []);
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
      <CardContainer customStyle={`w-full flex-wrap`}>
      {data.items.map((item)=>(
        <CardItem
          key={item.title}
          img={item.img}
          title={item.title}
          paragraph={item.paragraph}
          link={item.link}
        />
      ))}
      </CardContainer>
      <Button>+</Button>
    </main>
  );
}
