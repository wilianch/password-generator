import styles from './index.module.css'
import { ReactComponent as IconCopy } from 'assets/icons/copy.svg'
import { useContext } from 'react'
import { PasswordContext } from 'context/password'

export default function ResultBar () {
  const { password } = useContext(PasswordContext)
  const copy = () => navigator.clipboard.writeText(password)

  return (
    <section onClick={copy} className={styles.result}>
      <input
        className={styles.result_input}
        type="text"
        value={password}
        disabled
        placeholder="Password..."
      />
      <IconCopy className={styles.result_icon} />
    </section>
  )
}
