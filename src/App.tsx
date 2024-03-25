import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Routes } from "./constants";
import {
  ServiceRoute,
  LoginRoute,
  RegisterRoute,
  DashboardRoute,
  dashboardLoader,
  HomeRoute,
  PricingRoute,
  ContactsRoute,
} from "./routes";

const router = createBrowserRouter([
  { path: Routes.Home, element: <HomeRoute /> },
  { path: Routes.Service, element: <ServiceRoute /> },
  { path: Routes.Pricing, element: <PricingRoute /> },
  { path: Routes.Testimonials, element: <PricingRoute /> },
  { path: Routes.Team, element: <PricingRoute /> },
  { path: Routes.Register, element: <RegisterRoute /> },
  { path: Routes.Login, element: <LoginRoute /> },
  { path: Routes.Contacts, element: <ContactsRoute /> },
  {
    path: Routes.Dashboard,
    element: <DashboardRoute />,
    loader: dashboardLoader,
  },
  { path: "*", element: <div>Not Found</div> },
]);

export default () => <RouterProvider router={router} />;
