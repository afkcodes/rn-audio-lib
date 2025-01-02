import { Text, View } from 'react-native';
import usePlayerProgress from './hooks/useProgress';

const Progress = () => {
  const progress = usePlayerProgress();

  return (
    <View>
      <Text style={{ fontSize: 16, color: 'white' }}>{progress / 1000}</Text>
    </View>
  );
};

export default Progress;
