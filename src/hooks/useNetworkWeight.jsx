import { useState } from "react";

export const useNetworkWeight = () => {
  const [weight1, setWeight1] = useState([
    [0.5, 0.8, 0.3],
    [0.4, 0.7, 0.6],
    [0.6, 0.9, 0.1],
    [0.2, 0.3, 0.4],
  ]);

  const [weight2, setWeight2] = useState([
    [0.6, 0.9, 0.1, 0.2],
    [0.5, 0.4, 0.3, 0.2],
    [0.1, 0.2, 0.3, 0.4],
    [0.3, 0.5, 0.7, 0.9],
  ]);

  const [weight3, setWeight3] = useState([
    [0.2, 0.4, 0.6, 0.8],
    [0.3, 0.5, 0.7, 0.9],
    [0.1, 0.2, 0.3, 0.4],
    [0.4, 0.6, 0.8, 0.1],
  ]);

  const [weight4, setWeight4] = useState([[0.1, 0.2, 0.3, 0.4]]);

  return {
    weight1,
    setWeight1,
    weight2,
    setWeight2,
    weight3,
    setWeight3,
    weight4,
    setWeight4,
  };
};
