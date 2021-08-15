import { Button, Htag } from "../components";
import { P } from "../components/P/P";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h2'>Kolya</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Text</Button>
      <P size='small'>Lorem ipsum dolor sit amet.</P>
      <P size='medium'>Lorem ipsum dolor sit amet.</P>
      <P size='large'>Lorem ipsum dolor sit amet.</P>
    </div>
  );
}
