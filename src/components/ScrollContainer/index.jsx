export default function ScrollComponent({children, }) {
  return (
    <section id="ScrollComponent" className="w-full max-h-fit py-2
    overflow-x-scroll">
      {children}
    </section>
    )
}