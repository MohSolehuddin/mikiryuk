import Button from '@/components/Button';

export function CardContainer(props) {
  const { children } = props;
  return (
    <section id="card-item" className="bg-slate-50 rounded-2xl p-1 mx-auto h-[400px] w-full px-1">
      {children}
    </section>
  );
}

export function CardItem(props) {
  const { img, title, paragraph, children } = props;
  return (
    <section className="w-[300px] bg-slate-100 max-h-full p-1">
      <img className="w-full h-[200px]" src={img} alt={title} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-justify">{paragraph}</p>
      <Button>{children}</Button>
    </section>
  );
}
