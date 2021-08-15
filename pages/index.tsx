import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h2'>Kolya</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Text</Button>
    </div>
  );
}
