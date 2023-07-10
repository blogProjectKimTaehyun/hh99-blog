import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StBlogItem = styled.div`
  width: 500px;
  border-radius: 1.4rem;
  background-color: black;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex: 1 1 500px;
  padding: 1.8rem;
  row-gap: 0.5rem;
`;

const StTagWrapper = styled.div`
  display: flex;
  gap: 1rem;
  #link {
    -webkit-box-shadow: 0px 0px 9px 2px #62e0d5;
    box-shadow: 0px 0px 9px 2px #62e0d5;

    font-size: 0.7rem;
    color: #62e0d5;
    padding: 0.4rem;
    border-radius: 2rem;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
  }

  #link:hover {
    color: #d1fcda;
    -webkit-box-shadow: 0px 0px 9px 2px #d1fcda;
    box-shadow: 0px 0px 9px 2px #d1fcda;
  }
`;
const StContentsWrapper = styled.div`
  height: 100%;
  h3 {
    font-size: 1.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    font-size: 0.8rem;
    color: gray;
  }
`;

const StFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  #more {
    background: none;
    border: none;
    color: gray;
    text-decoration: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: all 0.2s;
  }

  #more:hover {
    color: #fff;
  }

  p {
    font-size: 0.5rem;
    margin: 0;
    color: gray;
  }
`;

const BlogListItem = ({
  tags = ["태그1", "태그2"],
  title = "제목샘플제목샘플제목샘플제목샘플제목샘플제목샘asfdasfdfas",
  subtitle = "부제목샘플샘플샘플",
  id = 1,
  date = "Dec 18, 2024",
}) => {
  return (
    <StBlogItem>
      <StTagWrapper>
        {tags.map((tag) => (
          <Link to={"/catagory/" + tag} id="link">
            {tag}
          </Link>
        ))}
      </StTagWrapper>

      <StContentsWrapper>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </StContentsWrapper>

      <StFooterWrapper>
        <Link id="more" to={"/contents/" + id}>
          want to readmore?
        </Link>
        <p>{date}</p>
      </StFooterWrapper>
    </StBlogItem>
  );
};

export default BlogListItem;
