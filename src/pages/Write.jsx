import { styled } from "styled-components";
import Layout from "../compoents/ui/Layout";
import { Select } from "../features/blog/bloglist/CategorySelector/Select";
import WriteInput from "../features/blog/blogform/WriteInput";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";

const StLayout = styled.form`
  width: 100vw;
  height: 100vh;
  background: rgb(23, 27, 33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// dispatch(changeSubtitle(input))
const Write = () => {
  // const dispatch = useDispatch();
  const onChangeTitle = useCallback((input) => console.log(input), []);
  const onChangeSubtitle = useCallback((input) => console.log(input), []);
  const onChangeBody = useCallback((e) => console.log(e.target.value), []);

  return (
    <StLayout>
      <Select></Select>
      <WriteInput useage="title" onChangeInput={onChangeTitle} />
      <WriteInput useage="subtitle" onChangeInput={onChangeSubtitle} />
      <WriteInput useage="body" onChangeInput={onChangeBody} />
    </StLayout>
  );
};

export default Write;
