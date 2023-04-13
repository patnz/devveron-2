import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider
      domain="devverontwooh.au.auth0.com"
      clientId="O0cNH15oHl7Vbtw1PG2PeaY9U5gjPkyb"
      redirectUri={window.location.origin} //type issue
      audience="https://devverontwooh/api"
    >
      <Router>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
      </Router>
    </Auth0Provider>
  )
})
