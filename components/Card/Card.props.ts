import { DetailedHTMLProps } from "react";
import { HtmlHTMLAttributes } from "react";
import { ReactNode } from "react";
import { ReactChild } from "react";


export interface CardProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    color?: 'white' | 'blue';
    children: ReactChild | ReactNode;
}