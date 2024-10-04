export const useNetworkTraining = (
  input,
  weight1,
  weight2,
  weight3,
  weight4,
  setWeight1,
  setWeight2,
  setWeight3,
  setWeight4
) => {
  const sigmoid = (x) => 1 / (1 + Math.exp(-x));
  const learningRate = 0.1;

  const calculateLayerOutput = (inputs, weights) => {
    return weights.map((weight) => {
      return sigmoid(inputs.reduce((sum, input, index) => sum + input * weight[index], 0));
    });
  };

  const calculateError = (outputs, targetOutput) => {
    return outputs.map((output) => targetOutput - output);
  };

  const updateWeights = (weights, errors, outputs, inputs) => {
    return weights.map((weight, index) => {
      return weight.map((weight, weightIndex) => {
        return weight + learningRate * errors[index] * outputs[index] * (1 - outputs[index]) * inputs[weightIndex];
      });
    });
  };

  const trainNetwork = () => {
    const targetOutput = 1;

    const layer1Output = calculateLayerOutput(input, weight1);
    const layer2Output = calculateLayerOutput(layer1Output, weight2);
    const layer3Output = calculateLayerOutput(layer2Output, weight3);
    const layer4Output = sigmoid(layer3Output.reduce((sum, output, index) => sum + output * weight4[0][index], 0));

    const layer1Error = calculateError(layer1Output, targetOutput);
    const layer2Error = calculateError(layer2Output, targetOutput);
    const layer3Error = calculateError(layer3Output, targetOutput);
    const layer4Error = targetOutput - layer4Output;

    const newWeight1 = updateWeights(weight1, layer1Error, layer1Output, input);
    const newWeight2 = updateWeights(weight2, layer2Error, layer2Output, layer1Output);
    const newWeight3 = updateWeights(weight3, layer3Error, layer3Output, layer2Output);
    const newWeight4 = weight4.map((weight) => {
      return weight.map((weight, index) => {
        return weight + learningRate * layer4Error * layer3Output[index] * (1 - layer3Output[index]);
      });
    });

    setWeight1(newWeight1);
    setWeight2(newWeight2);
    setWeight3(newWeight3);
    setWeight4(newWeight4);
  };

  return trainNetwork;
};
