import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { publicRoutes, privateRoutes } from "~/routes";
import PrivateRoutes from "~/routes/PrivateRoutes";
import NotFound from "~/layouts/components/NotFound"
import { Context } from "./userContext/Context";

import "./App.css";

function App() {
  const [user, setUser] = useState();

  return (
    <Router>
      <Context>
        <div className="App">
          <Routes>
            <Route path="*" element={<NotFound />} />
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}

            {/* <Route element={<PrivateRoutes/>}>
              {privateRoutes.map((route, index) => {
                let Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Route> */}
          </Routes>
        </div>
      </Context>
    </Router>
  );
}

export default App;
