import React from "react";
import Stepper from "react-stepper-horizontal";
import "./slayder.scss";

const styles = {
    textAlign: "center"
};

var num = 0;

const Slayder = (active) => (
    <div style={styles}>
        <div>
            <Stepper
                steps={[
                    {
                        title: "Личные данные"
                        // ,onClick: function() {
                        //     alert("sfsdjkfhksfdhhksdf");
                        // }
                    },
                    { title: "Сведение об образование" },
                    { title: "Сведение о работе" },
                    { title: "Периодичности повышения \n квалификации" }
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

export default Slayder;