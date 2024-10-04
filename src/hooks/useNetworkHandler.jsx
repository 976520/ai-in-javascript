import { useState } from "react";

export const useNetworkHandler = (setLayer1Output, setLayer2Output, setLayer3Output, setLayer4Output) => {
  const [layer1Output, setLayer1OutputState] = useState(setLayer1Output);
  const [layer2Output, setLayer2OutputState] = useState(setLayer2Output);
  const [layer3Output, setLayer3OutputState] = useState(setLayer3Output);

  const handleLayer1Output = (index, output) => {
    const newOutput = [...layer1Output];
    newOutput[index] = output;
    setLayer1OutputState(newOutput);
  };

  const handleLayer2Output = (index, output) => {
    const newOutput = [...layer2Output];
    newOutput[index] = output;
    setLayer2OutputState(newOutput);
  };

  const handleLayer3Output = (index, output) => {
    const newOutput = [...layer3Output];
    newOutput[index] = output;
    setLayer3OutputState(newOutput);
  };

  const handleLayer4Output = (output) => {
    setLayer4Output([output]);
  };

  return {
    handleLayer1Output,
    handleLayer2Output,
    handleLayer3Output,
    handleLayer4Output,
  };
};
