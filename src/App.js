import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import AddStudentForm from './components/AddStudentForm';
import ManageStudents from './pages/ManageStudents';
import SideNav from './components/SideNav';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <SideNav />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/addStudent",
        element: <AddStudentForm />
      },
      {
        path: "/manage",
        element: <ManageStudents />
      },
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
