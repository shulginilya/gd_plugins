import { PluginType } from '@/types';
import styles from './enable_plugins.module.scss';

interface EnablePluginsComponentType {
    plugins: PluginType[]
};

const EnablePluginsComponent: React.FC<EnablePluginsComponentType> = ({
    plugins
}) => {
    const isEnabled = plugins.every(p => p.enabled);
    const toggleClass = isEnabled ? 'toggle__switch toggle__switch_active' : 'toggle__switch';
    const enablePluginsClass = isEnabled ? `${styles.enable_plugins} ${styles.enable_plugins__enabled}` : styles.enable_plugins;
	return (
        <div className={enablePluginsClass}>
            <div className={styles.enable_plugins__inside}>
                <p className={styles.enable_plugins__inside__text}>All plugins enabled</p>
                <div className={styles.enable_plugins__inside__toggle}>
                    <div className={toggleClass}></div>
                </div>
            </div>
        </div>
	)
};

export default EnablePluginsComponent;
