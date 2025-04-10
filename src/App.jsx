import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Content from "./views/Content";
import Omos from "./views/Omos";
import Services from "./views/Services";
import Kontakt from "./views/Kontakt";
import Home from "./views/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "content",
          element: <Content />,
        },
        {
          path: "omos",
          element: <Omos />,
        },
        {
          path: "kontakt",
          element: <Kontakt />,
        },
      ],
    },
  ],
);


function App() {
  return <RouterProvider router={router} />;
}


export default App;
