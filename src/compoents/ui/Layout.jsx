import { styled } from "styled-components";

const Layout = ({ children }) => {
  return <StLayout>{children}</StLayout>;
};

const StLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(23, 27, 33);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Layout;
