import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';


import styles from './styles.module.scss';

export default function SignInButton() {
  const isUserLogged = true;

  return isUserLogged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--cyan-500)" className={styles.gitIcon} />
      User Name
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="var(--yellow-500)" className={styles.gitIcon} />
      Sign in with Github
    </button>
  )
}