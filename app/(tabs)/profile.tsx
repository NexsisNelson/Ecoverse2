import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Button from '@/components/Button';
import Card from '@/components/Card';
import NFTCard from '@/components/NFTCard';
import EnvironmentBadge from '@/components/EnvironmentBadge';
import { Settings, Users, Wallet, TreePine } from 'lucide-react-native';

export default function ProfileScreen() {
  const { theme, toggleTheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      padding: 16,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    settingsButton: {
      position: 'absolute',
      right: 16,
      top: 16,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 16,
    },
    name: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: theme.text,
      marginBottom: 8,
    },
    bio: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.secondaryText,
      textAlign: 'center',
      marginBottom: 16,
      paddingHorizontal: 32,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 16,
    },
    stat: {
      alignItems: 'center',
    },
    statValue: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: theme.text,
      marginTop: 4,
    },
    statLabel: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: theme.secondaryText,
    },
    content: {
      padding: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: theme.text,
      marginBottom: 16,
    },
  });

  const userStats = [
    {
      icon: <Users size={24} color={theme.primary} />,
      value: '2.5K',
      label: 'Followers',
    },
    {
      icon: <Wallet size={24} color={theme.secondary} />,
      value: '45',
      label: 'NFTs Created',
    },
    {
      icon: <TreePine size={24} color={theme.success} />,
      value: '156',
      label: 'Trees Saved',
    },
  ];

  const userNFTs = [
    {
      title: 'Sustainable Cities',
      description: 'A vision of future eco-friendly urban development',
      imageUrl: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      price: 200,
      environmentalImpact: 93,
      creator: {
        name: 'John Green',
        imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.settingsButton} onPress={toggleTheme}>
          <Settings size={24} color={theme.text} />
        </Pressable>
        
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>John Green</Text>
        <Text style={styles.bio}>
          Digital artist and environmental advocate creating sustainable NFT art
        </Text>
        <EnvironmentBadge impact={95} size="large" />
        
        <View style={styles.statsContainer}>
          {userStats.map((stat, index) => (
            <View key={index} style={styles.stat}>
              {stat.icon}
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
        
        <Button
          title="Edit Profile"
          variant="outline"
          style={{ marginTop: 16 }}
          onPress={() => {}}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My NFTs</Text>
          {userNFTs.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}