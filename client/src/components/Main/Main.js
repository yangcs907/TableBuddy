import React, { Component } from "react";
import API from "../../utils/API";

import Foodcontainer from "./foodcontainer";
import Order from "./order";
import Chooser from "./chooser";
import SuccessModal from "./successmodal";
import "./Main.css";

class Main extends Component {
  state = {
    menuOptions: [],
    orderItems: [],
    currentSelection: {},
    currentlyOrdering: true
  };

  // ==============================================================
  // Component loads menu and sets a placholder in current items
  componentDidMount() {
    // get all menu items
    API.getMenu()
      .then(data => this.setState({ menuOptions: data.data }))
      .then(() => {
        if(this.state.menuOptions[0]){
          return this.setCurrent( this.state.menuOptions[0]._id );
        } else {
          return this.setDefaultCurrent();
        }
      })
  }

  // ==============================================================
  // Handle showing current item showing

  // set currentSelection to placeholder values
  setDefaultCurrent = () => {
    let placeholder = {
      _id: +new Date(),
      category: "",
      name: "Select an item from above...",
      image: "Order-Up-w-text.png",
      price: 0,
      desc: ""
    }
    this.setState({ currentSelection: placeholder });
  }

  // set currentSelection to a menu item
  setCurrent = (index) => {
    let currentSelection = this.state.menuOptions.filter(option => option._id === index)[0];
    this.setState({ currentSelection });
  }

  // ==============================================================
  // Handle adding and removing an item from the order

  // add item to order
  addCurrentToOrder = () => {
    let addedItem = { ...this.state.currentSelection, _id: +new Date() };
    let newOrderItems = [...this.state.orderItems, addedItem];

    // do we want to remove current selection when added to order?
    // this.setDefaultCurrent();

    this.setState({ orderItems: newOrderItems });
  }

  // remove item from order
  removeFromOrder = index => {
    let newOrderItems = this.state.orderItems.filter(item => item._id !== index);

    this.setState({ orderItems: newOrderItems });
  }


  // ==============================================================
  // Handle submitting an order and reseting to hide nice

  // submit order
  submitOrder = () => {
    if(this.state.orderItems.length < 1){
      return ;
    }

    const items = this.state.orderItems.map( item => {
      return {name: item.name, price: item.price, image: item.image}
    });
    console.log(items);

    API.saveOrder({items, forWho: 10})
    .then(data => {
      console.log('save data', data);
      this.setDefaultCurrent();
      this.setState({
        currentlyOrdering: false,
        orderItems: []
      });
    });
  }

  // set currently ordering to true
  startNewOrder = () => {
    this.setState({currentlyOrdering: true});
  }

  // ==============================================================
  // Render function
  render() {
    const total = Math.round(this.state.orderItems.reduce((t, i) => t + i.price, 0) * 100) / 100;
    return (
      <React.Fragment>
      <img src="Order-Up-w-text.png" alt="Order Up logo" />
      <div className="menuSelection mb-4">
      <Chooser menuOptions={this.state.menuOptions} setCurrent={this.setCurrent} />
      </div>
      <div className="orderArea w-100 d-flex justify-content-between">

      {this.state.currentSelection ?
      <Foodcontainer {...this.state.currentSelection} addToOrder={this.addCurrentToOrder} /> :
      null }

      <Order orderItems={this.state.orderItems} removeOrder={this.removeFromOrder} />
      </div>
      <div className="totalArea d-flex justify-content-between">
      <div className="total">
        Total: {total}
      </div>
      <div className="mt-4">
        <button className="btn btn-primarySubmit" onClick={this.submitOrder}>Submit Order</button>
      </div>
      </div>
      {
        this.state.currentlyOrdering ?
        null :
        <SuccessModal hideModal={this.startNewOrder} />
      }
      </React.Fragment>
    );
  }
}

export default Main;
