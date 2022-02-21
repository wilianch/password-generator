import { createContext, useState } from 'react'

export const PasswordContext = createContext(null)

export const Provider = ({ children }) => {
  const [password, setPassword] = useState('')

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      { children }
    </PasswordContext.Provider>
  )
}
