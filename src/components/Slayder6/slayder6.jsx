import React from "react";
import Stepper from "react-stepper-horizontal";
import "./slayder6.scss";

const styles = {
    textAlign: "center"
};

var num = 0;

const Slayder6 = (active) => (
    <div style={styles}>
        <div>
            <Stepper
                steps={[
                    { title: "" },
                    { title: "" },
                    { title: "" },
                    { title: "" },
                    { title: "" },
                    { title: "" }
                ]}
                activeStep={active.val}
                activeColor="#2B63C0"
                completeColor="#2B63C0"
                activeTitleColor="#2B63C0"
                completeTitleColor="#2B63C0"
                circleFontColor="#FFF"
                defaultBorderColor="#046DAF"
                defaultBorderStyle="#046DAF"
                completeBarColor="#2B63C0"
            />
        </div>
    </div>
);

export default Slayder6;