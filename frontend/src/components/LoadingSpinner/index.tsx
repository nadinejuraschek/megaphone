import styles from './loadingSpinner.module.css';

const LoadingSpinner = (): JSX.Element => (
  <div className={styles.spinner}>
    <div />
    <div />
  </div>
);

export default LoadingSpinner;
