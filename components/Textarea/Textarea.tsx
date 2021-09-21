import React, { ForwardedRef, forwardRef } from 'react';
import { TextareaProps } from './Textarea.props';
import cn from 'classnames';
import styles from './Textarea.module.css';

export const Textarea = forwardRef(({className, ...props}:TextareaProps, ref:ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    return (
       <textarea className={cn(className,styles.textarea)} ref={ref} {...props}/>
       );
});
