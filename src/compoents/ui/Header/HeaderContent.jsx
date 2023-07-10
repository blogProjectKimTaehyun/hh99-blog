import {
  StCatagory,
  StCatagoryItem,
  StCatagoryMenu,
  StIntro,
  StIntroDesc,
  StIntroLink,
  StIntroProfile,
} from "./style";

/**
 * @param {string} profile the profile of Intro
 * @param {object} desc the desc of Intro
 * @param {string} link the link of Intro
 */

export const Intro = ({ profile, desc, blog }) => {
  return (
    <StIntro>
      <StIntroProfile>
        <span></span>
      </StIntroProfile>
      <StIntroDesc>
        <p className="name">{desc.name}</p>
        <p className="job">{desc.job}</p>
      </StIntroDesc>
      <StIntroLink>
        <a href={blog}>{blog}</a>
      </StIntroLink>
    </StIntro>
  );
};

/**
 * @param {Array} catagory the catagory list
 */

export const Catagory = ({ catagory }) => {
  return (
    <StCatagory>
      <StCatagoryMenu>
        {catagory.map((item) => (
          <StCatagoryItem key={item}>{item}</StCatagoryItem>
        ))}
      </StCatagoryMenu>
    </StCatagory>
  );
};
