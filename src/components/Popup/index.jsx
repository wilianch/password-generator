import styles from './index.module.css'
import { ReactComponent as IconCheck } from 'assets/icons/check.svg'

export default function Popup () {
  return (
    <div className={`${styles.popup}`}>
      <span className={styles.popup_icon}>
        <IconCheck className={styles.popup_icon_svg} />
      </span>
      Copied!
    </div>
  )
}
