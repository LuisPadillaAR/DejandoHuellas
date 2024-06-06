import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Home } from './components/home/Home';
import Management from './components/management/Management';

export default function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <div>Error</div>
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/management',
      element: <Management />
    }
  ])
 
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}


