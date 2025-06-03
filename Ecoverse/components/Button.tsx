import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Animated, { FadeIn } from 'react-native-reanimated';

type ButtonProps = {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
};

export default function Button({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  style,
  textStyle,
  icon,
}: ButtonProps) {
  const { theme } = useTheme();

  const getBackgroundColor = () => {
    if (disabled) return theme.disabled;
    switch (variant) {
      case 'primary':
        return theme.primary;
      case 'secondary':
        return theme.secondary;
      case 'outline':
        return 'transparent';
      default:
        return theme.primary;
    }
  };

  const getBorderColor = () => {
    if (disabled) return theme.disabled;
    switch (variant) {
      case 'outline':
        return theme.primary;
      default:
        return 'transparent';
    }
  };

  const getTextColor = () => {
    if (disabled) return theme.secondaryText;
    switch (variant) {
      case 'outline':
        return theme.primary;
      default:
        return theme.card;
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'small':
        return { paddingVertical: 8, paddingHorizontal: 16 };
      case 'large':
        return { paddingVertical: 16, paddingHorizontal: 32 };
      default:
        return { paddingVertical: 12, paddingHorizontal: 24 };
    }
  };

  const styles = StyleSheet.create({
    button: {
      borderRadius: 12,
      backgroundColor: getBackgroundColor(),
      borderWidth: variant === 'outline' ? 2 : 0,
      borderColor: getBorderColor(),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      ...getPadding(),
    },
    text: {
      color: getTextColor(),
      fontSize: size === 'small' ? 14 : size === 'large' ? 18 : 16,
      fontFamily: 'Inter-Medium',
      textAlign: 'center',
      marginLeft: icon ? 8 : 0,
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.button, style]}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Animated.View
          entering={FadeIn}
          style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icon}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </Animated.View>
      )}
    </TouchableOpacity>
  );
}