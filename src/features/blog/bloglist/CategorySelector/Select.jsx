import React, { useCallback, useState } from "react";
import {
  DropDown,
  DropDownOpen,
  DropDownContainer,
  Message,
} from "./SelectStyle";
/**
 *
 * @param {boolean} overflow overflow를 써주면 hidden 활성화
 * @returns 다용도 select 창을 돌려줍니다. 와~ 🫠
 */
export const Select = ({ overflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState("리엑트");
  const [isMessageShowing, setIsMessageShowing] = useState(false);

  const onSelectHandler = useCallback((e) => {
    setDisplayName(e.target.innerText);
    setIsMessageShowing(true);
    setIsOpen(false);
  }, []);
  return (
    <DropDownContainer
      {...(overflow ? { overflow } : {})}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <DropDown
        onMouseEnter={() => {
          setIsOpen(true);
        }}
      >
        <span>{!isMessageShowing && displayName}</span>\<div>▼</div>
      </DropDown>

      <DropDownOpen className={isOpen ? "open" : ""}>
        <DropDown inner="true" onClick={onSelectHandler}>
          리엑트
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          자바
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          스프링
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          노드
        </DropDown>
      </DropDownOpen>
    </DropDownContainer>
  );
};
