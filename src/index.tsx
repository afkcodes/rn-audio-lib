import RnAudioLib from './NativeRnAudioLib';

export function multiply(a: number, b: number): number {
  return RnAudioLib.multiply(a, b);
}
