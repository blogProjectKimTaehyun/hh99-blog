import React from "react";
import { styled } from "styled-components";

const StInput = styled.form`
  display: flex;
  flex-direction: column;
  color: #fff;
  p {
    color: white;
    font-size: 2rem;
  }
  input {
    width: 100%;
    height: 600px;
  }
`;
const WriteInput = ({ useage = "title", value, onChangeInput }) => {
  const sizes = {
    title: { rows: "1", cols: "100" },
    subtitle: { rows: "1", cols: "100" },
    body: { rows: "30", cols: "100" },
  };
  const size = sizes[useage];

  return (
    <>
      <StInput onSubmit={() => {}}>
        <label for="title">{useage.toUpperCase()}</label>

        <textarea
          id="title"
          name={useage}
          rows={size.rows || "1"}
          cols={size.cols || "100"}
          placeholder={`${useage}를 입력하세요`}
          onChange={onChangeInput}
        ></textarea>
      </StInput>
    </>
  );
};

export default WriteInput;
