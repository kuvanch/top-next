import axios from "axios";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import { TopPage } from "../../components";
import { API } from "../../helpers/api";
import { firstLevelMenu } from "../../helpers/helpers";
import { MenuItem } from "../../interfaces/menu.interface";
import { ProductModel } from "../../interfaces/product.interface";
import {
  TopLevelCategory,
  TopPageModel,
} from "../../interfaces/toppage.interface";
import { withLayout } from "../../layout/Layout";

export function Course({ firstCategory, page, products }: CoursesProps): JSX.Element {
  return <TopPage firstCategory={firstCategory} page={page} products={products}/>;
}
export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const m of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      API.topPage.find,
      {
        firstCategory: m.id,
      }
    );
    paths = paths.concat(
      menu.flatMap((s) => s.pages.map((p) => `/${m.route}/${p.alias}`))
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CoursesProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      API.topPage.find,
      {
        firstCategory: firstCategoryItem.id,
      }
    );
    const { data: page } = await axios.get<TopPageModel>(
      API.topPage.byAlias + params.alias
    );
    const { data: products } = await axios.post<ProductModel[]>(
      API.product.find,
      {
        category: page.category,
        limit: 10,
      }
    );
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

interface CoursesProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
