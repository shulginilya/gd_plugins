import styles from './logo.module.scss';

const LogoComponent: React.FC = () => {
	return (
        <div className={styles.logo}>
            Data<span className={styles.logo__bold}>Guard</span>
        </div>
	)
};

export default LogoComponent;
