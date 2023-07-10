import { styled } from "styled-components";

const StBlogListMenu = styled.div`
  margin-top: 1.5rem;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px;
`;

const BlogListMenu = ({ children }) => {
  return <StBlogListMenu>{children}</StBlogListMenu>;
};

export default BlogListMenu;
