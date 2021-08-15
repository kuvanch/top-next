import { Button, Htag } from "../components";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h2'>Kolya</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Text</Button>
      <P size='small'>Lorem ipsum dolor sit amet.</P>
      <P size='medium'>Lorem ipsum dolor sit amet.</P>
      <P size='large'>Lorem ipsum dolor sit amet.</P>
      <Tag tag='grey'>10</Tag>
      <Tag tag='ghost'>ghost</Tag>
      <Tag tag='red'>red</Tag>
      <Tag tag='green'>green</Tag>
      <Tag tag='primary'>primary</Tag>
    </div>
  );
}
