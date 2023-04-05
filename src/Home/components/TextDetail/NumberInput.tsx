import React, { ChangeEvent } from "react";
import * as S from "./styles";
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
    <S.ContainerNumberInput>
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
    </S.ContainerNumberInput>
  );
}

export default NumberInput;
