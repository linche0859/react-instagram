import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/home'
import Following from '@/pages/following'
import NotFound from '@/pages/NotFound'

const routes: RouteObject[] = [
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
]

export default routes
