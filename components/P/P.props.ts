import { DetailedHTMLProps } from "react";
import { HtmlHTMLAttributes } from "react";
import { ReactNode } from "react";
import { ReactChild } from "react";


export interface PProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement>{
    size?: 'small' | 'medium' | 'large';
    children: ReactChild | ReactNode;
}