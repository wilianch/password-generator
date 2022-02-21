import { useContext, useState } from 'react'
import { PasswordContext } from 'context/password'
import styles from './index.module.css'

export default function Form () {
  const { setPassword } = useContext(PasswordContext)
  const [alphabet, setAlphabet] = useState('abcdefghijklmnopqrstuvwxyz')
  const [size, setSize] = useState(16)

  const options = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '!#$%&|=?-_:/*-+><()[]{}'
  }

  const changeAlphabet = event => {
    const value = event.target.checked
    const name = event.target.name
    const letters = options[name]

    if (value) {
      const result = `${alphabet}${letters}`
      setAlphabet(result)
    } else {
      const result = alphabet.replace(letters, '')
      setAlphabet(result)
    }
  }

  const generatePassword = event => {
    event.preventDefault()
    const response = []

    for (let i = 0; i < size; i++) {
      const numberRandom = Math.floor(Math.random() * alphabet.length)
      const letter = alphabet.charAt(numberRandom)
      response.push(letter)
    }

    setPassword(response.join(''))
  }

  return (
    <form className={styles.form} onSubmit={generatePassword}>

      <section className={styles.form_top}>
        <label className={styles.number}>
          Length
          <input
            className={styles.number_input}
            value={size}
            onChange={e => setSize(e.target.value)}
            type="number"
            inputMode="decimal"
            pattern="[0-9]"
            name="size"
            min={4}
            max={100}
          />
        </label>

        <input className={styles.form_submit} type="submit" value="generate" />
      </section>

      <span className={styles.form_separator} >Options to password generator</span>

      <section className={styles.options}>
        <label className={styles.options_item} htmlFor="lower">
          <input className={styles.options_check} id="lower" type="checkbox" name="lower" defaultChecked={true} onChange={changeAlphabet} />
          <span className={styles.options_name}>Lowercase</span>
        </label>

        <label className={styles.options_item} htmlFor="upper">
          <input className={styles.options_check} id="upper" type="checkbox" name="upper" onChange={changeAlphabet} />
          <span className={styles.options_name}>Uppercase</span>
        </label>

        <label className={styles.options_item} htmlFor="number">
          <input className={styles.options_check} id="number" type="checkbox" name="number" onChange={changeAlphabet} />
          <span className={styles.options_name}>Numbers</span>
        </label>

        <label className={styles.options_item} htmlFor="symbol">
          <input className={styles.options_check} id="symbol" type="checkbox" name="symbol" onChange={changeAlphabet} />
          <span className={styles.options_name}>Symbols</span>
        </label>
      </section>

    </form>
  )
}
