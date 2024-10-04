import React, { useState } from "react";
import styled from "styled-components";
import Node from "../../components/Node";

const Network = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

const Layer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  position: relative;
`;

const InputField = styled.input`
  margin: 5px;
  padding: 5px;
  width: 80px;
`;

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
      <div>
        {inputs.map((input, index) => (
          <InputField
            key={index}
            type="number"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Input ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={trainNetwork}>학습</button>
      <Network>
        <Layer>
          <Node inputs={inputs} weights={weights1[0]} onOutput={(output) => handleLayer1Output(0, output)} />
          <Node inputs={inputs} weights={weights1[1]} onOutput={(output) => handleLayer1Output(1, output)} />
          <Node inputs={inputs} weights={weights1[2]} onOutput={(output) => handleLayer1Output(2, output)} />
        </Layer>
        <Layer>
          <Node inputs={layer1Outputs} weights={weights2[0]} onOutput={handleLayer2Output} />
        </Layer>
      </Network>
      <h2>{layer2Outputs[0].toFixed(4)}</h2>
    </div>
  );
};

export default Main;
