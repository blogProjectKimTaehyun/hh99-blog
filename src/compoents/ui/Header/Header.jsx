import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <StNav>
        <StIntro>
          <div className="profile"></div>
          <div className="desc">
            <p className="name">MIN</p>
            <p className="job">Web Frontend Developer</p>
          </div>
          <div className="link">
            <a href="https://minprogramming.tistory.com">
              https://minprogramming.tistory.com
            </a>
          </div>
        </StIntro>
        <StCatagory>
          <ul>
            <li>Post</li>
            <li>About</li>
          </ul>
        </StCatagory>
      </StNav>
    </StHeader>
  );
};

const StHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 450px;
  width: 25vw;
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
`;

const StNav = styled.nav`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
  background: rgb(14, 17, 22);
`;

const StIntro = styled.div`
  height: 50%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .profile {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: yellow;
  }
  .desc {
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
  }
  .link {
    margin: 0;
    a {
      color: #fff;
      font-size: 1rem;
    }
  }
`;

const StCatagory = styled.div`
  height: 50%;
  padding-right: 45px;
  padding-left: 45px;
  margin: 0;
  box-sizing: border-box;
  ul {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-top: 2px solid #666;
    list-style-type: none;
    text-align: center;
    li {
      margin: 30px;
      color: #fff;
      font-size: 1.4rem;
    }
  }
`;

export default Header;
