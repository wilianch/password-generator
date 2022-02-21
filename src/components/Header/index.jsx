import styles from './index.module.css'
import ToggleMode from 'components/ToggleMode'

export default function Header () {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>PasswordGenerator</h1>
      <ToggleMode />
    </header>
  )
}
