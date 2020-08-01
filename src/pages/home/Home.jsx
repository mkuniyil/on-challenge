import React from 'react';
import './Home.scss';
import Link from '../../components/Link/Link';
import BackgroundImageStartScreen from '../../assets/BackgroundImageStartScreen.png';

const Home = () => {
  return (
    <div className="box_homePage box_appBody" data-testid="homePage">
      <div className="body_content">
        <div className="title">
          <h2>
            Take the quiz <span>and try your first pair!</span>
          </h2>
        </div>
        <Link
          href="/quiz"
          classname="link box_linkButton"
          text="Try on Trial"
          testId="btnTryTrial"
        />
        <div className="box_imageContainer">
          <div className="background">
            <div className="label">30 Days risk free</div>
            <img src={BackgroundImageStartScreen} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
