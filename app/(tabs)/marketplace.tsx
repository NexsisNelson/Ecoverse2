import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import NFTCard from '@/components/NFTCard';
import { Search, Filter } from 'lucide-react-native';

export default function MarketplaceScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    header: {
      padding: 16,
      backgroundColor: theme.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.background,
      borderRadius: 12,
      padding: 12,
    },
    searchInput: {
      flex: 1,
      marginLeft: 8,
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.text,
    },
    filterButton: {
      marginLeft: 12,
      padding: 12,
      backgroundColor: theme.background,
      borderRadius: 12,
    },
    content: {
      padding: 16,
    },
    sectionTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: theme.text,
      marginBottom: 16,
    },
  });

  const marketplaceNFTs = [
    {
      title: 'Digital Forest',
      description: 'An immersive digital art piece celebrating forest conservation',
      imageUrl: 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
      price: 180,
      environmentalImpact: 94,
      creator: {
        name: 'Maya Woods',
        imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      },
    },
    {
      title: 'Clean Energy Future',
      description: 'Artistic visualization of renewable energy solutions',
      imageUrl: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      price: 250,
      environmentalImpact: 96,
      creator: {
        name: 'David Sun',
        imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      },
    },
    {
      title: 'Coral Reef Protection',
      description: 'Digital artwork raising awareness about coral reef conservation',
      imageUrl: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg',
      price: 300,
      environmentalImpact: 92,
      creator: {
        name: 'Laura Ocean',
        imageUrl: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg',
      },
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Search size={20} color={theme.secondaryText} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search NFTs..."
            placeholderTextColor={theme.secondaryText}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable style={styles.filterButton}>
            <Filter size={20} color={theme.secondaryText} />
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Available NFTs</Text>
        {marketplaceNFTs.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </ScrollView>
    </View>
  );
}