function hai(){
  console.log("haiiiii");
}
export default function Button(props) {
  let {children, color} = props;
  return (
    <button className="rounded py-2 px-4 text-gray-100 bg-amber-400" onClick="hai()">{children}</button>
    )
}