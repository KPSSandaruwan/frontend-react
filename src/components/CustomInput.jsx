import React, { useRef, useImperativeHandle } from "react";

export default function CustomInput({ props, ref }) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    }
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type here..."
      className="border p-2 rounded"
    />
  );
}