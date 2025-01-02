import type { AudioState, MediaTrack } from '../types/player.types';

const defaultMediaTrack: MediaTrack = {
  artist: '',
  id: '',
  source: '',
  title: '',
};

export const LoopMode = {
  OFF: 'OFF',
  SINGLE: 'SINGLE',
  QUEUE: 'QUEUE',
} as const;

export const audioState: AudioState = {
  bufferedDuration: 0,
  duration: 0,
  error: {
    code: 0,
    message: '',
  },
  playbackRate: 1,
  playbackState: 'idle',
  progress: 0,
  volume: 0.5,
  currentTrack: defaultMediaTrack,
};
