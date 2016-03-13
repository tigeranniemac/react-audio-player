# react-audio-player
This is a light React wrapper around the HTML5 audio tag.  It provides the ability to manipulate the player and listen to events through a nice React interface.

## Example

## API

#### listenInterval {Function} [10000]
Indicates how often to call the `onListened` prop during playback, in milliseconds.

#### onAbort {Function}
Called when unloading the audio player, like when switching to a different src file. Passed `audio.currentTime`.

## onCanPlay {Function}
Called when enough of the file has been downloaded to be able to start playing.

#### onEnded {Function}
Called when playback has finished to the end of the file. Passed `audio.currentTime`.

#### onError {Function}
Called when the audio tag encounters an error.

#### onListened {Function}
Called every `listenInterval` milliseconds during playback.  Passed `audio.currentTime`.

#### onPause {Function}
Called when the user pauses playback. Passed `audio.currentTime`.

#### onPlay {Function}
Called when the user taps play.  Passed `audio.currentTime`.

#### onSeeked {Function}
Called when the user drags the time indicator to a new time. Passed `audio.currentTime`.
