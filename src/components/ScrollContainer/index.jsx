export default function ScrollContainer({children, }) {
  return (
    <section id="ScrollContainer" className="w-full h-[400px]
    overflow-x-scroll overflow-y-hidden">
      {children}
    </section>
    )
}