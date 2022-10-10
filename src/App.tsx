import { AuthGoogleProvider } from './contexts/authGoogle.js'
import Router from './routes/routes'

export function App() {
  return (
    <AuthGoogleProvider>
      <Router />
    </AuthGoogleProvider>
  )
}

export default App
