import { useState } from "react";

export const useNetworkWeight = () => {
  const generateRandomWeights = (rows: number, cols: number) => {
    return Array.from({ length: rows }, () => Array.from({ length: cols }, () => Math.round(Math.random() * 10) / 10));
  };

  const [weight1, setWeight1] = useState(generateRandomWeights(4, 3));

  const [weight2, setWeight2] = useState(generateRandomWeights(4, 4));

  const [weight3, setWeight3] = useState(generateRandomWeights(4, 4));

  const [weight4, setWeight4] = useState(generateRandomWeights(1, 4));

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
