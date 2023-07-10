import { styled } from "styled-components";

export const DropDown = styled.button`
  font-weight: 700;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
  width: 10rem;
  padding: 0px 30px;
  border: none;
  border-radius: ${(prop) => (prop.inner ? 0 : 20)}px;

  background-color: black;
  &:hover {
    background-color: ${(prop) => (prop.inner ? "rgb(20, 20, 20)" : "")};
  }
`;

export const DropDownOpen = styled.div`
  width: 10rem;
  padding: 0;
  max-height: 0;

  overflow: hidden;
  position: absolute;

  border-radius: 20px;

  background-color: black;

  transition: all 0.3s;
  &.open {
    max-height: 50rem;
    transition: all 0.3s;
  }
`;

export const DropDownContainer = styled.div`
  position: relative;
  width: fit-content;
`;
