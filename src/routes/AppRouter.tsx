import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunctionArgs,
} from "react-router-dom";
// layouts
import RootLayout from "../layouts/RootLayout";
// pages
import Index from "../pages/Index";
import Error from "../pages/Error";
//lazy load
import { Suspense, lazy } from "react";
import Login from "../pages/Login";

const AddPost = lazy(() => import("../pages/AddPost"));
const EditPost = lazy(() => import("../pages/EditPost"));
const Details = lazy(() => import("../pages/Details"));

const postParamHandler = ({ params }: LoaderFunctionArgs<{ id: string }>) => {
  if (isNaN(Number(params.id))) {
    throw new Response("Bad Request", {
      statusText: "please make sure to insert correct post ID",
      status: 400,
    });
  }
  return true;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      { path: "post", element: <Index /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback="Loading, please wait...">
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback="Loading, please wait...">
            <Details />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="Loading, please wait...">
            <EditPost />
          </Suspense>
        ),
        loader: postParamHandler,
      },
      {
        path: "post/login",
        element: (
          <Suspense fallback="Loading, please wait...">
            <Login />
          </Suspense>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
