import React from "react";
import PropTypes from "prop-types";
import "./Category.scss";
function LeftCategory(props) {
  const { listCate, onClickGetCateId } = props;

  const handleClickProduct = (id) => {
    if (!onClickGetCateId) return;
    onClickGetCateId(id);
  };

  return (
    <div className="category">
      <div className="category__title">
        <h2>Category</h2>
      </div>
      <ul className="category__menu">
        {listCate.length > 0
          ? listCate.map((item) => (
              <li onClick={() => handleClickProduct(item.id)} key={item.id}>
                {item.name}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

LeftCategory.propTypes = {
  listCate: PropTypes.array,
  onClickGetCateId: PropTypes.func,
};

LeftCategory.defaultProps = {
  listCate: [],
  onClickGetCateId: null,
};

export default LeftCategory;
