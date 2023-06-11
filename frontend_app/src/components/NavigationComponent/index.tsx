import { TabType } from '@/types';
import styles from './navigation.module.scss';
import { Link } from 'react-router-dom';

interface NavigationComponentType {
    tabs: TabType[];
    current_tab_id: string | undefined;
};

const NavigationComponent: React.FC<NavigationComponentType> = ({
    tabs,
    current_tab_id
}) => {
	return (
        <div className={styles.navigation}>
            <ul className={styles.navigation__list}>
                {
                    tabs.map(t => {
                        const navigationItemClass = current_tab_id === t.id ? `${styles.navigation__list__item} ${styles.navigation__list__item_active}` : styles.navigation__list__item;
                        return (
                            <li
                                key={t.id}
                                className={navigationItemClass}
                            >
                                <Link
                                    className={styles.navigation__list__item__link}
                                    to={`/${t.id}`}
                                >
                                    {
                                        t.icon && (
                                            <img
                                                className={styles.navigation__list__item__link__icon}
                                                src={`/images/${t.icon}.png`}
                                            />
                                        )
                                    }
                                    {t.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
	)
};

export default NavigationComponent;
