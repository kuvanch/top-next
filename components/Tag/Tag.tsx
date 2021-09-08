import React from 'react';
import { TagProps } from './Tag.props';
import cn from 'classnames';

import styles from './Tag.module.css';

export const Tag = ({children,tag,className}:TagProps):JSX.Element => {
    return (
        <div className={cn(className,{
            [styles.red]: tag === 'red',
            [styles.ghost]: tag === 'ghost',
            [styles.green]: tag === 'green',
            [styles.primary]: tag === 'primary',
            [styles.grey]: tag === 'grey'
        })}>
            {children}
        </div>
    );
};
