import { createBrowserRouter } from "react-router-dom";
import Login from "../features/identity/login/login";
import Register from "../features/identity/register/register";
import IdentityLayout from "../layout/identity-layout/identity-layout";

const router = createBrowserRouter([
    {
        Component: IdentityLayout,
        children: [
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },

        ]
    }


]);

export default router;