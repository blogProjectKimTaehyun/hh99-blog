import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  min-width: 450px;
  width: 20vw;
  height: 100vh;
  padding: 35px;
  box-sizing: border-box;
`;

export const HeaderForm = styled.nav`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
  background: rgb(14, 17, 22);
`;

export const StProfile = styled.div`
  height: 50%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StProfileImg = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid #888;
  animation: rotate_image 6s linear infinite;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
  #hightlight {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(0%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 100%;
    display: inline-block;
    background: yellow;
  }
`;

export const StProfileDesc = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #bbb;
  margin-bottom: 24px;
  .name {
    margin-top: 30px;
    margin-bottom: 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: #fff;
  }
`;

export const StProfileContact = styled.div`
  margin: 0;
  a {
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
  }
`;

export const StCatagory = styled.div`
  height: 50%;
  padding-right: 45px;
  padding-left: 45px;
  margin: 0;
  box-sizing: border-box;
`;

export const StCatagoryMenu = styled.ul`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border-top: 2px solid #666;
  list-style-type: none;
  text-align: center;
`;
export const StCatagoryItem = styled.li`
  margin: 30px;
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 1.2rem;
`;
