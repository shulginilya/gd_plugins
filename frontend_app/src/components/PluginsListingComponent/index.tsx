import {
    PluginType,
    ModifyPluginType,
} from '@/types';
import styles from './plugins_listing.module.scss';

interface NavigationComponentType {
    plugins: (PluginType | null)[];
    title: string;
    modifyPluginItem: (data: ModifyPluginType) => void
};

const PluginsListingComponent: React.FC<NavigationComponentType> = ({
    plugins,
    title,
    modifyPluginItem
}) => {
    const modifyPluginItemHandler = (plugin: PluginType | null) => {
        if (plugin) {
            const {id, ...rest} = plugin;
            rest.active = !rest.active;
            modifyPluginItem({
                id,
                params: rest
            });
        }
    };
	return (
        <>
            <p className={styles.plugins_listing__title}>{title}</p>
            <div className={styles.plugins_listing__wrap}>
                {
                    plugins.map(plugin => {
                        const toggleClass = plugin?.active ? 'toggle__switch toggle__switch_active' : 'toggle__switch';
                        const toggleText = plugin?.active ? 'Allowed' : 'Blocked';
                        return (
                            <div
                                key={plugin?.id}
                                className={styles.plugins_listing__item_wrap}
                            >
                                <div
                                    className={styles.plugins_listing__item}
                                >
                                    <p className={styles.plugins_listing__item__title}>{plugin?.title}</p>
                                    <p className={styles.plugins_listing__item__desc}>{plugin?.description}</p>
                                    <div
                                        onClick={() => modifyPluginItemHandler(plugin)}
                                        className={styles.plugins_listing__item__toggle}
                                    >
                                        <div className={toggleClass}>
                                            <span className="toggle__switch__text">{toggleText}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
	)
};

export default PluginsListingComponent;
