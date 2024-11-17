import AboutUsPage from "../pages/AboutUs";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
];

export default routes;
