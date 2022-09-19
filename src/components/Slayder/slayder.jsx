import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./slayder.scss"
import {Link} from "react-router-dom";
import Stack from "@mui/material/Stack";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";


const steps = ['Личные данные', 'Сведение о работе', 'Сведение об образование', 'Периодичности повышения квалификации'];

const Slayder = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    return (
      <div className="slayder">
        <div className="container">
          <div className="col-md-10 offset-1 mt-3">
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = (
                      <Typography variant="caption"></Typography>
                    );
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} className="slider" {...stepProps}>
                      <div className="text-center">
                        <StepLabel  {...labelProps}>{label}</StepLabel>
                      </div>
                    </Step>
                  );
                })}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  {/*<Typography sx={{ mt: 2, mb: 1 }}>*/}
                  {/*    All steps completed - you&apos;re finished*/}
                  {/*</Typography>*/}
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button onClick={handleReset}>Сброс настроек</Button>
                  </Box>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/*<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>*/}
                  <Box >
                      {/*<div className="NextPrev">*/}
                      {/*    <Stack spacing={2} direction="row">*/}
                      {/*        <Button disabled={activeStep === 0}*/}
                      {/*                onClick={handleBack}*/}
                      {/*                sx={{ mr: 1 }} className="button" href="./" variant="contained"> <span className="icones"><CancelOutlinedIcon fontSize="small"/></span> Назад</Button>*/}
                      {/*    </Stack>*/}
                      {/*    <Stack spacing={2} direction="row">*/}
                      {/*        <Button onClick={handleNext} className="button" href="/education" style={{backgroundColor: "#0FBE7B"}} variant="contained"> <span className="icones"><CheckCircleOutlineOutlinedIcon fontSize="small"/></span> Продолжить</Button>*/}
                      {/*    </Stack>*/}
                      {/*</div>*/}
                  </Box>
                </React.Fragment>
              )}
            </Box>
          </div>
        </div>
      </div>
    );
};

export default Slayder;