import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import LoadingIndicator from "../LoadingIndicator";
import { Router } from "react-router";

// Not sure if I really need to have the suspense & fallback here but
// I think it's a good habit to have as components are being loaded.

// Also using react-router-dom for routing.
// react-router-dom docs: https://reactrouter.com/en/main/start/overview

const App: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <RecoilRoot>
        <Router>{/* <Routes /> */}</Router>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
