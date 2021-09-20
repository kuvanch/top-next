import React from 'react';
import { ReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { Button, Input, Rating, Textarea } from '..';
import CloseIcon from './close.svg';

export const ReviewForm = ({productId, className,...props}:ReviewFormProps): JSX.Element => {
    return (
        <>
            <div className={cn(styles.reviewForm,className)}
            {...props}
            >
                <Input placeholder='Имя'/>
                <Input placeholder='Заголовок отзыва' className={styles.title}/>
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Rating rating={0}/>
                </div>
                <Textarea placeholder='Текст отзыва' className={styles.description}/>
                <div className={styles.submit}>
                    <Button appearance='primary'>
                        Отправить
                    </Button>
                    <span className={styles.info}>
                        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                    </span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваша отзыв отправлено</div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                </div>
                <CloseIcon className={styles.close}/>
            </div>
        </>
    );
};
