export default function Button(props) {
  let {children = "Klik", color, link} = props;
  return (
    <a className="rounded-2xl mx-auto py-4 px-10 text-slate-100
    bg-indigo-400 font-bold hover:bg-indigo-500 mt-4" href={link} about="_blank">{children}</a>
    )
}