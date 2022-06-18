/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

function SkillX() {
	const typeformStyle = {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		top: 0,
		border: 0,
		width: "100vw",
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
					src="https://mrbing.notion.site/Skill-X-Abaqus-FEA-90d534308fa14fca96b7ec0b8e6fa269"
				></iframe>{" "}
			</div>
		</>
	);
}

export default SkillX;
