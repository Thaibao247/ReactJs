import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import categoryApi from "../../api/categoryApi";
import LeftCategory from "./component/LeftCategory/LeftCategory";
import ListProductByCate from "./component/ListProductByCate/ListProductByCate";
import "./home.scss";
function Home(props) {
  const [listCate, setListCate] = useState([]);
  const [listProduct, setListProduct] = useState([]);
  const [categoryId, setCategoryId] = useState(1);

  const fetchApiCate = async () => {
    try {
      const res = await categoryApi.getAll({});
      if (res) {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
        setListCate(res);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchApiProduct = async (categoryId) => {
    try {
      const res = await categoryApi.get(categoryId);
      if (res && res.products) {
        console.log(res);
        setListProduct(res.products);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiCate();
    fetchApiProduct(categoryId);
  }, [categoryId]);

  const handleClickGetCateId = (id) => {
    setCategoryId(id);
  };
  console.log(listProduct);
  console.log("categoryId: ", categoryId);
  return (
    <div className="shopping">
      <Container fluid>
        <Row>
          <Col lg="2" className="justify-content-center align-item-center">
            <LeftCategory
              onClickGetCateId={handleClickGetCateId}
              listCate={listCate}
            />
          </Col>
          <Col lg="10">
            <ListProductByCate listProduct={listProduct} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
