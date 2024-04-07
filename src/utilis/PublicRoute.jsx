import { Navigate } from 'react-router-dom'
import { getSessionData } from '../Helper/authHelper'

// eslint-disable-next-line react/prop-types
export default function PublicRoute({ children }) {
  return !getSessionData() ? children : <Navigate to='/' />
}
