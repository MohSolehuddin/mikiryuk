import Label from "@/components/Elements/Input/Label";
import InputElement from "@/components/Elements/Input/InputElement";

export default function Input(props) {
  let {fotIt ="username", typeInput="text"} = props;
  return (
    <>
      <Label forIt={forIt}/>
      <InputElement forIt={forIt} typeInput={typeInput}/>
    </>
    )
}