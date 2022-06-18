/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function FineTuneTalks() {
	const typeformStyle = {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
		border: 0,
		width: "100%",
		height: "100vh",
	};
	return (
		<>
			<div id="typeform" style={typeformStyle}>
				<iframe
					id="typeform-full"
					width="100%"
					height="100%"
					frameborder="0"
					allow="camera; microphone; autoplay; encrypted-media;"
					src="https://form.typeform.com/to/Efpb73hc?typeform-medium=embed-snippet"
				></iframe>{" "}
				<script
					type="text/javascript"
					src="https://embed.typeform.com/embed.js"
				></script>{" "}
			</div>{" "}
		</>
	);
}

export default FineTuneTalks;
