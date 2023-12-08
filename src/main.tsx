import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/PublicRoute'
import './styles/style.css'
import { Provider } from 'react-redux'
import { persistor, store } from './services/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={routes} />
      </Suspense>
    </PersistGate>
  </Provider>
)
