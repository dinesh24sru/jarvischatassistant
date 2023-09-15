import { Login } from "./public-screens/login";
import { Register } from "./public-screens/register";

const routes = () => {
  const publicRoutes = [
    {
      path: "/login",
      Component: <Login />,
    },
    {
      path: "/sign-up",
      Component: <Register />,
    },
  ];

  return { publicRoutes };
};

export default routes;
