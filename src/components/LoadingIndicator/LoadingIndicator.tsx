import React from "react";
import { TailSpin } from "react-loader-spinner";

// Installed react-loader-spinner package, but had to use --force.
// Looks like the package may not be compatible with the latest version of React.
// https://www.npmjs.com/package/react-loader-spinner

const LoadingIndicator: React.FC = (): React.ReactElement => {
  return (
    <div className="loading-indicator">
      <TailSpin
        height="200"
        width="200"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default LoadingIndicator;
