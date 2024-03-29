export default function Sidebar({children, }) {
  return (
    <aside className="w-full h-10 bg-slate-50 text-sky-500 flex col-auto shadow"
    id="aside">
      ini adalah aside {children}
    </aside>
    )
}