import { createContext, ReactNode, useContext, useState } from "react";

interface IUserContext {
  name: string
}

const UserPage = createContext<IUserContext | undefined>(undefined)

export function Page ({ children }: {children: ReactNode}){
  const [user] = useState({
    name: 'Willard'
  })

  console.log(user)
  return (
    <UserPage.Provider value={user}>{children}</UserPage.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useIContextUser = () => {
  const context = useContext(UserPage)
  console.log(context)

  if(context == null) throw new Error('Ocorreu um erro')

  return context
}
