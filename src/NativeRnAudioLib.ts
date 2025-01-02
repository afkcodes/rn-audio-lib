import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  play(): void;
  pause(): void;
  setupQueue(mediaUrls: string[]): void;
  stop(): void;
  listenState(): void;
  listenProgress(): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RnAudioLib');
