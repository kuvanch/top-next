import React, { useEffect, useState,KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = forwardRef(({error,rating,setRating,isEditable=false,...props}:RatingProps, ref:ForwardedRef<HTMLDivElement>):JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        contructRating(rating);
    }, [rating]);
    const contructRating = (currentRating: number) => {
        const updateRating = ratingArray.map((r,i) => {
            return (
                <span
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                >
                    <StarIcon 
                        className={cn(styles.star, {
                            [styles.filled]: i < currentRating,
                            [styles.editable]: isEditable
                        })}
                        
                        tabIndex={isEditable ? 0: -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updateRating);
    };
    const changeDisplay = (i:number) => {
        if(!isEditable) {
            return;
        }
        contructRating(i);
    };
    const onClick = (i:number) => {
        if(!isEditable || !setRating) {
            return;
        }
        
        setRating(i);
    };
    const handleSpace = (i:number, e:KeyboardEvent<SVGAElement>) => {
        if(e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };
    return (
        <div ref={ref} {...props} className={styles.ratingWrapper}>
            {ratingArray.map((r,i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});
