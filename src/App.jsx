import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/route";
import HomePage from "./pages/Home";
import Layout from "./layout/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        {routes.map((route, i) => (
          <Route key={`${i}+${route.path}`} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
