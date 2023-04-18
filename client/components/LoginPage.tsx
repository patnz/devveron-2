import { useAuth0 } from '@auth0/auth0-react'

function LoginPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <>
      <div className="login-page-container">
        <h1 className="welcome-title">Welcome to Devveron!</h1>
        <h2 className="welcome-message">
          .... ... .. ..... ... .. ... .. ... .. ...... ... ... .. .. ...
          ........ .. .... ... .. ..... ... .. ... .. ... .. ...... ... ... ..
          .. ... ........ .. .... ... .. ..... ... .. ... .. ... .. ...... ...
          ... .. .. ... ........ .. .... ... .. ..... ... .. ... .. ... ..
          ...... ... ... .. .. ... ........ .. .... ... .. ..... ... .. ... ..
          ... .. ...... ... ... .. .. ... ........ .. .... ... .. ..... ... ..
          ... .. ... .. ...... ... ... .. .. ... ........ ..{' '}
        </h2>
        {/* <button onClick={loginWithRedirect}>Login</button> */}
      </div>
    </>
  )
}

export default LoginPage
