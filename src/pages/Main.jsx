import { InputSection } from "../components/InputSection/InputSection";
import { NetworkSection } from "../components/NetworkSection/NetworkSection";

import React, { useState } from "react";
import { useNetworkOutput } from "../hooks/useNetworkOutput";
import { useNetworkWeight } from "../hooks/useNetworkWeight";
import { useNetworkHandler } from "../hooks/useNetworkHandler";
import { useNetworkTraining } from "../hooks/useNetworkTraining";

const Main = () => {
  const [input, setInput] = useState([0, 0, 0]);

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
    setLayer4Output,
    layer1Outputs,
    layer2Outputs,
    layer3Outputs
  );

  const handleInputChange = (index, value) => {
    const newInput = [...input];
    newInput[index] = parseFloat(value);
    setInput(newInput);
  };

  return (
    <div>
      <InputSection input={input} handleInputChange={handleInputChange} />
      <button onClick={trainNetwork}>학습</button>
      <NetworkSection
        input={input}
        layer1Output={layer1Outputs}
        layer2Output={layer2Outputs}
        layer3Output={layer3Outputs}
        weight1={weight1}
        handleLayer1Output={handleLayer1Output}
        weight2={weight2}
        handleLayer2Output={handleLayer2Output}
        weight3={weight3}
        handleLayer3Output={handleLayer3Output}
        weight4={weight4}
        handleLayer4Output={handleLayer4Output}
      />
      <h2>{layer4Output[0]?.toFixed(4) || "N/A"}</h2>
    </div>
  );
};

export default Main;
