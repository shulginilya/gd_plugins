import React, { ReactNode, useEffect } from 'react';
import {
	LogoComponent,
	EnablePluginsComponent,
	NavigationComponent,
	PluginsListingComponent
} from '@/components';
import { useAppSelector, useAppDispatch } from "@/appStore/hooks";
import {
	selectData,
	fetchPlugins,
	Status
} from "@/appStore/reducers/pluginSlice";
import { useParams } from 'react-router-dom';
import styles from './plugins_container.module.scss';

const PluginsContainer: React.FC = () => {
	const dispatch = useAppDispatch();
	/*
		Retrieve state data from the redux
	*/
	const {
		data,
		status,
		error
	} = useAppSelector(selectData);
	/*
		Retrieve current tab id from the router
	*/
	const { current_tab_id } = useParams();
	/*
		Initial load of plugins data
	*/
	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchPlugins());
		}
	}, [status, dispatch]);
	/*
		Render our template
	*/
	const renderPluginsList = (): ReactNode => {
		switch(status) {
			case Status.loading: return (
				<div>loading spinner</div>
			)
			case Status.succeeded: return (
				<PluginsListingComponent
					tabs={data}
					current_tab_id={current_tab_id}
				/>
			)
			case Status.failed: return (
				<div>error message</div>
			)
		}
	};
	return (
		<main className={styles.plugins_container}>
			<aside className={styles.plugins_container__navi}>
				<LogoComponent />
				<NavigationComponent
					tabs={data}
					current_tab_id={current_tab_id}
				/>
				<EnablePluginsComponent />
			</aside>
			<div className={styles.plugins_container__content}>
				{renderPluginsList()}
			</div>
		</main>
	)
};

export default PluginsContainer;
