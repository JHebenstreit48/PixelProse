import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/Error";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <App />,,
        errorElement: <ErrorPage />,
        children: [],
            {
                index: true,
                element: <Home />
            },
    },
]);