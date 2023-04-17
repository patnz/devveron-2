import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  loggingOut: () => void
}

export function Nav({ loggingOut }: Props) {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    console.log('sign out', user?.nickname)
    loggingOut()
    logout()
  }

  const handleSignIn = () => {
    console.log('sign in', user)
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <nav className="nav-container">
          <h1 className="nav-message">Welcome {user?.nickname}!</h1>
          <button className="log-button" onClick={handleSignOut}>
            SIGN OUT
          </button>
        </nav>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <nav className="nav-container">
          <h1 className="nav-message">You are not logged in 🗝️ </h1>
          <button className="log-button" onClick={handleSignIn}>
            SIGN IN
          </button>
        </nav>
      </IfNotAuthenticated>
    </>
  )
}
