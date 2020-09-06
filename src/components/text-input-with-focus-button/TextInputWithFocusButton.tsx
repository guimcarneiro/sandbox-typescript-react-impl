import React, { useRef } from "react";

const TextInputWithFocusButton: React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    inputEl.current!.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus no Input</button>
    </>
  );
};

export default TextInputWithFocusButton;
