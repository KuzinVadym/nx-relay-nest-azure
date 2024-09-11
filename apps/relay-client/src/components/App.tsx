import * as React from "react";
import RelayEnvironment from "../relay/RelayEnvironment";
import LoadingSpinner from './LoadingSpinner';
import Recipes from './Recipes';

export default function App(): React.ReactElement {
  return (
    <RelayEnvironment>
      <React.Suspense fallback={<LoadingSpinner />}>
        <div className="app">
          <Recipes />
        </div>
      </React.Suspense>
    </RelayEnvironment>
  );
}
