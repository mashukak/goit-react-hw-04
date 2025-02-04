import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Circles color="#00BFFF" height={80} width={80} />
    </div>
  );
}
