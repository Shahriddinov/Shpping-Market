import React from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import "./CustomStepper.scss";

function CustomStepper({activeStep = "2"}) {
  return (
    <div className="Stepper">
      <Stepper activeStep={activeStep}>
        <Step className="Step">
          <StepLabel className="Step-Label">Личные данные</StepLabel>
        </Step>
        <Step className="Step">
          <StepLabel className="Step-Label">Сведение о работе</StepLabel>
        </Step>
        <Step className="Step">
          <StepLabel className="Step-Label">Сведение об образование</StepLabel>
        </Step>
        <Step className="Step">
          <StepLabel className="Step-Label">
            Периодичности повышения квалификации
          </StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}

export default CustomStepper;