import React from "react";
import { styled } from "styled-components";

const StBlogItem = styled.div`
  color: #fff;
  border-radius: 1.4rem;
  background-color: black;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const StTagWrapper = styled.div`
  border: 1px dashed red;
  display: flex;
  gap: 1rem;
  p {
    -webkit-box-shadow: 0px 0px 9px 2px #62e0d5;
    box-shadow: 0px 0px 9px 2px #62e0d5;

    font-size: 0.7rem;
    color: #62e0d5;
    padding: 0.4rem;
    border-radius: 2rem;
  }
`;
const StContentsWrapper = styled.div`
  border: 1px dashed blue;
`;

const StFooterWrapper = styled.div`
  border: 1px dashed yellow;
  display: flex;
  justify-content: space-between;
  button {
    background: none;
    border: none;
    color: #fff;
  }
  p {
    font-size: 0.5rem;
  }
`;

const BlogItem = () => {
  return (
    <StBlogItem>
      <StTagWrapper>
        <p>tags sample</p>
        <p>tags sample</p>
      </StTagWrapper>
      <StContentsWrapper>
        <h3>MSW로 개발자 경험 향상시키기</h3>
        <p>먼저 MSW가 무엇인지 살펴보자!</p>
      </StContentsWrapper>
      <StFooterWrapper>
        <button>readmore~</button>
        <p>JUL 02, 2025</p>
      </StFooterWrapper>
    </StBlogItem>
  );
};

export default BlogItem;
