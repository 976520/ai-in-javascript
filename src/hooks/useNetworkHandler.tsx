import { useState } from "react";

type SetLayerOutput = React.Dispatch<React.SetStateAction<number[]>>;

export const useNetworkHandler = (...setLayerOutputs: SetLayerOutput[]) => {
  const handleOutput = (setLayerOutput: SetLayerOutput) => (index: number, output: number) => {
    setLayerOutput((prevOutput) => {
      const newOutput = [...prevOutput];
      newOutput[index] = output;
      return newOutput;
    });
  };

  const handlers = setLayerOutputs.map((setLayerOutput, index) => {
    if (index === setLayerOutputs.length - 1) {
      return (output: number) => {
        setLayerOutput([output]);
      };
    }
    return handleOutput(setLayerOutput);
  });

  return {
    handleLayer1Output: handlers[0],
    handleLayer2Output: handlers[1],
    handleLayer3Output: handlers[2],
    handleLayer4Output: handlers[3],
  };
};
