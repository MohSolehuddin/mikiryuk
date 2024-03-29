import Button from '@/components/Button';
import Image from "next/image";

export function CardContainer(props) {
  const { children } = props;
  return (
    <section id="card-container" className="bg-slate-50 rounded-2xl p-1 mx-auto
    h-[400px] w-full px-1 flex min-w-fit gap-2">
      {children}
    </section>
  );
}

export function CardItem(props) {
  const { img, title, paragraph, children, link} = props;
  return (
    <section className="w-[300px] bg-slate-100 max-h-full p-1">
      <Image className="w-full h-[200px]" src={img} alt={title} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-justify">{paragraph}</p>
      <Button link={link}>{children}</Button>
    </section>
  );
}
