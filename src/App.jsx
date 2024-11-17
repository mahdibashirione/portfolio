import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/route";
import Layout from "./layout/layout";
import { BackgroundMotion } from "./components/backgroundMotion";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        {routes.map((route, i) => (
          <Route key={`${i}+${route.path}`} {...route} />
        ))}
      </Routes>
      <BackgroundMotion />
    </Layout>
  );
}

export default App;
