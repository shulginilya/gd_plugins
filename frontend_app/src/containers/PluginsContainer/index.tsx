import {
	LogoComponent,
	EnablePluginsComponent,
	NavigationComponent,
	PluginsListingComponent
} from '@/components';
import { useParams } from 'react-router-dom';
import styles from './plugins_container.module.scss';

const PluginsContainer: React.FC = () => {
	const { plugin_id } = useParams();
	console.log('plugin_id: ', plugin_id);
	return (
		<main className={styles.plugins_container}>
			<aside className={styles.plugins_container__navi}>
				<LogoComponent />
				<NavigationComponent />
				<EnablePluginsComponent />
			</aside>
			<div className={styles.plugins_container__content}>
				<PluginsListingComponent />
			</div>
		</main>
	)
};

export default PluginsContainer;
