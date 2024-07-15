import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom'

import { store } from './store.ts'
import { Provider } from 'react-redux'
import { Counter } from './Components/Counter.tsx'

const Router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/counter",
    element:<Counter/>
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router}/>
    </Provider>
  </React.StrictMode>,
)
