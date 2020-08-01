import React from 'react';
import './LoadingScreen.scss';
import Loader from '../../assets/loader.gif';

const LoadingScreen = () => (
  <div className="box_loadingScreen box_appBody" data-testid="loadingScreen">
    <div className="body_content">
      <div className="content_body">
        <img src={Loader} alt="Loading ..." />
        <div className="loadingText">We're running to get your results</div>
      </div>
    </div>
  </div>
);

export default LoadingScreen;
