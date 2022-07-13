import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";
import "./ProductItem.scss";
import { Link } from "react-router-dom";
ProductItem.propTypes = {
  product: PropTypes.object,
};

function ProductItem(props) {
  const { product } = props;

  return (
    <Col lg="4">
      <div className="product-item">
        <Link to="">
          <img
            className="product-item__image"
            src={
              product.thumbnail
                ? `https://api.ezfrontend.com${product.thumbnail.url}`
                : "https://traffic-edge25.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220607/07062022050645_Web_Dai_dien_thumb.jpg"
            }
            alt=""
          />
        </Link>

        <div className="product-item__info">
          <p>{product.name}</p>
          <del>{product.originalPrice}vnd</del>
          <span className="product-item__info--price">
            {product.salePrice}vnd
          </span>
        </div>
      </div>
    </Col>
  );
}

export default ProductItem;
