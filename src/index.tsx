import RnAudioLib from './NativeRnAudioLib';

export function play() {
  console.log('Calling play');
  return RnAudioLib.play();
}

export function stop() {
  return RnAudioLib.stop();
}

export function pause() {
  return RnAudioLib.pause();
}

export function setupQueue(mediaUrls: string[]) {
  return RnAudioLib.setupQueue(mediaUrls);
}

export function listenProgress() {
  return RnAudioLib.listenProgress();
}

export function listenState() {
  return RnAudioLib.listenState();
}
