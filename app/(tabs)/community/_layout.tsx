import { Stack } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

export default function CommunityLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.card,
        },
        headerTitleStyle: {
          fontFamily: 'Inter-Bold',
          color: theme.text,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Community',
        }}
      />
      <Stack.Screen
        name="events"
        options={{
          title: 'Events',
        }}
      />
      <Stack.Screen
        name="leaderboard"
        options={{
          title: 'Impact Leaderboard',
        }}
      />
    </Stack>
  );
}