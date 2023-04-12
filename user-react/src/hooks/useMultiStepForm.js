import {useState} from "react";

function useMultiStepForm(steps) {
  const [currenStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    })
  }

  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i;
      return i - 1;
    })
  }

  function goTo(index) {
    setCurrentStepIndex(index)
  }

  return {
    currenStepIndex,
    step: steps[currenStepIndex],
    isFirstStep: currenStepIndex === 0,
    isLastStep: currenStepIndex === steps.length - 1,
    steps,
    goTo,
    next,
    back
  }
}

export default useMultiStepForm;
