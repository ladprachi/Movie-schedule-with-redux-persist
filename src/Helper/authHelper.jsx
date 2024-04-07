
export const getSessionData = () => {
  const session = localStorage.getItem('authCredentials')
  return session ? JSON.parse(session) : null
} 