import Button from "@/components/Button";
import Input from "@/components/Elements/Input";

export default function Login({children, }) {
  return (
    <form className="px-1" action="/api/hallo" method="get" accept-charset="utf-8">
      <Input forIt="username"/>
      <Input forIt="password"/>
      <Button type="submit">Login</Button>
    </form>
    )
}