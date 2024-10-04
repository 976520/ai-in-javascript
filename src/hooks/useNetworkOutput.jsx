import { useState } from "react";

export const useNetworkOutput = () => {
  const [layer1Output, setLayer1Output] = useState([0, 0, 0, 0]);
  const [layer2Output, setLayer2Output] = useState([0, 0, 0, 0]);
  const [layer3Output, setLayer3Output] = useState([0, 0, 0, 0]);
  const [layer4Output, setLayer4Output] = useState([0]);

  return {
    layer1Output,
    setLayer1Output,
    layer2Output,
    setLayer2Output,
    layer3Output,
    setLayer3Output,
    layer4Output,
    setLayer4Output,
  };
};
