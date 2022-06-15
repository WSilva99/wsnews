import SignInButton from '../SignInButton';
import styles from './styles.module.scss';

export default function Header() {
  return (
    <header className={styles.herderContainer}>
      <div className={styles.headerContent}>
        <div className={styles.brand}>
          <span>ws</span>.<strong>news</strong>
        </div>
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Sobre</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}