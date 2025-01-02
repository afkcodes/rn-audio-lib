import { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { PlayerModule } = NativeModules;
const playerEmitter = new NativeEventEmitter(PlayerModule);

const usePlayerProgress = (): number => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const progressSubscription = playerEmitter.addListener(
      'playbackProgress',
      (newProgress: number) => {
        setProgress(newProgress);
      }
    );

    return () => {
      progressSubscription.remove();
    };
  }, []);

  return progress;
};

export default usePlayerProgress;
