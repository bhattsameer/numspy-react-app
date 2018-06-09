import React from 'react';

//import { Textbox } from 'react-inputs-validation';

//class Form extends React.Component {
//	numberInput(a) {
//    	const re = /[0-9]+/g;
//    	if (!re.test(a.key)) {
//      		a.preventDefault();
//    	}
//  	}
//	render(){
//		return (
//			<form onSubmit={this.props.getDetails}>
//				<input type="text" name="number" placeholder="Number..."  onKeyPress={(a) => this.numberInput(a)}/>
//				<button>Get Details</button>
//			</form>
//		);
//	}
//};

function numberInput(a) {
    const re = /[0-9]+/g;
    if (!re.test(a.key)) {
      	a.preventDefault();
   	}
}

const Form = props => (
		<form onSubmit={props.getDetails}>
			<input type="text" name="number" placeholder="Number..."  onKeyPress={(a) => numberInput(a)}/>
			<button>Get Details</button>
		</form>
);


export default Form;