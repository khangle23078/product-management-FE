import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/PublicRoute'
import './styles/style.css'
import { Provider } from 'react-redux'
import { store } from './services/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={routes} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
