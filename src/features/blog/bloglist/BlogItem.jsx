import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const StBlogItem = styled.div`
  color: #fff;
  border-radius: 1.4rem;
  background-color: black;
  display: flex;
  flex-direction: column;

  padding: 1.8rem;
  row-gap: 0.5rem;
`;

const StTagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  p {
    -webkit-box-shadow: 0px 0px 9px 2px #62e0d5;
    box-shadow: 0px 0px 9px 2px #62e0d5;

    font-size: 0.7rem;
    color: #62e0d5;
    padding: 0.4rem;
    border-radius: 2rem;
    margin: 0;
    cursor: pointer;
    transition: all 0.2s;
  }
  p:hover {
    color: #d1fcda;
    -webkit-box-shadow: 0px 0px 9px 2px #d1fcda;
    box-shadow: 0px 0px 9px 2px #d1fcda;
  }
`;
const StContentsWrapper = styled.div`
  height: 100%;
  h3 {
    font-size: 1.7rem;
  }
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

const StFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    background: none;
    border: none;
    color: gray;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: all 0.2s;
  }
  button:hover {
    color: #fff;
  }
  p {
    font-size: 0.5rem;
    margin: 0;
    color: gray;
  }
`;

const BlogItem = ({
  tags = ["태그1", "태그2"],
  title = "제목샘플제목샘플제목샘플제목샘플제목샘플제목샘",
  subtitle = "부제목샘플샘플샘플",
  id = 1,
  date = "Dec 18, 2024",
}) => {
  const navigate = useNavigate();
  return (
    <StBlogItem>
      <StTagWrapper>
        {tags
          ? tags.map((tag) => (
              <p
                onClick={() => {
                  navigate(`/category/${tag}`);
                }}
              >
                {tag}
              </p>
            ))
          : null}
      </StTagWrapper>
      <StContentsWrapper>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </StContentsWrapper>
      <StFooterWrapper>
        <button onClick={() => navigate(`/contents/${id}`)}>
          want to readmore?
        </button>
        <p>{date}</p>
      </StFooterWrapper>
    </StBlogItem>
  );
};

export default BlogItem;
