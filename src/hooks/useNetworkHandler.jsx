import { useState } from "react";

export const useNetworkHandler = (setLayer1Output, setLayer2Output, setLayer3Output, setLayer4Output) => {
  const [layer1Output, setLayer1OutputState] = useState(setLayer1Output);
  const [layer2Output, setLayer2OutputState] = useState(setLayer2Output);
  const [layer3Output, setLayer3OutputState] = useState(setLayer3Output);

  const handleOutput = (layerOutput, setLayerOutputState) => (index, output) => {
    const newOutput = [...layerOutput];
    newOutput[index] = output;
    setLayerOutputState(newOutput);
  };

  const handleLayer1Output = handleOutput(layer1Output, setLayer1OutputState);
  const handleLayer2Output = handleOutput(layer2Output, setLayer2OutputState);
  const handleLayer3Output = handleOutput(layer3Output, setLayer3OutputState);

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
