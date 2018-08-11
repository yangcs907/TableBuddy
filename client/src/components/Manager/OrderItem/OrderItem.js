import React, { Component } from "react";


class OrderItem extends Component {

	render(){
		const createKey = () => Math.floor(Math.random() * 100000) ;
		return (
			<li className="list-group-item px-4">
			<div className="d-flex justify-content-between ">
			<p className="lead">Order: {this.props._id}</p>
			<p className="lead">
			{this.props.complete ?
				<button className="btn btn-outline-danger float-right" onClick={() => this.props.changeComplete(this.props._id, false)}>
				Re-Open Order
				</button> :
				<button className="btn btn-outline-danger float-right" onClick={() => this.props.changeComplete(this.props._id, true)}>
				Mark Complete
				</button>
			}</p>
			</div>
			<div className="d-flex">
			<ul>
			{this.props.items.map(item => <li key={createKey()}>{item.name} | ${item.price}</li>)}
			</ul>
			</div>
			</li>
			)
	};
}
export default OrderItem;
