import { ProductModel } from "../../interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "../../interfaces/toppage.interface";

export interface TopPageProps {
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
  }
  