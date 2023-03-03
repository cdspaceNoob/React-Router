import { Fragment } from "react";
import { Link } from "react-router-dom";

const DUMMY_PRODUCT = [
  { id: "p1", title: "Product 01" },
  { id: "p2", title: "Product 02" },
  { id: "p3", title: "Product 03" },
];

const Products = () => {
  return (
    <Fragment>
      <h1>This is Products Page.</h1>
      <ul>
        {DUMMY_PRODUCT.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Products;
