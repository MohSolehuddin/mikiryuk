export default function InputElement({forIt, typeInput}) {
  if (typeInput == "password") {
    typeInput = "********"
  }
  return (
    <input className="px-2 py-1 rounded w-full text-sm border-sky-500
    text-sky-200 bg-slate-600" type={typeInput} name={forIt} id={`input_${forIt}`}
    placeholder={forIt} />
    )
}