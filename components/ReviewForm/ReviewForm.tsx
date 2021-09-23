import React, { useState } from "react";
import { ReviewFormProps } from "./ReviewForm.props";
import cn from "classnames";
import styles from "./ReviewForm.module.css";
import { Button, Input, Rating, Textarea } from "..";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./ReviewForm.interface";
import { API } from "../../helpers/api";
import axios from "axios";

export const ReviewForm = ({
  productId,
  className,
  ...props
}: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }, reset
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>('');
  const onSubmit = async (formData: IReviewForm) => {
    try {
      const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo,{...formData,productId});
      if(data.message) {
        setIsSuccess(true);
        reset();
      }else {
        setError('Что-то произошло не так');
      }
    } catch (e) {
      setError('Что-то произошло не так');
    }

  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          error={errors.name}
          {...register("name", {
            required: { value: true, message: "Заполните имя" },
          })}
          placeholder="Имя"
        />
        <Input
          error={errors.name}
          {...register("title",{required: {value: true, message: 'Заполните заголовок'}})}
          placeholder="Заголовок отзыва"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{required: {value: true, message: 'Укажите рейтинг'}}}
            render={({ field }) => (
              <Rating
                ref={field.ref}
                isEditable
                setRating={field.onChange}
                rating={field.value}
                error={errors.rating}
              />
            )}
          />
        </div>
        <Textarea
          error={errors.description}
          {...register("description",{required:{value: true, message: 'Заполните описанию'}})}
          placeholder="Текст отзыва"
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && <div className={styles.success}>
        <div className={styles.successTitle}>Ваша отзыв отправлено</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon onClick={() => setIsSuccess(false)} className={styles.close} />
      </div>}
      {error && <div className={styles.error}>
        Что-то произошло нет так
        <CloseIcon onClick={() => setError(undefined)} className={styles.close} />
      </div>}
    </form>
  );
};
