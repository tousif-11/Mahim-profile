import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Achievement from "./pages/Achievement";
import Contact from "./pages/Contact";
import Home from "./pages/Home";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'achievement',
                element: <Achievement />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
]);

export default router;
      