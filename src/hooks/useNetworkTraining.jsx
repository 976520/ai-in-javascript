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

  const trainNetwork = () => {
    const targetOutput = 1;

    const layer1Output = weight1.map((weight) => {
      return sigmoid(input.reduce((sum, input, index) => sum + input * weight[index], 0));
    });

    const layer2Output = weight2.map((weight) => {
      return sigmoid(layer1Output.reduce((sum, output, index) => sum + output * weight[index], 0));
    });

    const layer3Output = weight3.map((weight) => {
      return sigmoid(layer2Output.reduce((sum, output, index) => sum + output * weight[index], 0));
    });

    const layer4Output = sigmoid(layer3Output.reduce((sum, output, index) => sum + output * weight4[0][index], 0));

    const layer1Error = layer1Output.map((output) => targetOutput - output);
    const layer2Error = layer2Output.map((output) => targetOutput - output);
    const layer3Error = layer3Output.map((output) => targetOutput - output);
    const layer4Error = targetOutput - layer4Output;

    const newWeight1 = weight1.map((weight, index) => {
      return weight.map((weight, weightIndex) => {
        return (
          weight +
          learningRate *
            layer1Error[index] *
            layer1Output[index] *
            (1 - layer1Output[index]) *
            (index === 0 ? input[weightIndex] : layer1Output[index - 1])
        );
      });
    });

    const newWeight2 = weight2.map((weight, index) => {
      return weight.map((weight, weightIndex) => {
        return (
          weight +
          learningRate * layer2Error[index] * layer2Output[index] * (1 - layer2Output[index]) * layer1Output[index]
        );
      });
    });

    const newWeight3 = weight3.map((weight, index) => {
      return weight.map((weight, weightIndex) => {
        return (
          weight +
          learningRate * layer3Error[index] * layer3Output[index] * (1 - layer3Output[index]) * layer2Output[index]
        );
      });
    });

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
