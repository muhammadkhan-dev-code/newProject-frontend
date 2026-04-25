//  state layer implemention

import { useEffect, useState } from 'react'
import { AuthContext } from './authContext.jsx'
import { getCurrentUser } from './services/auth.api.js'

export const AuthProvider = ({ children }) => {
  //   user as  a null
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  //  after raloading the user data will not be empty;
  useEffect(() => {
    const getUser = async () => {
      const data = await getCurrentUser()
      setUser(data.user)
      setLoading(false)
    }
    getUser()
  }, [])

  return (
    //  complete  access of value obj entire web app
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
