import cn from 'classnames';
import React from 'react';
import {format} from 'date-fns';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';

export const Footer = ({className,...props}:FooterProps):JSX.Element => {
    return (
        <div className={cn(className,styles.footer)} {...props}>
            <div>
                OwlTop 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target='_blank'>Пользовательское соглашение</a>
            <a href="#" target='_blank'>Политика конфиденциальности</a>
        </div>
    );
};
