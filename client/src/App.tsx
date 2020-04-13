import React, { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Spinner } from "./components/Spinner";
import { MovieListPage } from "./pages/MovieListPage";
import { MoviePage } from "./pages/MoviePage";
import { RelayEnvironment } from "./relay/environment";

const App: React.FC = () => {
  return (
    <div className="app">
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <ErrorBoundary fallback={<h1>Oops! Check the console.</h1>}>
          <Suspense fallback={<Spinner isBig={true} />}>
            <BrowserRouter>
              <Switch>
                <Route exact path="/movies" component={MovieListPage} />
                <Route path="/movies/:movieId*" component={MoviePage} />
                <Route>
                  <Redirect to="/movies" />
                </Route>
              </Switch>
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      </RelayEnvironmentProvider>
    </div>
  );
};

export default App;
