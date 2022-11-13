import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/home'
import Following from '@/pages/following'
import NotFound from '@/pages/NotFound'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/following',
    element: <Following />
  },
  {
    path: '*',
    element: <NotFound />
  }
])
