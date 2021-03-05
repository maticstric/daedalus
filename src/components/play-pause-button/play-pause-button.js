import React, { Component } from 'react';
import './play-pause-button.css';

import PauseSvg from '../../images/pause.svg';
import PlaySvg from '../../images/play.svg';

class PlayPauseButton extends Component {
  render() {
    let button;

    if (this.props.isPaused) {
      button = <PlayButton updateIsPaused={this.props.updateIsPaused} />
    } else {
      button = <PauseButton updateIsPaused={this.props.updateIsPaused} />
    }

    return (
      <div id="play-pause-button-wrapper">
        {button}
      </div>
    );
  }
};

function PauseButton(props) {
  return (
    <img onClick={() => props.updateIsPaused(true)} alt="pause" src={PauseSvg} />
  );
}

function PlayButton(props) {
  return (
    <img onClick={() => props.updateIsPaused(false)} alt="play" src={PlaySvg} />
  );
}

export default PlayPauseButton;
