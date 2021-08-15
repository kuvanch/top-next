import React from 'react';
import { PProps } from './P.props';
import cn from 'classnames';
import styles from './P.module.css';

export const P = ({children,size = 'medium'}:PProps): JSX.Element => {
    return (
        <p className={cn('p',{
            [styles.large]: size === 'large',
            [styles.medium]: size === 'medium',
            [styles.small]: size === 'small',
        })}>
            {children}
        </p>
    );
};
