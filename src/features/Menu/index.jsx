import React, { useState } from "react";
import CategoryList from "./components/categoryList";
import MenuList from "./components/menuList";
import "./styles.scss";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function Menu(props) {
  const [categories] = useState(allCategories);
  const [menuList, setMenuList] = useState(items);

  const filterCate = (category) => {
    if (category === "all") {
      setMenuList(items);
      return;
    }
    const newMenuList = items.filter((item) => item.category === category);
    setMenuList(newMenuList);
  };

  return (
    <div className="menu">
      <div className="title">
        <h2>Menu</h2>
        <div className="underline"></div>
      </div>
      <CategoryList categories={categories} filterCate={filterCate} />
      <MenuList menuList={menuList} />
    </div>
  );
}

export default Menu;
