import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { CardContainer, CardItem } from "@/components/Card";
import ScrollContainer from "@/components/ScrollContainer";
import { Inter } from "next/font/google";

const getData = async (link) => {
  try {
    const response = await fetch(link, {
      method: 'GET'
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("/api/product");
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <main className="max-w-full overflow-x-hidden">
      <ScrollContainer>
        <CardContainer>
          {data && data.items.map((item) => (
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
      {data && data.items.map((item)=>(
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