import React from 'react';
import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';

export const Product = ({product,className,...props}:ProductProps): JSX.Element => {
    return (
        <Card className={styles.product}>
            <div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title}/></div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag tag='green' className={styles.oldPrice}>{priceRu(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>{priceRu(product.credit)}/<span className={styles.moth}>мес</span></div>
            <div className={styles.rating}><Rating rating={product.reviwsAvg ?? product.initialRating}/></div>
            <div className={styles.tags}>{product.categories.map( c => <Tag className={styles.category} key={c} tag='ghost'>{c}</Tag>)}</div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>{product.reviewsCount} отзыву</div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>fichi</div>
            <div className={styles.advBlock}>
                {product.advantages && <div className={styles.advantages}>
                    <div className={styles.advTitle}>Премущество</div>
                    <div>{product.advantages}</div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <div>{product.disadvantages}</div>
                </div>}
            </div>
            <Divider className={styles.hr}/>
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow='right' className={styles.reviewButton}>Читать отзывы</Button>
            </div>
        </Card>
    );
};
