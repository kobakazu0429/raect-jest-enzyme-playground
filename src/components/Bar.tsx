import React, { useState, useCallback, ChangeEvent } from "react";

export interface IProps {
  name: string;
  age?: number;
}

export const Bar = ({ name, age: _age = 0 }: IProps) => {
  const [age, setAge] = useState(_age);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setAge(Number(e.target.value));
    },
    [age]
  );

  return (
    <div>
      <p id="name">name: {name}</p>
      <p id="age">age: {age}</p>
      <input type="number" value={age} onChange={handleChange} />
    </div>
  );
};
