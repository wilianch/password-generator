import styles from './index.module.css'
import { ReactComponent as IconCopy } from 'assets/icons/copy.svg'
import { useContext, useState } from 'react'
import { PasswordContext } from 'context/password'
import Popup from 'components/Popup'

export default function ResultBar () {
  const { password } = useContext(PasswordContext)
  const [view, setView] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(password)
    setView(true)
    setTimeout(() => setView(false), 1000)
  }

  return (
    <>
      { view && <Popup /> }
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
    </>
  )
}
