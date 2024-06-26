import Button from '@/components/Button';
import Image from "next/image";

export function CardContainer(props) {
  const { children, customStyle ="min-w-fit" } = props;
  return (
    <section id="card-container" className={`bg-slate-50 rounded-2xl p-1 mx-auto
    h-[500px] w-full px-1 flex ${customStyle} gap-3`}>
      {children}
    </section>
  );
}

export function CardItem(props) {
  const { img, title, paragraph, children, link} = props;
  return (
    <section className="w-[300px] bg-slate-100 max-h-full p-1">
      <Image className="w-full h-[300px]" src={img} alt={title} with={300}
      height={300} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-justify mb-4">{paragraph}</p>
      <Button link={link}>{children}</Button>
    </section>
  );
}
