import axios from "axios";
import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, Rating } from "../components";
import { P } from "../components/P/P";
import { Tag } from "../components/Tag/Tag";
import { MenuItem } from "../interfaces/menu.interface";
import { withLayout } from "../layout/Layout";

export function Home({menu}:HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);


  return (
    <>
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
      <ul>
        {
          menu.map( item => (<li key={item._id.secondCategory}>{item._id.secondCategory}</li>))
        }
      </ul>
    </>
  );
}
export default withLayout(Home);



export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string,unknown>{
  menu: MenuItem[];
  firstCategory: number;
}