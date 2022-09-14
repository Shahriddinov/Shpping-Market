import React from "react";
import useNetwork from "./useNetwork";
import WifiIcon from "./wifiIcon";
import "./style.scss";
// import { useTranslation, Trans } from "react-i18next";

const NetworkError = () => {
	const isOnline = useNetwork();
	// const { t } = useTranslation();

	return (
		<div className={`no-connection ${isOnline ? "" : "--visible"}`}>
			<div className="no-connection__overlay" />
			<div className="no-connection__content">
				<div className="no-connection__text">
					<div>No internet. Connection lost.</div>
				</div>
				<div className="no-connection__icon">
					<WifiIcon />
				</div>
			</div>
		</div>
	);
};

export default NetworkError;
