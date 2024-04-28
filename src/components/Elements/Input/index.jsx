import Label from "@/components/Elements/Input/Label";
import InputElement from "@/components/Elements/Input/InputElement";

export default function Input(props) {
  let {untuk ="username", typeInput="text"} = props;
  return (
    <>
      <Label forIt={untuk}/>
      <InputElement forIt={untuk} typeInput={typeInput}/>
    </>
    )
}