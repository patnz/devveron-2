import { useAuth0 } from '@auth0/auth0-react'

function LoginPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <div className="login-page">
        <h2>Enter Here!</h2>
        <br />
        <button onClick={loginWithRedirect}>Login</button>
      </div>
    </>
  )
}

export default LoginPage
