import { ReactNode } from "react";


export interface TagProps {
    children: ReactNode;
    tag: 'grey' | 'ghost' | 'green' | 'red' | 'primary';
    href? : string;
}