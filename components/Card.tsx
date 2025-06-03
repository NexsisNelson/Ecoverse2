import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

type CardProps = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
};

export default function Card({
  title,
  subtitle,
  children,
  onPress,
  style,
  titleStyle,
  subtitleStyle,
}: CardProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.card,
      borderRadius: 16,
      padding: 16,
      marginVertical: 8,
      shadowColor: theme.text,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 2,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: theme.text,
      marginBottom: 4,
    },
    subtitle: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: theme.secondaryText,
      marginBottom: 12,
    },
  });

  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <CardContainer
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
      {subtitle && <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>}
      {children}
    </CardContainer>
  );
}