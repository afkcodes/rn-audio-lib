import { useEffect, useState } from 'react';
import { NativeEventEmitter, NativeModules } from 'react-native';

const { RNEventEmitter } = NativeModules;
const playerEmitter = new NativeEventEmitter(RNEventEmitter);

const usePlayerProgress = (): number => {
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const progressSubscription = playerEmitter.addListener(
            'playbackProgress',
            (newProgress: number) => {
                console.log(newProgress);
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