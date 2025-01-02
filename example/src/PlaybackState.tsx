import { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules, Text, View } from 'react-native';

const { PlayerModule } = NativeModules;
const playerEmitter = new NativeEventEmitter(PlayerModule);

const PlaybackState = () => {
  const [playbackState, setPlaybackState] = useState();

  useEffect(() => {
    playerEmitter.addListener('playbackState', (state) => {
      setPlaybackState(state);
    });
  });
  return (
    <View>
      <Text style={{ fontSize: 16, color: 'white' }}>{playbackState}</Text>
    </View>
  );
};

export default PlaybackState;
