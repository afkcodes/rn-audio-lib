import RnAudioLib from './NativeRnAudioLib';

export function play() {
  console.log('Calling play');
  return RnAudioLib.play();
}

export function pause() {
  console.log('Calling pause');
  return RnAudioLib.pause();
}

export function setupQueue(mediaUrls: string[]) {
  return RnAudioLib.setupQueue(mediaUrls);
}