import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./slayder.scss"
import {Link} from "react-router-dom";


const steps = ['', '', '', ''];

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
                    <Box sx={{width: '100%'}}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                if (isStepOptional(index)) {
                                    labelProps.optional = (
                                        <Typography  variant="caption"></Typography>
                                    );
                                }
                                if (isStepSkipped(index)) {
                                    stepProps.completed = false;
                                }
                                return (
                                    <Step key={label} {...stepProps}>

                                        <div className="text-center">
                                            {/*<span>{index+1}</span>*/}
                                            {/*<StepLabel className=""></StepLabel>*/}
                                            <StepLabel {...labelProps}>{label}</StepLabel>
                                            <span className="mt-2">muord</span>

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
                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    <Button onClick={handleReset}>Сброс настроек</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {/*<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>*/}
                                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{mr: 1}}
                                    >
                                        Назад
                                    </Button>
                                    <Box sx={{flex: '1 1 auto'}}/>
                                    {/*{isStepOptional(activeStep) && (*/}
                                    {/*    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>*/}
                                    {/*        Skip*/}
                                    {/*    </Button>*/}
                                    {/*)}*/}

                                    <Button onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Заканчивать' : 'Следующий'}
                                    </Button>
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