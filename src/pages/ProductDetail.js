import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product Details</h1>
      <h2>This Product ID: {params.productID}</h2>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </Fragment>
  );
};

export default ProductDetailPage;
