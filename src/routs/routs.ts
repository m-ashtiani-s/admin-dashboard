import { createBrowserRouter } from "react-router-dom";
import Login, { ActionLogin } from "../features/identity/login/login";
import Register, { ActionRegister } from "../features/identity/register/register";
import IdentityLayout from "../layout/identity-layout/identity-layout";

const router = createBrowserRouter([
    {
        Component: IdentityLayout,
        children: [
            {
                path: 'login',
                Component: Login,
                action:ActionLogin
            },
            {
                path: 'register',
                Component: Register,
                action:ActionRegister
            },

        ]
    }


]);

export default router;