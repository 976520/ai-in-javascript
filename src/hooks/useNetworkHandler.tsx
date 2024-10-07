import { useState } from "react";

type SetLayerOutput = React.Dispatch<React.SetStateAction<number[]>>;

export const useNetworkHandler = (
  setLayer1Output: SetLayerOutput,
  setLayer2Output: SetLayerOutput,
  setLayer3Output: SetLayerOutput,
  setLayer4Output: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const handleOutput = (setLayerOutput: SetLayerOutput) => (index: number, output: number) => {
    setLayerOutput((prevOutput) => {
      const newOutput = [...prevOutput];
      newOutput[index] = output;
      return newOutput;
    });
  };

  const handleLayer1Output = handleOutput(setLayer1Output);
  const handleLayer2Output = handleOutput(setLayer2Output);
  const handleLayer3Output = handleOutput(setLayer3Output);

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
