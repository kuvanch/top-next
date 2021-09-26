import React, { useRef, useState, forwardRef, ForwardedRef } from 'react';
import { ProductProps } from './Product.props';
import cn from 'classnames';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { Review, ReviewForm } from '..';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({product,className,...props}:ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, SetIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const scrollToReview = () => {
        SetIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    const variants = {
        visible: {opacity: 1, height: 'auto'},
        hidden: { opacity: 0, height: 0}
    };
    return (
        <div ref={ref} className={className} {...props}>
        <Card className={styles.product}>
            <div className={styles.logo}>
                <Image 
                    src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
                    alt={product.title}
                    width={70}
                    height={70}
                /></div>
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
            <div className={styles.rateTitle}><a href={'#ref'} onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount,['отзыв','отзыва','отзывов'])}</a></div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
                {product.characteristics.map(c => (
                    <div className={styles.characteristics} key={c.name}>
                        <span className={styles.characteristicsName}>{c.name}</span>
                        <span className={styles.characteristicsDots}></span>
                        <span className={styles.characteristicsValue}>{c.value}</span>
                    </div>
                ))}
            </div>
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
                <Button
                    appearance='ghost'
                    arrow={isReviewOpened ? 'down' : 'right'}
                    className={styles.reviewButton}
                    onClick={() => SetIsReviewOpened(!isReviewOpened)}
                >Читать отзывы</Button>
            </div>
        </Card>
        <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial={'hidden'}>
            <Card ref={reviewRef} color='blue' className={cn(styles.reviews)}>
                {product.reviews.map((r) => (
                    <div key={r._id}>
                        <Review review={r}/>
                        <Divider />
                    </div>
                ))}
                <ReviewForm productId={`${product._id}`}/>
            </Card>
        </motion.div>
        </div>
    );
}));
