import { DetailedHTMLProps } from "react";
import { HtmlHTMLAttributes } from "react";


export interface ReviewFormProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    productId: string;
}