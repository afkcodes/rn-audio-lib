export type PlayBackState =
  | 'idle'
  | 'loading'
  | 'ready'
  | 'playing'
  | 'paused'
  | 'ended'
  | 'error';

export type PlaybackSpeed = 0.5 | 0.75 | 1.0 | 1.25 | 1.5 | 2.0;
export type MediaArtwork = { src: string; name?: string; sizes?: string };

export type PlayerError = { code: number; message: string };

export interface MediaTrack {
  id: string;
  title: string;
  source: string;
  artist: string;
  duration?: number;
  artwork?: MediaArtwork[];
  genre?: string;
  album?: string;
  comment?: string;
  year?: number | string;
}

export interface AudioState {
  playbackState: PlayBackState;
  duration: number | undefined;
  bufferedDuration: number;
  progress: number | undefined;
  volume: number;
  playbackRate: PlaybackSpeed;
  error: PlayerError;
  currentTrack: MediaTrack;
}
