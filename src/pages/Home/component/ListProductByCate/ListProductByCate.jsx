import React from "react";
import PropTypes from "prop-types";
import { Row } from "reactstrap";
import ProductItem from "../ProductItem/ProductItem";
function ListProductByCate(props) {
  const { listProduct } = props;

  return (
    <div className="list-product">
      <Row>
        {listProduct
          ? listProduct.map((item) => <ProductItem product={item} />)
          : ""}
      </Row>
    </div>
  );
}

ListProductByCate.propTypes = {
  listProduct: PropTypes.array,
};
ListProductByCate.defaultProps = {
  listProduct: [],
};

export default ListProductByCate;
