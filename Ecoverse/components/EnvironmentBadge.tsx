import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Leaf } from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeIn } from 'react-native-reanimated';

type EnvironmentBadgeProps = {
  impact: number; // 0-100
  size?: 'small' | 'medium' | 'large';
};

export default function EnvironmentBadge({ impact, size = 'medium' }: EnvironmentBadgeProps) {
  const { theme } = useTheme();

  const getSize = () => {
    switch (size) {
      case 'small':
        return { iconSize: 14, fontSize: 12, padding: 6 };
      case 'large':
        return { iconSize: 24, fontSize: 16, padding: 12 };
      default:
        return { iconSize: 18, fontSize: 14, padding: 8 };
    }
  };

  const getColor = () => {
    if (impact >= 80) return theme.success;
    if (impact >= 50) return theme.primary;
    if (impact >= 30) return theme.warning;
    return theme.error;
  };

  const { iconSize, fontSize, padding } = getSize();

  const styles = StyleSheet.create({
    badge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: `${getColor()}20`,
      borderRadius: padding * 2,
      padding: padding,
    },
    text: {
      color: getColor(),
      fontSize: fontSize,
      fontFamily: 'Inter-Medium',
      marginLeft: padding / 2,
    },
  });

  return (
    <Animated.View entering={FadeIn} style={styles.badge}>
      <Leaf size={iconSize} color={getColor()} />
      <Text style={styles.text}>{impact}% Green</Text>
    </Animated.View>
  );
}