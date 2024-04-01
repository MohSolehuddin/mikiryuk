import Label from "@/components/Elements/Input/Label";
import InputElement from "@/components/Elements/Input/InputElement";

export default function Input({fotIt ="username", typeInput="text"}) {
  return (
    <>
      <Label forIt={forIt}/>
      <InputElement forIt={forIt} typeInput={typeInput}/>
    </>
    )
}