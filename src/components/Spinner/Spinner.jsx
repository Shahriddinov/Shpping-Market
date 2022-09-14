import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./style.scss";

const Spinner = ({ className, position, md }) => {
	const classNames = cx(
		"spinner-wrap",
		position ? position : "",
		md ? "md" : "",
		className
	);
	return (
		<div className={classNames}>
			<div className="spinner" />
		</div>
	);
};

Spinner.propTypes = {
	className: PropTypes.string,
	position: PropTypes.oneOf(["center", "start", "end", "full", "absolute"])
};
Spinner.defaultProps = {
	className: "",
	position: "center"
};

export default Spinner;
