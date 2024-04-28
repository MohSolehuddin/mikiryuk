import Button from "@/components/Button";
import Input from "@/components/Elements/Input";

export default function Login() {
  return (
    <form className="px-1" accept-charset="utf-8">
      <Input forIt="username"/>
      <Input forIt="password"/>
      <Button type="submit">Login</Button>
    </form>
    )
}