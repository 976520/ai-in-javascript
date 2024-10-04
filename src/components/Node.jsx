import React, { useEffect, useState } from "react";
import styled from "styled-components";

const NodeContainer = styled.div`
  position: relative;
  border: 2px solid #333;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  text-align: center;
  background-color: #f0f0f0;
`;

const Node = ({ inputs, weights, onOutput }) => {
  const [output, setOutput] = useState(0);

  const sigmoid = (x) => 1 / (1 + Math.exp(-x));

  useEffect(() => {
    if (inputs && weights && inputs.length === weights.length) {
      const weightedSum = inputs.reduce((sum, input, index) => sum + input * weights[index], 0);
      const activatedOutput = sigmoid(weightedSum);
      setOutput(activatedOutput);
      onOutput(activatedOutput);
    }
  }, [inputs, weights, onOutput]);

  return (
    <NodeContainer>
      <p>Output: {output.toFixed(4)}</p>
    </NodeContainer>
  );
};

export default Node;
