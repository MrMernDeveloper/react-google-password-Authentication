import { getAuth } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import From from './components/FROM/From';
import Main from './components/Layout/Main';
import Login from './components/Login/Login';
import app from './firebase/firebase.init';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <From></From>,
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <From></From>,
      }
    ]

  }

])

function App() {
  return (
    <div className="">
  
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
