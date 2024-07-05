import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { Home } from './components/home/Home';
import Management from './components/management/Management';
import Patient from './components/patient/Patient';
import { CreatePatient } from './components/patient/CreatePatient';
import { ViewPatient } from './components/patient/ViewPatient';

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
    },
    {
      path: '/patients',
      element: <Patient />
    },
    {
      path: '/patients/create',
      element: <CreatePatient />
    },
    {
      path: '/patients/:id',
      element: <ViewPatient />
    }
  ])
 
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}


