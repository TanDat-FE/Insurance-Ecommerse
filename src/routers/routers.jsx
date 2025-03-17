import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Products from "@/Pages/Products/Products";

import Login from "@components/ContentSideBar/Login/Login";
import Register from "@components/ContentSideBar/Login/Register";
import About from "@components/Get_a_quote/About";
import InsuranceHistory from "@components/Get_a_quote/Your_insurance_history";
import HomeInsuranceQuote from "@components/Get_a_quote/Primary_Coverage";
// import ProtectedRoute from "@components/ProtectedRoute/ProtectedRoute";
import Home from "@/Pages/Home/Home";
import FindAgent from "@components/Find_An_Agent/FindAgent";
import FindAgentResults from "@components/Find_Agent_Results/FindAgentResults";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          //   <ProtectedRoute>
          <Home />
          //   </ProtectedRoute>
        ),
      },
      {
        path: "/product",
        element: (
          //   <ProtectedRoute>
          <Products />
          //   </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/quote/about",
        element: <About />,
      },
      {
        path: "/quote/insurance-history",
        element: <InsuranceHistory />,
      },
      {
        path: "/quote/primary-coverage",
        element: <HomeInsuranceQuote />,
      },
      {
        path: "/agent",
        element: <FindAgent />,
      },
      {
        path: "/agent/find-insurance",
        element: <FindAgentResults />,
      },
    ],
  },
]);

export default routers;
