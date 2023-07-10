import { styled } from "styled-components";

const BlogList = ({ children }) => {
  return <StBlogList>{children}</StBlogList>;
};

const StBlogList = styled.div`
  width: 75vw;
  height: 100%;
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h1 {
    font-size: 3.8rem;
    color: #fff;
  }
`;

export default BlogList;
