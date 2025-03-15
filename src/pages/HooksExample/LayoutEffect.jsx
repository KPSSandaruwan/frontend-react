import React, { useRef, useState, useLayoutEffect } from 'react';

export default function LayoutEffect() {
  const divRef = useRef(null);
  const divChildRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [childWidth, setChildWidth] = useState(0);


  useLayoutEffect(() => {
    setWidth(divRef.current.offsetWidth);
    setChildWidth(divChildRef.current.offsetWidth);
  }, []);

  return (
    <>
      <div ref={divRef}>
        Width: {width}px
        <div ref={divChildRef} className='container'>Width: {childWidth}px</div>
      </div>
    </>
  );
}