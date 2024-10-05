import Node from "../Node/Node";
import { Network, Layer } from "./NetworkSectionStyle";

export const NetworkSection = ({
  inputs,
  layer1Outputs,
  layer2Outputs,
  layer3Outputs,
  weights1,
  handleLayer1Output,
  weights2,
  handleLayer2Output,
  weights3,
  handleLayer3Output,
  weights4,
  handleLayer4Output,
}) => (
  <Network>
    <Layer>
      <Node inputs={inputs} weights={weights1[0]} onOutput={(output) => handleLayer1Output(0, output)} />
      <Node inputs={inputs} weights={weights1[1]} onOutput={(output) => handleLayer1Output(1, output)} />
      <Node inputs={inputs} weights={weights1[2]} onOutput={(output) => handleLayer1Output(2, output)} />
      <Node inputs={inputs} weights={weights1[3]} onOutput={(output) => handleLayer1Output(3, output)} />
    </Layer>
    <Layer>
      <Node inputs={layer1Outputs} weights={weights2[0]} onOutput={(output) => handleLayer2Output(0, output)} />
      <Node inputs={layer1Outputs} weights={weights2[1]} onOutput={(output) => handleLayer2Output(1, output)} />
      <Node inputs={layer1Outputs} weights={weights2[2]} onOutput={(output) => handleLayer2Output(2, output)} />
      <Node inputs={layer1Outputs} weights={weights2[3]} onOutput={(output) => handleLayer2Output(3, output)} />
    </Layer>
    <Layer>
      <Node inputs={layer2Outputs} weights={weights3[0]} onOutput={(output) => handleLayer3Output(0, output)} />
      <Node inputs={layer2Outputs} weights={weights3[1]} onOutput={(output) => handleLayer3Output(1, output)} />
      <Node inputs={layer2Outputs} weights={weights3[2]} onOutput={(output) => handleLayer3Output(2, output)} />
      <Node inputs={layer2Outputs} weights={weights3[3]} onOutput={(output) => handleLayer3Output(3, output)} />
    </Layer>
    <Layer>
      <Node inputs={layer3Outputs} weights={weights4[0]} onOutput={handleLayer4Output} />
    </Layer>
  </Network>
);
