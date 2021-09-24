import React, { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './Menu.module.css';
import Link from 'next/link';
import cn from 'classnames';
import { PageItem } from '../../interfaces/menu.interface';
import { useRouter } from 'next/router';
import { firstLevelMenu, firstLevelMenuItem } from '../../helpers/helpers';
import { motion } from 'framer-motion';



export const Menu = ():JSX.Element => {
    const {menu,firstCategory,setMenu} = useContext(AppContext);
    const router = useRouter();

    const viriants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {marginBottom: 0}
    };
    const variatsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {opacity: 0, height: 0}
    };

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
                        <motion.div 
                            className={cn(styles.secondLevelBlock)}
                            layout
                            initial={m.isOpened ? 'visible' : 'hidden'}
                            animate={m.isOpened ? 'visible' : 'hidden'}
                            variants={viriants}
                        >
                            {buildThirdLevel(m.pages,menuItem.route)}
                        </motion.div>
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
                <motion.div variants={variatsChildren} key={p._id}>
                    <Link href={`/${route}/${p.alias}`}>
                        <a className={cn(styles.thirdLevel,{
                            [styles.thirdLevelActice]: `/${route}/${p.alias}` == router.asPath
                        })}>
                            {p.category}
                        </a>
                    </Link>
                </motion.div>
                
            ))
        );
    };
    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};

