import React, { Component } from 'react';
import './play-pause-button.css';

import PauseSvg from '../../images/pause.svg';
import PlaySvg from '../../images/play.svg';

class PlayPauseButton extends Component {
  render() {
    let button;

    console.log(this.props.paused);
    if (this.props.paused) {
      button = <PlayButton onClick={this.props.onClick} />
    } else {
      button = <PauseButton onClick={this.props.onClick} />
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
    <img onClick={props.onClick} alt="pause" src={PauseSvg} />
  );
}

function PlayButton(props) {
  return (
    <img onClick={props.onClick} alt="play" src={PlaySvg} />
  );
}

export default PlayPauseButton;
