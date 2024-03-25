function hai(){
  console.log("haiiiii");
}
export default function Button(props) {
  let {children, color} = props;
  return (
    <button className="bg-blue-500 rounded py-2 px-4 text-gray-100" onClick="hai()">{children}</button>
    )
}