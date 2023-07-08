import { styled } from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export default Layout;
