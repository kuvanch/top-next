import React, { useReducer } from 'react';
import { Htag,Tag,HhData,Advantages,Sort} from '..';
import { TopLevelCategory } from '../../interfaces/toppage.interface';
import { Product } from '../Product/Product';
import { SortEnum } from '../Sort/Sort.props';
import { sortReducer } from './sort.reducer';
import styles from './TopPage.module.css';
import { TopPageProps } from './TopPage.props';

export const TopPage = ({page,firstCategory,products}:TopPageProps):JSX.Element => {
    const [{products: sortedProducts,sort}, dispatchSort] = useReducer(sortReducer,{products,sort: SortEnum.Rating});

    const setSort = (sort:SortEnum) => {
      dispatchSort({type:sort});
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
              <Htag tag='h1'>{page.title}</Htag>
              <Tag tag='grey'>{products && products.length}</Tag>
              <Sort sort={sort} setSort={setSort}/>
            </div>  
            <div>
                {sortedProducts && sortedProducts.map(p => <Product key={`${p._id}`} product={p}/>)}
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
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html:page.seoText}}/>}
            <Htag tag='h2'>Получаемые навыки</Htag>
            {page.tags.map(t => <Tag tag='primary' key={t}>{t}</Tag>)}
        </div>
    );
};
