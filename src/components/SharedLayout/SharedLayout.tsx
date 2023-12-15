import React, { FC } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const SharedLayout: FC = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
