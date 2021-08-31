import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';

import cn from 'classnames';
import { PageItem } from '../../interfaces/menu.interface';
import { useRouter } from 'next/router';
import { firstLevelMenu, firstLevelMenuItem } from '../../helpers/helpers';




export const Menu = ():JSX.Element => {
    const {menu,firstCategory,setMenu} = useContext(AppContext);
    const router = useRouter();

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if(m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <a href={`/${m.route}`}>
                            <div className={cn(styles.firstLevel,{
                                [styles.firstLevelActive]: m.id === firstCategory
                            })}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </a>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };
    const buildSecondLevel = (menuItem: firstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => {
                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages,menuItem.route)}
                        </div>
                    </div>
                );
            }
        )}
            </div>
        );
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel,{
                    [styles.thirdLevelActice]: `/${route}/${p.alias}` == router.asPath
                })}>
                    {p.category}
                </a>
            ))
        );
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};

