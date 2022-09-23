import styles from './icon.module.css';

export interface IIcon {
  icon: string;
  iconName: string;
}

const Icon = ({ icon, iconName }: IIcon): JSX.Element => (
  <div className={styles.container}>
    <img src={icon} alt={iconName} />
  </div>
);

export default Icon;
