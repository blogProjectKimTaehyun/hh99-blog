import { Catagory, Profile } from "./HeaderFormContent";
import { HeaderContainer, HeaderForm } from "./style";

const Header = () => {
  const profileDesc = { name: "MIN", job: "Web Frontend Developer" };
  const profileContact = "https://minprogramming.tistory.com";
  const catagoryList = ["Post", "Contact", "About"];
  return (
    <HeaderContainer>
      <HeaderForm>
        <Profile desc={profileDesc} contact={profileContact} />
        <Catagory catagory={catagoryList} />
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
