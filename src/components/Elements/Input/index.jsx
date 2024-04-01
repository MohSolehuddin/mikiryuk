import Label from "./Label";
import InputElement from "./InputElement";

export default function Input(props) {
  {fotIt ="username", typeInput="text"} = props;
  return (
    <>
      <Label forIt={forIt}/>
      <InputElement forIt={forIt} typeInput={typeInput}/>
    </>
    )
}