import { IIcon } from './types';
import styles from './icon.module.css';

const Icon = ({ icon, iconName }: IIcon): JSX.Element => (
  <div className={styles.container}>
    <img src={icon} alt={iconName} />
  </div>
);

export default Icon;
