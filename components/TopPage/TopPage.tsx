import React from 'react';
import { Htag,Tag,HhData,Advantages,P} from '..';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import styles from './TopPage.module.css';
import { TopPageProps } from './TopPage.props';

export const TopPage = ({page,firstCategory,products}:TopPageProps):JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
              <Htag tag='h1'>{page.title}</Htag>
              <Tag tag='grey'>{products && products.length}</Tag>
              <span>сортировка</span>
            </div>  
            <div>
                {products && products.map(p => <div key={`${p._id}`}>{p.title}</div>)}
            </div>
            <div className={styles.hhTitle}>
              <Htag tag='h2'>Вакансии - {page.category}</Htag>
              <Tag tag='red'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && <>
              <Htag tag='h2'>Премущество</Htag>
              <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <P>{page.seoText}</P>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag tag='primary' key={t}>{t}</Tag>)}
        </div>
    );
};
