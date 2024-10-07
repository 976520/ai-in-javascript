import React, { useEffect, useState } from "react";
import { NodeContainer } from "./NodeStyle.tsx";
import { sigmoid, relu, tanh, step } from "../../constants/ActivationFunction.tsx";

interface NodeProps {
  inputs: number[];
  weights: number[];
  onOutput: (output: number) => void;
}

const Node: React.FC<NodeProps> = ({ inputs, weights, onOutput }) => {
  const [output, setOutput] = useState(0);

  useEffect(() => {
    if (inputs && weights && inputs.length === weights.length) {
      const weightedSum = inputs.reduce((sum, input, index) => sum + input * weights[index], 0);
      const activatedOutput = sigmoid(weightedSum);
      if (output !== activatedOutput) {
        setOutput(activatedOutput);
        onOutput(activatedOutput);
      }
    }
  }, [inputs, weights, onOutput, output]);

  return (
    <NodeContainer>
      <h3>{output}</h3>
      <p>{weights.join("  ")}</p>
    </NodeContainer>
  );
};

export default Node;
