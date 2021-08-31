import CoursesIcon from './icons/courses.svg';
import SerivesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../interfaces/toppage.interface';


export interface firstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
}

export const firstLevelMenu: firstLevelMenuItem[] = [
    {route: 'courses',name: 'Курсы',icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services',name: 'Сервисы',icon: <SerivesIcon/>, id: TopLevelCategory.Services},
    {route: 'books',name: 'Книги',icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products',name: 'Продукты',icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];