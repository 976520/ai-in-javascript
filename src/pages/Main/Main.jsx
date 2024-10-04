import { InputSection } from "../../components/InputSection/InputSection";
import { NetworkSection } from "../../components/NetworkSection.jsx/NetworkSection";

import React, { useState } from "react";

const Main = () => {
  const [layer1Outputs, setLayer1Outputs] = useState([0, 0, 0]);

  const [layer2Outputs, setLayer2Outputs] = useState([0]);

  const [weights1, setWeights1] = useState([
    [0.5, 0.8, 0.3],
    [0.4, 0.7, 0.6],
    [0.6, 0.9, 0.1],
  ]);

  const [weights2, setWeights2] = useState([[0.6, 0.9]]);

  const [inputs, setInputs] = useState([0, 0, 0]);

  const learningRate = 0.1;

  const handleLayer1Output = (index, output) => {
    const newOutputs = [...layer1Outputs];
    newOutputs[index] = output;
    setLayer1Outputs(newOutputs);
  };

  const handleLayer2Output = (output) => {
    setLayer2Outputs([output]);
  };

  const trainNetwork = () => {
    const targetOutput = 1;
    const layer1Errors = layer1Outputs.map((output) => targetOutput - output);

    const layer2Error = targetOutput - layer2Outputs[0];

    const newWeights1 = weights1.map((weights, index) => {
      return weights.map((weight, weightIndex) => {
        return (
          weight +
          learningRate *
            layer1Errors[index] *
            (layer1Outputs[index] * (1 - layer1Outputs[index])) *
            (index === 0 ? 1 : layer1Outputs[index - 1])
        );
      });
    });

    const newWeights2 = weights2.map((weights) => {
      return weights.map((weight, index) => {
        return weight + learningRate * layer2Error * (layer2Outputs[0] * (1 - layer2Outputs[0])) * layer1Outputs[index];
      });
    });

    setWeights1(newWeights1);
    setWeights2(newWeights2);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = parseFloat(value);
    setInputs(newInputs);
  };

  return (
    <div>
      <InputSection inputs={inputs} handleInputChange={handleInputChange} /> {/* Updated to use InputSection */}
      <button onClick={trainNetwork}>학습</button>
      <NetworkSection
        inputs={inputs}
        layer1Outputs={layer1Outputs}
        weights1={weights1}
        handleLayer1Output={handleLayer1Output}
        weights2={weights2}
        handleLayer2Output={handleLayer2Output}
      />{" "}
      <h2>{layer2Outputs[0].toFixed(4)}</h2>
    </div>
  );
};

export default Main;
