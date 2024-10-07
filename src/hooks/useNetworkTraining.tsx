import { useCallback, useMemo } from "react";
import { sigmoid } from "../constants/ActivationFunction";

export const useNetworkTraining = (
  input: number[],
  weight1: number[][],
  weight2: number[][],
  weight3: number[][],
  weight4: number[][],
  setWeight1: React.Dispatch<React.SetStateAction<number[][]>>,
  setWeight2: React.Dispatch<React.SetStateAction<number[][]>>,
  setWeight3: React.Dispatch<React.SetStateAction<number[][]>>,
  setWeight4: React.Dispatch<React.SetStateAction<number[][]>>
) => {
  const learningRate = useMemo(() => 0.1, []);

  const calculateLayerOutput = useCallback(
    (inputs: number[], weights: number[][]): number[] => {
      return weights.map((weight) => {
        return sigmoid(inputs.reduce((sum, input, index) => sum + input * weight[index], 0));
      });
    },
    [sigmoid]
  );

  const calculateError = useCallback((outputs: number[], targetOutput: number): number[] => {
    return outputs.map((output) => targetOutput - output);
  }, []);

  const updateWeights = useCallback(
    (weights: number[][], errors: number[], outputs: number[], inputs: number[]): number[][] => {
      return weights.map((weight, index) => {
        return weight.map((w, weightIndex) => {
          return w + learningRate * errors[index] * outputs[index] * (1 - outputs[index]) * inputs[weightIndex];
        });
      });
    },
    [learningRate]
  );

  const trainNetwork = useCallback(() => {
    const targetOutput = 1;

    const layerOutputs = [
      calculateLayerOutput(input, weight1),
      calculateLayerOutput(calculateLayerOutput(input, weight1), weight2),
      calculateLayerOutput(calculateLayerOutput(calculateLayerOutput(input, weight1), weight2), weight3),
    ];

    const layer4Output = sigmoid(layerOutputs[2].reduce((sum, output, index) => sum + output * weight4[0][index], 0));

    const layerErrors = [
      calculateError(layerOutputs[0], targetOutput),
      calculateError(layerOutputs[1], targetOutput),
      calculateError(layerOutputs[2], targetOutput),
    ];

    const layer4Error = targetOutput - layer4Output;

    const newWeights = [
      updateWeights(weight1, layerErrors[0], layerOutputs[0], input),
      updateWeights(weight2, layerErrors[1], layerOutputs[1], layerOutputs[0]),
      updateWeights(weight3, layerErrors[2], layerOutputs[2], layerOutputs[1]),
      weight4.map((weight) => {
        return weight.map((w, index) => {
          return w + learningRate * layer4Error * layerOutputs[2][index] * (1 - layerOutputs[2][index]);
        });
      }),
    ];

    setWeight1(newWeights[0]);
    setWeight2(newWeights[1]);
    setWeight3(newWeights[2]);
    setWeight4(newWeights[3]);
  }, [
    input,
    weight1,
    weight2,
    weight3,
    weight4,
    setWeight1,
    setWeight2,
    setWeight3,
    setWeight4,
    calculateLayerOutput,
    calculateError,
    updateWeights,
    sigmoid,
  ]);

  return trainNetwork;
};
