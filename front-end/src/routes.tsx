import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import ErrorPage from "./pages/error";
import LandingPage from "./pages/page";
import AuthLayout from "./pages/auth/layout";
import SignInPage from "./pages/auth/signin-page";
import DashboardLayout from "./pages/dashboard/layout";
import DashboardPage from "./pages/dashboard/page";
import ResultsPage from "./pages/results/page";
import ResultsLayout from "./pages/results/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [{ path: "/auth/sign-in", element: <SignInPage /> }],
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [{ path: "/dashboard", element: <DashboardPage /> }],
      },
      {
        path: "/results/:searchTerm",
        element: <ResultsLayout />,
        children: [{ path: "/results/:searchTerm", element: <ResultsPage /> }],
      },
    ],
  },
]);

export default router;
