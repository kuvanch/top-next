import React from 'react';
import { Htag,Tag,HhData} from '..';
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
            {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
        </div>
    );
};
