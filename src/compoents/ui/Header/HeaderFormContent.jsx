import {
  StCatagory,
  StCatagoryItem,
  StCatagoryMenu,
  StProfile,
  StProfileImg,
  StProfileDesc,
  StProfileContact,
} from "./style";

/**
 * @param {string} profile the profile of Intro
 * @param {object} desc the desc of Intro
 * @param {string} link the link of Intro
 */

export const Profile = ({ profile, desc, blog }) => {
  return (
    <StProfile>
      <StProfileImg>
        <span id="hightlight"></span>
      </StProfileImg>

      <StProfileDesc>
        <p className="name">{desc.name}</p>
        <p className="job">{desc.job}</p>
      </StProfileDesc>

      <StProfileContact>
        <a href={blog}>{blog}</a>
      </StProfileContact>
    </StProfile>
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
