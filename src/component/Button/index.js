export default function Button(props) {
  let {children, color} = props;
  return (
    <button className="rounded-2xl mx-auto py-2 px-4 text-slate-100 bg-indigo-400 ">{children}</button>
    )
}