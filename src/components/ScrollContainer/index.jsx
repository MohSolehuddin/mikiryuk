export default function ScrollContainer({children, }) {
  return (
    <section id="ScrollContainer" className="w-full h-[400px] py-2
    overflow-x-scroll">
      {children}
    </section>
    )
}