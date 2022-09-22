import styles from './icon.module.css';

const Icon = ({ icon, iconName }) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt={iconName} />
    </div>
  );
};

export default Icon;
