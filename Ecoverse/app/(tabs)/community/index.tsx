import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Card from '@/components/Card';
import CreatorCard from '@/components/CreatorCard';
import { Users, Trophy, TreePine } from 'lucide-react-native';

export default function CommunityScreen() {
  const { theme } = useTheme();

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
      fontSize: 24,
      color: theme.text,
      marginBottom: 8,
    },
    subtitle: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.secondaryText,
      marginBottom: 16,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    statCard: {
      flex: 1,
      marginHorizontal: 4,
      padding: 16,
      alignItems: 'center',
    },
    statValue: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: theme.text,
      marginTop: 8,
    },
    statLabel: {
      fontFamily: 'Inter-Regular',
      fontSize: 12,
      color: theme.secondaryText,
      marginTop: 4,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: theme.text,
      marginBottom: 16,
    },
  });

  const communityStats = [
    {
      icon: <Users size={24} color={theme.primary} />,
      value: '15.2K',
      label: 'Members',
    },
    {
      icon: <Trophy size={24} color={theme.secondary} />,
      value: '2.5K',
      label: 'Creators',
    },
    {
      icon: <TreePine size={24} color={theme.success} />,
      value: '45.8K',
      label: 'Trees Saved',
    },
  ];

  const topCreators = [
    {
      name: 'Emma Nature',
      bio: 'Wildlife photographer and conservation advocate',
      imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      followers: 25600,
      environmentalImpact: 96,
    },
    {
      name: 'Michael Earth',
      bio: 'Environmental artist and sustainability educator',
      imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      followers: 18900,
      environmentalImpact: 94,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>EcoVerse Community</Text>
          <Text style={styles.subtitle}>
            Join creators and collectors making a positive environmental impact
          </Text>
        </View>

        <View style={styles.statsContainer}>
          {communityStats.map((stat, index) => (
            <Card key={index} style={styles.statCard}>
              {stat.icon}
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Card>
          ))}
        </View>

        <View>
          <Text style={styles.sectionTitle}>Top Creators</Text>
          {topCreators.map((creator, index) => (
            <CreatorCard key={index} {...creator} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}