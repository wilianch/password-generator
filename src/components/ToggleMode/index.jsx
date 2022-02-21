import { ReactComponent as IconMoon } from 'assets/icons/moon.svg'
import { ReactComponent as IconSun } from 'assets/icons/sun.svg'
import styles from './index.module.css'
import { useState } from 'react'

export default function ToggleMode () {
  const body = document.body
  const [darkMode, setDarkMode] = useState(() => {
    const res = localStorage.getItem('PassGenDarkMode')
    return !!res
  })

  if (darkMode) {
    localStorage.setItem('PassGenDarkMode', true)
    body.classList.replace('light', 'dark')
  } else {
    localStorage.removeItem('PassGenDarkMode')
    body.classList.replace('dark', 'light')
  }

  const changeTheme = () => setDarkMode(!darkMode)

  return (
    <button onClick={changeTheme} className={styles.toggle}>
      { darkMode
        ? <IconSun className={styles.toggle_icon_sun}/>
        : <IconMoon className={styles.toggle_icon_moon}/>
      }
    </button>
  )
}
