import Node from "../Node";
import { Network, Layer } from "./NetworkSectionStyle";

export const NetworkSection = ({
  inputs,
  layer1Outputs,
  weights1,
  handleLayer1Output,
  weights2,
  handleLayer2Output,
}) => (
  <Network>
    <Layer>
      <Node inputs={inputs} weights={weights1[0]} onOutput={(output) => handleLayer1Output(0, output)} />
      <Node inputs={inputs} weights={weights1[1]} onOutput={(output) => handleLayer1Output(1, output)} />
      <Node inputs={inputs} weights={weights1[2]} onOutput={(output) => handleLayer1Output(2, output)} />
      <Node inputs={inputs} weights={weights1[0]} onOutput={(output) => handleLayer1Output(0, output)} />
      <Node inputs={inputs} weights={weights1[1]} onOutput={(output) => handleLayer1Output(1, output)} />
      <Node inputs={inputs} weights={weights1[2]} onOutput={(output) => handleLayer1Output(2, output)} />
    </Layer>
    <Layer>
      <Node inputs={layer1Outputs} weights={weights2[0]} onOutput={handleLayer2Output} />
    </Layer>
  </Network>
);
