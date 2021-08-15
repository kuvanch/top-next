import { ReactNode } from "react";
import { ReactChild } from "react";


export interface PProps {
    size: 'small' | 'medium' | 'large';
    children: ReactChild | ReactNode;
}