import Label from "./Label";
import InputElement from "./InputElement";

export default function Input({fotIt ="username", typeInput="text"}) {
  return (
    <>
      <label forIt={forIt}/>
      <InputElement forIt={forIt} typeInput={typeInput}/>
      
    </>
    )
}