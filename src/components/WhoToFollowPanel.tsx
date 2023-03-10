import "../styles/WhoToFollow.css";
import RecommendedFollow from "./RecommendedFollow";
import ShowMoreButton from "./ShowMoreButton";
import testPfp from "../media/randompfp.jpg";

const WhoToFollowPanel = () => {
  return (
    <div className="who-to-follow-container">
      <h1>Who to follow</h1>
      <RecommendedFollow
        profileImage={testPfp}
        name={"Matthew"}
        userName={"tagtart1"}
      />
      <RecommendedFollow
        profileImage={testPfp}
        name={"Matthew"}
        userName={"tagtart1"}
      />
      <ShowMoreButton />
    </div>
  );
};

export default WhoToFollowPanel;
