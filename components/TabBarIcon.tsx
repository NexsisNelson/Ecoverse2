import { View } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { LucideIcon } from 'lucide-react-native';

type TabBarIconProps = {
  icon: LucideIcon;
  color: string;
  size: number;
};

export default function TabBarIcon({ icon: Icon, color, size }: TabBarIconProps) {
  const { theme } = useTheme();
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: withTiming(color === theme.primary ? 1.1 : 1, { duration: 200 }) }
      ],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Icon color={color} size={size} />
    </Animated.View>
  );
}