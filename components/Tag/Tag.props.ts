import { HtmlHTMLAttributes } from "react";
import { DetailedHTMLProps } from "react";
import { ReactNode } from "react";


export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode;
    tag: 'grey' | 'ghost' | 'green' | 'red' | 'primary';
    href? : string;
}