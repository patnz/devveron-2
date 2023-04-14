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
        <nav>
          <p>WELCOME {user?.nickname} !</p>
          <button onClick={handleSignOut}>sign out</button>
        </nav>
      </IfAuthenticated>
      <IfNotAuthenticated>
        <nav>
          <p>you are not logged in</p>
          <button onClick={handleSignIn}>sign in</button>
        </nav>
      </IfNotAuthenticated>
    </>
  )
}
