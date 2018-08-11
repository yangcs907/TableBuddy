import React from 'react';

const MenuItem = (props) =>(
	<li className="list-group-item px-4">
	<div className="d-flex justify-content-between ">
	<p className="lead">{props.name}</p>
	<p className="lead">{props.category} | {props.price}</p>
	</div>
	<div className="d-flex">
	{props.desc} 
	</div>
	<button className="btn btn-outline-danger float-right" onClick={() => props.delete(props._id)}>
	Delete Menu Item
	</button>
	</li>
);

export default MenuItem;