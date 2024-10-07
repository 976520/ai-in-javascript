import React from "react";
import Node from "../Node/Node.tsx";
import { Network, Layer } from "./NetworkSectionStyle.tsx";

interface NetworkSectionProps {
  inputs: number[];
  layer1Outputs?: number[];
  layer2Outputs?: number[];
  layer3Outputs?: number[];
  weights1: number[][];
  handleLayer1Output: (index: number, output: number) => void;
  weights2: number[][];
  handleLayer2Output: (index: number, output: number) => void;
  weights3: number[][];
  handleLayer3Output: (index: number, output: number) => void;
  weights4: number[][];
  handleLayer4Output: (output: number) => void;
}

export const NetworkSection: React.FC<NetworkSectionProps> = ({
  inputs,
  layer1Outputs = [],
  layer2Outputs = [],
  layer3Outputs = [],
  weights1 = [],
  handleLayer1Output,
  weights2 = [],
  handleLayer2Output,
  weights3 = [],
  handleLayer3Output,
  weights4 = [],
  handleLayer4Output,
}) => (
  <Network>
    <Layer>
      {weights1.map((weights, index) => (
        <Node key={index} inputs={inputs} weights={weights} onOutput={(output) => handleLayer1Output(index, output)} />
      ))}
    </Layer>
    <Layer>
      {weights2.map((weights, index) => (
        <Node
          key={index}
          inputs={layer1Outputs}
          weights={weights}
          onOutput={(output) => handleLayer2Output(index, output)}
        />
      ))}
    </Layer>
    <Layer>
      {weights3.map((weights, index) => (
        <Node
          key={index}
          inputs={layer2Outputs}
          weights={weights}
          onOutput={(output) => handleLayer3Output(index, output)}
        />
      ))}
    </Layer>
    <Layer>
      {weights4.length > 0 && <Node inputs={layer3Outputs} weights={weights4[0]} onOutput={handleLayer4Output} />}
    </Layer>
  </Network>
);
