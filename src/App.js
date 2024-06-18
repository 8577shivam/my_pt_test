import React, { useState } from "react";
import StepperControl from "./Components/StepperControl";
import Stepper from "./Components/Stepper";
import Navbar from "./Components/Navbar";
import SkillsSection from "./Components/SkillsSection";
import AvailabilitySection from "./Components/AvailbilitySection";
import ProfileStableSection from "./Components/ProfileStableSection";

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [started, setStarted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStart = () => {
    setStarted(true);
    setCurrentStep(1); 
  };

  return (
    <div className="max-w-screen-3xl mx-auto dark:bg-slate-800 h-[100vh]">
      <Navbar />
      <Stepper steps={steps} currentStep={currentStep} />
      {!started ? (
        <div className="grid grid-cols-2">
          <div className="bg-red-500 grid gap-4 justify-center">
            <p>Start Building</p>
            <div className="flex gap-10">
              <button>Cancel</button>
              <button onClick={handleStart}>Start</button>
            </div>
          </div>
          <div className="bg-red-50">
            <p>Building Your Profile</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2">
          <div>
            {currentStep === 1 && <SkillsSection />}
            {currentStep === 2 && <AvailabilitySection />}
          </div>
          <ProfileStableSection />
        </div>
      )}
      {started && (
        <StepperControl
          currentStep={currentStep}
          steps={steps}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
