import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import MainContainer from "../pages/MainContainer/MainContainer";
import Loader from "../store/components/ui/Loader/Loader";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer/>,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader/>}>
            <HomePage/>
          </Suspense>
        )
      }
    ]
  }
])