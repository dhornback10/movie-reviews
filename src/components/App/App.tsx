import React, { Suspense } from "react";
import { RecoilRoot } from "recoil";
import LoadingIndicator from "../LoadingIndicator";
import AppRoutes from "../AppRoutes";

// Not sure if I really need to have the suspense & fallback here
// since the app should be fairly fast, but
// I think it's a good habit to have as components are being loaded.

// Also using react-router-dom for routing.
// react-router-dom docs: https://reactrouter.com/en/main/start/overview

const App: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <RecoilRoot>
        <AppRoutes />
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
