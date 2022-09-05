import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Layout, TableRtk } from "./router/router";
import "./App.css";
import "antd/dist/antd.css";
import "antd/dist/antd.variable.min.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            path="/table"
            element={
              <Suspense fallback={<div>Loading ...</div>}>
                <TableRtk />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
