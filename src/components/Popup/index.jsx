import styles from './index.module.css'
import { ReactComponent as IconCheck } from 'assets/icons/check.svg'

export default function Popup ({ view }) {
  return (
    <div className={`${styles.popup} ${view ? styles.popup_animate : ''}`}>
      <span className={styles.popup_icon}>
        <IconCheck className={styles.popup_icon_svg} />
      </span>
      Copied!
    </div>
  )
}
