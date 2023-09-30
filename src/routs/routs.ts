import { createBrowserRouter } from "react-router-dom";
import Login, { ActionLogin } from "../features/identity/login/login";
import Register, { ActionRegister } from "../features/identity/register/register";
import IdentityLayout from "../layout/identity-layout/identity-layout";
import MainLayout from "../layout/mainLayout/mainLayout";
import courses from "../pages/courses/corses";

const router = createBrowserRouter([
	{
		path:'/',
		Component:MainLayout,
		children:[
			{
				Component:courses,
				index:true
			}
		]
	},
	{
		Component: IdentityLayout,
		children: [
			{
				path: "login",
				Component: Login,
				action: ActionLogin,
				ErrorBoundary: Login,
			},
			{
				path: "register",
				Component: Register,
				action: ActionRegister,
				ErrorBoundary: Register,
			},
		],
	},
]);

export default router;
