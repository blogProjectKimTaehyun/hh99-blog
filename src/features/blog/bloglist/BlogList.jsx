import { styled } from "styled-components";

const BlogList = ({ children }) => {
  return <StBlogList>{children}</StBlogList>;
};

const StBlogList = styled.div`
  width: 75vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StBlogListTitle = styled.h1`
  font-size: 3.8rem;
  color: #fff;
`;

BlogList.Title = StBlogListTitle;

export default BlogList;
