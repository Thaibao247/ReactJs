import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../features/Todo/ThemeContext";

function Cart(props) {
  const context = useContext(ThemeContext);
  console.log(context.listCart);
  return (
    <div>
      <ul>
        {context.listCart.length > 0
          ? context.listCart.map((item, index) => (
              <li>
                {item.name}{" "}
                <button onClick={() => context.handleClickDeleteCart(index)}>
                  delete
                </button>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Cart;
