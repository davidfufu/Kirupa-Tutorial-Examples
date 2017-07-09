import React from 'react'

class Letter extends React.Component {
	render(){
		var letterStyle = {
			padding: 10,
			margin: 10,
			// backgroundColor: "#ffde00",
			backgroundColor: this.props.bgcolor,
			color: "#333",
			display: "inline-block",
			"font-family": "monospace",
			fontSize: "32",
			textAlign: "center"
		};
		return (
			<div style={letterStyle}>
				{this.props.children}
			</div>
		);
	}
};
export default Letter;
