import { styled } from "styled-components";

export const DropDown = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 38px;
  width: 244px;
  padding: 0px 30px;
  border: none;
  border-radius: ${(prop) => (prop.inner ? 0 : 12)}px;

  background-color: rgb(255, 255, 255);
  &:hover {
    background-color: ${(prop) => (prop.inner ? "rgb(230, 230, 230)" : "")};
  }
`;

export const DropDownOpen = styled.div`
  width: 242px;
  padding: 0;
  max-height: 0;

  overflow: hidden;
  position: absolute;

  border-radius: 12px;

  background-color: rgb(255, 255, 255);

  transition: all 0.3s;
  &.open {
    max-height: 50rem;
    transition: all 0.3s;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
`;
