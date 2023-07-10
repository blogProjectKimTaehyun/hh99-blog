import { Catagory, Intro } from "./HeaderContent";
import { StHeader, StNav } from "./style";

const Header = () => {
  const introDesc = { name: "MIN", job: "Web Frontend Developer" };
  const introBlog = "https://minprogramming.tistory.com";
  const catagory = ["Post", "Contact", "About"];
  return (
    <StHeader>
      <StNav>
        <Intro desc={introDesc} blog={introBlog} />
        <Catagory catagory={catagory} />
      </StNav>
    </StHeader>
  );
};

export default Header;
