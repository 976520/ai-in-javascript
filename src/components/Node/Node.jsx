import React, { useEffect, useState } from "react";
import { NodeContainer } from "./NodeStyle";

const Node = ({ inputs, weights, onOutput }) => {
  const [output, setOutput] = useState(0);

  const sigmoid = (x) => 1 / (1 + Math.exp(-x));

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
      <p>{output.toFixed(4)}</p>
      <p>{weights.join("  ")}</p>
    </NodeContainer>
  );
};

export default Node;
