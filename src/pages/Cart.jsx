import React, { Component } from "react";
import {} from "react-bootstrap";
import { connect } from "react-redux";
import CartItemRow from "../components/Cart/CartItemRow";
class Cart extends Component {
  render() {
    return (
      <>
        {Object.keys(this.props.userCart.cartItemData).map((key) => {
          return (
            <CartItemRow
              itemId={key}
              Title={this.props.userCart.cartItemData[key].Title}
              href={this.props.userCart.cartItemData[key].href}
              price={this.props.userCart.cartItemData[key].itemPrice}
              quantity={this.props.userCart.itemMap[key]}
              addToCart={this.props.addToCart}
              removeFromCart={this.props.removeFromCart}
              itemMap={this.props.userCart.itemMap}
            />
          );
        })}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userCart: state.userCart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch({ type: "ADD_TO_CART", payLoad: item });
    },
    removeFromCart: (item) => {
      console.log(item);
      dispatch({ type: "REMOVE_FROM_CART", payLoad: item });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
