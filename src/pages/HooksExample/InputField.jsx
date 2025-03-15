

import React, { useRef, useCallback } from 'react';

export default function InputField() {
  const inputRef = useRef(null);

  const focusInput = useCallback(() => {
    console.log('DDD')
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        className="border p-2 rounded"
      />
      <button
        onClick={focusInput}
        className="btn btn-primary text-white px-4 py-2 rounded"
      >
        Focus Input
      </button>
    </div>
  );
}