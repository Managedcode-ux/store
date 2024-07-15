import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './main.css'

import {store} from './store.ts'
import { Provider } from 'react-redux'

import Oblivion from './Components/Oblivion.tsx'
import Carousel from './Elememts/ImageCarousel.tsx'

const Router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/oblivion',
    element:<Oblivion />
  },
  {
    path:'/carousel',
    element:<Carousel />
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router}/>
    </Provider>
  </React.StrictMode>,
)
