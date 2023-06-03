import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { publicRoutes, privateRoutes } from "~/routes";
import PrivateRoutes from "~/routes/PrivateRoutes";
import NotFound from "~/pages/NotFound"
import axios from "axios";

import "./App.css";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("/api/v1/users/info")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Router>
      <UserContext.Provider value={user}>
        <div className="App">
          <Routes>
            <Route path="*" element={<NotFound />} />
            {publicRoutes.map((route, index) => {
              let Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}

            <Route element={<PrivateRoutes/>}>
              {privateRoutes.map((route, index) => {
                let Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
            </Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
