import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import CreatorCard from '@/components/CreatorCard';
import NFTCard from '@/components/NFTCard';

export default function DiscoverScreen() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      padding: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: theme.text,
      marginBottom: 16,
    },
  });

  const featuredCreators = [
    {
      name: 'Sarah Green',
      bio: 'Digital artist focused on sustainable art and environmental awareness',
      imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      followers: 15420,
      environmentalImpact: 92,
    },
    {
      name: 'Alex Rivers',
      bio: 'Nature photographer and environmental activist',
      imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      followers: 8234,
      environmentalImpact: 88,
    },
  ];

  const trendingNFTs = [
    {
      title: 'Sustainable Future',
      description: 'A digital artwork representing harmony between technology and nature',
      imageUrl: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg',
      price: 150,
      environmentalImpact: 95,
      creator: {
        name: 'Sarah Green',
        imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      },
    },
    {
      title: 'Ocean Guardians',
      description: 'Photography series highlighting marine conservation efforts',
      imageUrl: 'https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg',
      price: 200,
      environmentalImpact: 90,
      creator: {
        name: 'Alex Rivers',
        imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Creators</Text>
          {featuredCreators.map((creator, index) => (
            <CreatorCard key={index} {...creator} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending NFTs</Text>
          {trendingNFTs.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}