import { useState } from "react";
import { Button, Htag, Rating } from "../components";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);


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
      <Rating rating={rating} setRating={setRating} isEditable/>
    </div>
  );
}
