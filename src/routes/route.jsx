import AboutUsPage from "../pages/AboutUs";
import HomePage from "../pages/Home";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";

const routes = [
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/projects", element: <Projects /> },
];

export default routes;
