import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import StagePage from "./views/StagePage";
import PerformanceDetailPage from "./views/PerformanceDetailPage";
import "./App.css";
import HomePage from "./views/HomePage";

const router = createBrowserRouter([
  {
    path: "/musicfestival/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "stagepage/:stageId",
        element: <StagePage />,
      },
      {
        path: "performancedetailpage/:eventId",
        element: <PerformanceDetailPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;