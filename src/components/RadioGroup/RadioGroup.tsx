import { ChangeEventHandler } from "react";

type RadioGroupProps = {
  name: string;
  selectedValue: string | number;
  legend?: string
  options?: Array<{ label: string; value: string | number }>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

const RadioGroup = ({ name, selectedValue, legend, options, onChange, className }: RadioGroupProps) => {
  return (
    <fieldset className={className}>
        { legend && <legend>{legend}</legend> }
        { 
            options?.map((option) => (
                <label key={option.value}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={onChange}
                    />
                    {option.label}
                </label>
            ))
        }
    </fieldset>
  );
};

export default RadioGroup;