export default function ScrollContainer({children, }) {
  return (
    <section id="ScrollContainer" className="w-full max-h-fit py-2
    overflow-x-scroll">
      {children}
    </section>
    )
}