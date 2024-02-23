import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'

const App = () => {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
