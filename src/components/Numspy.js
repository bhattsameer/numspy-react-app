import React from 'react';
const Numspy = props => (
	<div className = "numspy__info">
		{ 
			props.name && <p className="numspy__key"> Name: 
			<span className="numspy__value"> {props.name} </span> 
			</p> 
		}
		{ 
			props.number && <p className="numspy__key"> Number: 
			<span className="numspy__value"> {props.number} </span> 
			</p> 
		}
		{ 
			props.state && <p className="numspy__key"> State: 
			<span className="numspy__value"> {props.state} </span> 
			</p> 
		}
		{ 
			props.provider && <p className="numspy__key"> Provider: 
			<span className="numspy__value"> {props.provider} </span> 
			</p> 
		}
		{ props.error && <p className="numspy__error"> { props.error } </p>}
	</div>

);

export default Numspy;
