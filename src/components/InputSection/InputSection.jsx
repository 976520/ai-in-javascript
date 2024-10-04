import { InputField } from "./InputSectionStyle";

export const InputSection = ({ inputs, handleInputChange }) => (
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
