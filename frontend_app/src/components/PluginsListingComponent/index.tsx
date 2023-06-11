import { TabType } from '@/types';
import styles from './plugins_listing.module.scss';

interface NavigationComponentType {
    tabs: TabType[];
    current_tab_id: string | undefined;
};

const PluginsListingComponent: React.FC<NavigationComponentType> = ({
    tabs,
    current_tab_id
}) => {
    console.log(tabs);
	return (
        <div className={styles.plugins_listing}>
            plugins lisitng
        </div>
	)
};

export default PluginsListingComponent;
