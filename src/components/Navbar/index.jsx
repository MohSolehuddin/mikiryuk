import RoundedIcon from "./RoundedIcon";

export default function Navbar({children, }) {
  return (
    <nav className="w-full h-10 bg-slate-50 text-sky-500 flex col-auto shadow
    flex justify-evenly px-8 justify-items-center sticky"
    id="navbar">
      <RoundedIcon/>
      <ul className="flex justify-between h-fit  w-fit bg-sky-500
      text-slate-100">
        <li className="list-none text-black">coba</li>
        <li className="list-none text-black">coba</li>
        <li className="list-none text-black">coba</li>
        <li className="list-none text-black">coba</li>
        <li className="list-none text-black">coba</li>
      </ul>
      
    </nav>
    )
}