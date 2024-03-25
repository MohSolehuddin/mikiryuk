function hai(){
  console.log("haiiiii");
}
export default function Button(props) {
  let {children, color} = props;
  return (
    <button className={`text-${color}-500 bg-slate-200 text-xl`} onClick="hai()">{children}</button>
    )
}