import { createBrowserRouter } from 'react-router-dom';
import App from "./App";
import HomePage from "./pages/home";
import Journey from "./pages/journey";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'journey',
                element: <Journey />,
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage />,
    }
]);

export default router;