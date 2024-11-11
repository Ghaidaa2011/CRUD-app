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
import { lazy } from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PageSuspenseFallback from "../components/feedback/PageSuspenseFallback/PageSuspenseFallback";

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
          <PageSuspenseFallback>
            <AddPost />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "post/:id",
        element: (
          <PageSuspenseFallback>
            <Details />
          </PageSuspenseFallback>
        ),
        loader: postParamHandler,
      },
      {
        path: "post/:id/edit",
        element: (
          <PageSuspenseFallback>
            <EditPost />
          </PageSuspenseFallback>
        ),
        loader: postParamHandler,
      },
      {
        path: "signup",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <PageSuspenseFallback>
            <Profile />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
