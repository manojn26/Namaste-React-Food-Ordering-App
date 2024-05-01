import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //named import
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";

// Example of Congif Driven UI
// const config = [
//   {
//     type: "carousel",
//     cards: [
//       {
//         offerName: "50% off",
//       },
//       {
//         offerName: "No Delivery Charge",
//       },
//     ],
//   },
//   {
//     type: "restraunts",
//     cards: [
//       {
//         name: "Mc Donald's",
//         image:
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/c2d802cb-ca03-4372-9f83-e3f34b318a71_56506.jpg",
//         cusines: ["Burgers", "Beverages"],
//         rating: "4.5",
//       },
//       {
//         name: "KFC",
//         image:
//           "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/c2d802cb-ca03-4372-9f83-e3f34b318a71_56506.jpg",
//         cusines: ["Burgers", "Beverages"],
//         rating: "4.5",
//       },
//     ],
//   },
// ];

// This is known as config driven UI; baceknd should control our data

const AppLayout = () => {
  return (
    /*
            Header
                - Logo
                - Nav Items (right side)
                - Cart
            Body
                - Search Bar
                - Restraunt List
                        - Restraunt Card (Many cards)
                                - Image
                                - Name
                                - Rating
                                - Cusines
            Footer
                - Links
                - Copyrights
        */
    <>
      <Header />
      {/* {Outlet} */}

      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
