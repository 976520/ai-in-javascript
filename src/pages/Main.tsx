import { InputSection } from "../components/InputSection/InputSection.tsx";
import { NetworkSection } from "../components/NetworkSection/NetworkSection.tsx";

import React, { useState } from "react";
import { useNetworkOutput } from "../hooks/useNetworkOutput.tsx";
import { useNetworkWeight } from "../hooks/useNetworkWeight.tsx";
import { useNetworkHandler } from "../hooks/useNetworkHandler.tsx";
import { useNetworkTraining } from "../hooks/useNetworkTraining.tsx";

const Main: React.FC = () => {
  const [input, setInput] = useState<number[]>([0, 0, 0]);

  const {
    layer1Output,
    setLayer1Output,
    layer2Output,
    setLayer2Output,
    layer3Output,
    setLayer3Output,
    layer4Output,
    setLayer4Output,
  } = useNetworkOutput();

  const layer1Outputs = layer1Output || [];
  const layer2Outputs = layer2Output || [];
  const layer3Outputs = layer3Output || [];

  const { weight1, setWeight1, weight2, setWeight2, weight3, setWeight3, weight4, setWeight4 } = useNetworkWeight();

  const trainNetwork = useNetworkTraining(
    input,
    weight1,
    weight2,
    weight3,
    weight4,
    setWeight1,
    setWeight2,
    setWeight3,
    setWeight4
  );

  const { handleLayer1Output, handleLayer2Output, handleLayer3Output, handleLayer4Output } = useNetworkHandler(
    setLayer1Output,
    setLayer2Output,
    setLayer3Output,
    setLayer4Output
  );

  const handleInputChange = (index: number, value: string) => {
    const newInput = [...input];
    newInput[index] = parseFloat(value);
    setInput(newInput);
  };

  return (
    <div>
      <InputSection inputs={input} handleInputChange={handleInputChange} />
      <button onClick={trainNetwork}>학습</button>
      <NetworkSection
        inputs={input}
        layer1Outputs={layer1Outputs}
        layer2Outputs={layer2Outputs}
        layer3Outputs={layer3Outputs}
        weights1={weight1}
        handleLayer1Output={handleLayer1Output}
        weights2={weight2}
        handleLayer2Output={handleLayer2Output}
        weights3={weight3}
        handleLayer3Output={handleLayer3Output}
        weights4={weight4}
        handleLayer4Output={handleLayer4Output}
      />
      <h2>{layer4Output[0]?.toFixed(4) || "N/A"}</h2>
    </div>
  );
};

export default Main;
