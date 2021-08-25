export interface ProductCharacteristic {
    value: string;
    name: string;
}
export interface ReviewModel {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createAt: Date
}
export interface ProductModel {
    _id: SVGStringList;
    categories: string[];
    tags: string[];
    title: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    description: string;
    characteristics: ProductCharacteristic[];
    createAt: Date;
    updateAt: Date;
    image: string;
    initialRating: number;
    reviews: ReviewModel[];
    reviewsCount: number;
    reviwsAvg?: number;
    advantages: string;
}