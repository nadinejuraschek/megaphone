import styles from './footer.module.css';

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div>© {new Date().getFullYear()} Nadine Pesso</div>
    <div className={styles.attribution}>
      Megaphone Icon by{' '}
      <a
        href='https://www.flaticon.com/authors/vitaly-gorbachev'
        title='Vitaly Gorbachev'
      >
        Vitaly Gorbachev
      </a>{' '}
      from{' '}
      <a href='https://www.flaticon.com/' title='Flaticon'>
        www.flaticon.com
      </a>
    </div>
  </footer>
);

export default Footer;
