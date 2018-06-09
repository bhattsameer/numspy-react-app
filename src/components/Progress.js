import React from "react";
const Progress = props => (
	<div className="Progress">
	{
		props.progress && <progress style={props.form_transition}></progress>
	}
	</div>
);

export default Progress;
