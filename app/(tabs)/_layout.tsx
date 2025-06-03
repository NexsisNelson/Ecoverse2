import { Tabs } from 'expo-router';
import {
  Chrome as Home,
  User,
  CirclePlus as PlusCircle,
  ShoppingBag,
  Settings,
} from 'lucide-react-native';
import { useTheme } from '@/context/ThemeContext';
import TabBarIcon from '@/components/TabBarIcon';

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondaryText,
        tabBarStyle: {
          backgroundColor: theme.card,
          borderTopColor: theme.border,
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: theme.card,
        },
        headerTitleStyle: {
          fontFamily: 'Inter-Bold',
          color: theme.text,
        },
        headerShadowVisible: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon icon={Home} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Market',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon icon={ShoppingBag} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon icon={PlusCircle} color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon icon={Settings} color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}