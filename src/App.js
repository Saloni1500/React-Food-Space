import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense
              fallback={
                <div>
                  <p>Loading...</p>
                </div>
              }
            >
              <Grocery />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restautrants/:resId",
          element: <RestaurantMenu />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
