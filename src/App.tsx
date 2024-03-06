import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./constants";
import {
  ServiceRoute,
  LoginRoute,
  RegisterRoute,
  DashboardRoute,
  dashboardLoader,
  HomeRoute,
} from "./routes";

const router = createBrowserRouter([
  { path: Routes.Home, element: <HomeRoute /> },
  { path: Routes.Service, element: <ServiceRoute /> },
  { path: Routes.Register, element: <RegisterRoute /> },
  { path: Routes.Login, element: <LoginRoute /> },
  {
    path: Routes.Dashboard,
    element: <DashboardRoute />,
    loader: dashboardLoader,
  },
  { path: "*", element: <div>Not Found</div> },
]);

export default () => <RouterProvider router={router} />;
