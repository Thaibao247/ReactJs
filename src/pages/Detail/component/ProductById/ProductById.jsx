import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

function ProductById(props) {
  const { product } = props;
  return (
    <Container>
      <div className="product">
        <Row>
          <Col lg="5" className="justify-content-center align-item-center">
            <div className="product__image">
              <img
                src={
                  product.thumbnail
                    ? `https://api.ezfrontend.com${product.thumbnail.url}`
                    : "https://traffic-edge25.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220607/07062022050645_Web_Dai_dien_thumb.jpg"
                }
                alt=""
              />
            </div>
          </Col>
          <Col lg="7">
            <div className="product__info">
              <h2>{product.name}</h2>
              <del>{product.originalPrice}vnd</del>
              <span className="">{product.salePrice}vnd</span>
              <p>Số lượng: </p>
              <button>Thêm vào giỏ</button>
              <button>Mua ngay</button>
            </div>
          </Col>
        </Row>
      </div>
      <div className="product-des">
        <p>{product.shortDescription}</p>
      </div>
    </Container>
  );
}
ProductById.propTypes = {
  product: PropTypes.object,
};

ProductById.defaultProps = {
  product: {},
};
export default ProductById;
