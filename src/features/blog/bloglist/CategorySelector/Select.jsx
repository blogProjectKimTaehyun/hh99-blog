import React, { useCallback, useState } from "react";
import {
  DropDown,
  DropDownOpen,
  DropDownContainer,
  Message,
} from "./SelectStyle";
import { Navigate, useNavigate } from "react-router-dom";
/**
 *
 * @param {boolean} overflow overflow를 써주면 hidden 활성화
 * @returns 다용도 select 창을 돌려줍니다. 와~ 🫠
 */
export const Select = ({ overflow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onSelectHandler = useCallback((e) => {
    const category = e.target.innerText;
    navigate(`/category/${category.toLowerCase()}`);
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
        <span>Category</span>
        <div>▼</div>
      </DropDown>

      <DropDownOpen className={isOpen ? "open" : ""}>
        <DropDown inner="true" onClick={onSelectHandler}>
          React
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          JavaScript
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          CS
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          NEXT
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          Redux
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          Etc
        </DropDown>
        <DropDown inner="true" onClick={onSelectHandler}>
          Tailwind
        </DropDown>
      </DropDownOpen>
    </DropDownContainer>
  );
};
