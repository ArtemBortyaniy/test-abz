import React, { lazy, FC } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home/Home"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
