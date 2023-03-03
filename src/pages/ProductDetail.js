import { Fragment } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Product Details</h1>
      <h2>This Product ID: {params.productID}</h2>
    </Fragment>
  );
};

export default ProductDetailPage;
