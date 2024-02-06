import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./constants";
import { HomeRoute, LoginRoute, RegisterRoute } from "./routes";

const router = createBrowserRouter([
  { path: Routes.Home, element: <HomeRoute /> },
  { path: Routes.Register, element: <RegisterRoute /> },
  { path: Routes.Login, element: <LoginRoute /> },
  { path: "*", element: <div>Not Found</div> },
]);

export default () => <RouterProvider router={router} />;
