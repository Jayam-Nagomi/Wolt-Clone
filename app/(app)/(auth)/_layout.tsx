// import { Stack } from '@/components/Stack';
import { Stack } from 'expo-router';
import { Colors } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import Transition from 'react-native-screen-transitions';

const Layout = () => {
  const router = useRouter();
  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }}/>
    </Stack>
  );
};
export default Layout;