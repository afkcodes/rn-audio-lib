import { Button, StyleSheet, Text, View } from 'react-native';
import {
  listenProgress,
  listenState,
  pause,
  play,
  setupQueue,
} from 'rn-audio-lib';

import { useEffect } from 'react';
import PlaybackState from './PlaybackState';
import Progress from './Progress';

export default function App() {
  useEffect(() => {
    setupQueue([
      'https://aac.saavncdn.com/180/0deb412f19e37e4862b423cc6281845e_160.mp4',
    ]);
  }, []);
  const onClick = () => {
    play();
    listenState();
    listenProgress();
  };
  const pauseClick = () => {
    pause();
  };
  return (
    <View style={styles.container}>
      <Progress />
      <PlaybackState />
      <Text style={{ color: 'white' }}>Result: asdasd</Text>
      <Button title="Play" onPress={onClick} />
      <Button title="Pause" onPress={pauseClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
