import React from 'react';

const DEFAULT_LISTEN_EVENT_INTERVAL = 10000;

const ReactAudioPlayer = React.createClass({
  componentDidMount() {
    const audio = this.refs.audio;

    // When audio play starts
    audio.addEventListener('play', (e) => {
      this.setListenTrack();
      this.props.playerActions.play(audio.currentTime, this.props.episodeId);
      this.props.onPlay(audio.currentTime);
    });

    // When unloading the audio player (switching to another src)
    audio.addEventListener('abort', (e) => {
      this.clearListenTrack();
      this.props.onAbort(audio.currentTime);
    });

    // When the file has finished playing to the end
    audio.addEventListener('ended', (e) => {
      this.clearListenTrack();
      this.props.onEnd(audio.currentTime);
    });

    // When the user pauses playback
    audio.addEventListener('pause', (e) => {
      this.clearListenTrack();
      this.props.onPause(audio.currentTime);
    });

    // When the user drags the time indicator to a new time
    audio.addEventListener('seeked', (e) => {
      this.clearListenTrack();
      this.props.onSeeked(audio.currentTime);
    });
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedPlayerEvent) {
      const audio = this.refs.audio;

      audio.currentTime = nextProps.selectedPlayerEvent.playTime;
      audio.play();
    }
  },

  render() {
    return (
      <audio
        className="react-audio-player"
        src={this.props.media}
        preload="auto"
        controls
        autoPlay="true"
        ref="audio"
        onPlay={this.onPlay}
      >
        <p>Your browser does not support the <code>audio</code> element.</p>
      </audio>
    );
  },

  /**
   * Set an interval to call props.onListen every props.listenInterval time period
   */
  setListenTrack(currentTime) {
    if (!this.listenTracker) {
      const listenInterval = this.props.listenInterval || DEFAULT_LISTEN_INTERVAL;
      this.listenTracker = setInterval(() => {
        this.props.onListen(this.refs.audio.currentTime);
      }, listenInterval);
    }
  },

  /**
   * Clear the onListen interval
   */
  clearListenTrack() {
    clearInterval(this.listenTracker);
  },
});

export default ReactAudioPlayer;
