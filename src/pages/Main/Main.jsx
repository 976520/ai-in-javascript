import { InputSection } from "../../components/InputSection/InputSection";
import { NetworkSection } from "../../components/NetworkSection.jsx/NetworkSection";

import React, { useState } from "react";

const Main = () => {
  const [layer1Outputs, setLayer1Outputs] = useState([0, 0, 0, 0]);
  const [layer2Outputs, setLayer2Outputs] = useState([0, 0, 0, 0]);
  const [layer3Outputs, setLayer3Outputs] = useState([0, 0, 0, 0]);
  const [layer4Outputs, setLayer4Outputs] = useState([0]);

  const [weights1, setWeights1] = useState([
    [0.5, 0.8, 0.3],
    [0.4, 0.7, 0.6],
    [0.6, 0.9, 0.1],
    [0.2, 0.3, 0.4],
  ]);

  const [weights2, setWeights2] = useState([
    [0.6, 0.9, 0.1, 0.2],
    [0.5, 0.4, 0.3, 0.2],
    [0.1, 0.2, 0.3, 0.4],
    [0.3, 0.5, 0.7, 0.9],
  ]);

  const [weights3, setWeights3] = useState([
    [0.2, 0.4, 0.6, 0.8],
    [0.3, 0.5, 0.7, 0.9],
    [0.1, 0.2, 0.3, 0.4],
    [0.4, 0.6, 0.8, 0.1],
  ]);

  const [weights4, setWeights4] = useState([[0.1, 0.2, 0.3, 0.4]]);

  const [inputs, setInputs] = useState([0, 0, 0]);

  const learningRate = 0.1;

  const handleLayer1Output = (index, output) => {
    const newOutputs = [...layer1Outputs];
    newOutputs[index] = output;
    setLayer1Outputs(newOutputs);
  };

  const handleLayer2Output = (index, output) => {
    const newOutputs = [...layer2Outputs];
    newOutputs[index] = output;
    setLayer2Outputs(newOutputs);
  };

  const handleLayer3Output = (index, output) => {
    const newOutputs = [...layer3Outputs];
    newOutputs[index] = output;
    setLayer3Outputs(newOutputs);
  };

  const handleLayer4Output = (output) => {
    setLayer4Outputs([output]);
  };

  const trainNetwork = () => {
    const targetOutput = 1;
    const layer1Errors = layer1Outputs.map((output) => targetOutput - output);
    const layer2Errors = layer2Outputs.map((output) => targetOutput - output);
    const layer3Errors = layer3Outputs.map((output) => targetOutput - output);
    const layer4Error = targetOutput - layer4Outputs[0];

    const newWeights1 = weights1.map((weights, index) => {
      return weights.map((weight, weightIndex) => {
        return (
          weight +
          learningRate *
            layer1Errors[index] *
            layer1Outputs[index] *
            (1 - layer1Outputs[index]) *
            (index === 0 ? inputs[weightIndex] : layer1Outputs[index - 1])
        );
      });
    });

    const newWeights2 = weights2.map((weights, index) => {
      return weights.map((weight, weightIndex) => {
        return (
          weight +
          learningRate * layer2Errors[index] * layer2Outputs[index] * (1 - layer2Outputs[index]) * layer1Outputs[index]
        );
      });
    });

    const newWeights3 = weights3.map((weights, index) => {
      return weights.map((weight, weightIndex) => {
        return (
          weight +
          learningRate * layer3Errors[index] * layer3Outputs[index] * (1 - layer3Outputs[index]) * layer2Outputs[index]
        );
      });
    });

    const newWeights4 = weights4.map((weights) => {
      return weights.map((weight, index) => {
        return weight + learningRate * layer4Error * layer3Outputs[index] * (1 - layer3Outputs[index]);
      });
    });

    setWeights1(newWeights1);
    setWeights2(newWeights2);
    setWeights3(newWeights3);
    setWeights4(newWeights4);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = parseFloat(value);
    setInputs(newInputs);
  };

  return (
    <div>
      <InputSection inputs={inputs} handleInputChange={handleInputChange} />
      <button onClick={trainNetwork}>학습</button>
      <NetworkSection
        inputs={inputs}
        layer1Outputs={layer1Outputs}
        layer2Outputs={layer2Outputs}
        layer3Outputs={layer3Outputs}
        weights1={weights1}
        handleLayer1Output={handleLayer1Output}
        weights2={weights2}
        handleLayer2Output={handleLayer2Output}
        weights3={weights3}
        handleLayer3Output={handleLayer3Output}
        weights4={weights4}
        handleLayer4Output={handleLayer4Output}
      />
      <h2>{layer4Outputs[0].toFixed(4)}</h2>
    </div>
  );
};

export default Main;
