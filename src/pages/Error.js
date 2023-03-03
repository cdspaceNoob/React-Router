import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>Error Occured.</h1>
        <p>Cannot Find Page.</p>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
