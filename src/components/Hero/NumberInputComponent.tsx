import React, { ChangeEvent } from "react";
import { ContainerNumberInput } from './styles/Sales.styled';
interface NumberInputProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function NumberInput(props: NumberInputProps) {
  function handleIncrement() {
    const newValue = props.value + props.step!;
    if (props.max !== undefined && newValue > props.max) {
      return;
    }
    props.onChange({ target: { value: newValue } } as unknown as ChangeEvent<HTMLInputElement>);
  }

  function handleDecrement() {
    const newValue = props.value - props.step!;
    if (props.min !== undefined && newValue < props.min) {
      return;
    }
    props.onChange({ target: { value: newValue } } as unknown as ChangeEvent<HTMLInputElement>);
  }

  return (
    <ContainerNumberInput>
      <button type="button" onClick={handleDecrement}>-</button>
      <input 
        type="text" 
        min={props.min} 
        max={props.max} 
        step={props.step}
        value={props.value}
        onChange={props.onChange}
      />
      <button type="button" onClick={handleIncrement}>+</button>
    </ContainerNumberInput>
  );
}

export default NumberInput;