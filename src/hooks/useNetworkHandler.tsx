import { useState } from "react";

type SetLayerOutput = React.Dispatch<React.SetStateAction<number[]>>;

export const useNetworkHandler = (
  setLayer1Output: SetLayerOutput,
  setLayer2Output: SetLayerOutput,
  setLayer3Output: SetLayerOutput,
  setLayer4Output: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const [layer1Output, setLayer1OutputState] = useState<number[]>([]);
  const [layer2Output, setLayer2OutputState] = useState<number[]>([]);
  const [layer3Output, setLayer3OutputState] = useState<number[]>([]);

  const handleOutput =
    (layerOutput: number[], setLayerOutputState: SetLayerOutput) => (index: number, output: number) => {
      const newOutput = [...layerOutput];
      newOutput[index] = output;
      setLayerOutputState(newOutput);
    };

  const handleLayer1Output = handleOutput(layer1Output, setLayer1OutputState);
  const handleLayer2Output = handleOutput(layer2Output, setLayer2OutputState);
  const handleLayer3Output = handleOutput(layer3Output, setLayer3OutputState);

  const handleLayer4Output = (output: number) => {
    setLayer4Output([output]);
  };

  return {
    handleLayer1Output,
    handleLayer2Output,
    handleLayer3Output,
    handleLayer4Output,
  };
};
