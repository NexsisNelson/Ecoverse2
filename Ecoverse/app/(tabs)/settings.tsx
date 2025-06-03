import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Card from '@/components/Card';
import { Moon, Bell, Shield, Globe as Globe2, CircleHelp as HelpCircle, FileText, LogOut, ChevronRight } from 'lucide-react-native';

export default function SettingsScreen() {
  const { theme, isDark, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      padding: 16,
    },
    header: {
      marginBottom: 24,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 28,
      color: theme.text,
      marginBottom: 8,
    },
    subtitle: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.secondaryText,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: theme.secondaryText,
      marginBottom: 12,
      marginLeft: 4,
      textTransform: 'uppercase',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 20,
    },
    menuIcon: {
      marginRight: 16,
    },
    menuContent: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    menuText: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      color: theme.text,
    },
    menuDescription: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: theme.secondaryText,
      marginTop: 2,
    },
    dangerText: {
      color: theme.error,
    },
  });

  const preferences = [
    {
      icon: <Moon size={24} color={theme.primary} />,
      title: 'Dark Mode',
      component: <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: theme.border, true: theme.primary }}
        thumbColor={theme.card}
      />,
    },
    {
      icon: <Bell size={24} color={theme.secondary} />,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      showChevron: true,
    },
  ];

  const security = [
    {
      icon: <Shield size={24} color={theme.accent} />,
      title: 'Privacy & Security',
      description: 'Manage your account security settings',
      showChevron: true,
    },
    {
      icon: <Globe2 size={24} color={theme.success} />,
      title: 'Language',
      description: 'English (US)',
      showChevron: true,
    },
  ];

  const support = [
    {
      icon: <HelpCircle size={24} color={theme.primary} />,
      title: 'Help & Support',
      showChevron: true,
    },
    {
      icon: <FileText size={24} color={theme.secondary} />,
      title: 'Terms of Service',
      showChevron: true,
    },
  ];

  const MenuItem = ({ icon, title, description, showChevron, component, danger }) => (
    <Card>
      <TouchableOpacity style={styles.menuItem} disabled={!showChevron && !component}>
        <View style={styles.menuIcon}>{icon}</View>
        <View style={styles.menuContent}>
          <View>
            <Text style={[styles.menuText, danger && styles.dangerText]}>{title}</Text>
            {description && <Text style={styles.menuDescription}>{description}</Text>}
          </View>
          {component || (showChevron && <ChevronRight size={20} color={theme.secondaryText} />)}
        </View>
      </TouchableOpacity>
    </Card>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Customize your app experience</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          {preferences.map((item, index) => (
            <MenuItem key={`pref-${index}`} {...item} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          {security.map((item, index) => (
            <MenuItem key={`security-${index}`} {...item} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          {support.map((item, index) => (
            <MenuItem key={`support-${index}`} {...item} />
          ))}
        </View>

        <View style={styles.section}>
          <MenuItem
            icon={<LogOut size={24} color={theme.error} />}
            title="Sign Out"
            danger
          />
        </View>
      </View>
    </ScrollView>
  );
}