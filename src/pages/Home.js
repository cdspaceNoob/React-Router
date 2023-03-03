import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>My Home Page.</h1>
      <p>
        Link tag to <Link to="products">the list of products page.</Link>
      </p>
      <p>
        A tag to <a href="products">the list of products page.</a>
      </p>
    </Fragment>
  );
};

export default HomePage;
