export default function Label({forIt}) {
  return (
    <label htmlFor={forIt} id={forIt} className="px-2 py-1 rounded text-xl
    font-bold w-full text-sky-500">{forIt}</label>
    )
}