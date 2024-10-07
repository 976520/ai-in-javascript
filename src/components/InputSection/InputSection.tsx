import React from "react";
import { InputField } from "./InputSectionStyle.tsx";

interface InputSectionProps {
  inputs: number[];
  handleInputChange: (index: number, value: string) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ inputs = [], handleInputChange }) => (
  <div>
    {inputs.map((input, index) => (
      <InputField
        key={index}
        type="number"
        value={input}
        onChange={(e) => handleInputChange(index, e.target.value)}
        placeholder={`Input ${index + 1}`}
      />
    ))}
  </div>
);
