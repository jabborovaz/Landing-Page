import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Registration, Layout, TableRtk } from "./router/router";

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
