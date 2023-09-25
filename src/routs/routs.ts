import { createBrowserRouter } from "react-router-dom";
import Login from "../features/identity/login/login";
import Register from "../features/identity/register/register";

const router = createBrowserRouter([
  {
    path: 'login',
    Component: Login
  },
  {
    path: 'register',
    Component: Register
  },
  
]);

export default router;