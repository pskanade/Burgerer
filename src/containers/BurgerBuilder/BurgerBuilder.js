import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 2,
      bacon: 1,
      salad: 1,
      meat: 2
    }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
