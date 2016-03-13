import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import ReactAudioPlayer from '../src/index.jsx';

describe('ReactAudioPlayer', function() {
  it('renders an audio element', function() {
    const instance = ReactTestUtils.renderIntoDocument(
      <ReactAudioPlayer />
    );

    const instanceEl = ReactDOM.findDOMNode(instance);

    expect(instanceEl.tagName).toBe('AUDIO');
  });
});
