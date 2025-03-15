import React, { useRef } from 'react';
import CustomInput from '../../components/CustomInput.jsx';

export default function ImperativeHandle() {
  const inputRef = useRef(null);

  return (
    <div>
      <h2>useImperativeHandle Example</h2>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focusInput()}>Focus Input</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </div>
  );
}