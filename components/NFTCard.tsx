import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Card from './Card';
import EnvironmentBadge from './EnvironmentBadge';
import { Tag } from 'lucide-react-native';

type NFTCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  environmentalImpact: number;
  creator: {
    name: string;
    imageUrl: string;
  };
  onPress?: () => void;
};

export default function NFTCard({
  title,
  description,
  imageUrl,
  price,
  environmentalImpact,
  creator,
  onPress,
}: NFTCardProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: 12,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    content: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: theme.text,
      flex: 1,
      marginRight: 12,
    },
    description: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: theme.secondaryText,
      marginBottom: 12,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
    },
    price: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    priceText: {
      fontFamily: 'Inter-Bold',
      fontSize: 16,
      color: theme.text,
      marginLeft: 4,
    },
    creator: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    creatorImage: {
      width: 24,
      height: 24,
      borderRadius: 12,
      marginRight: 8,
    },
    creatorName: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: theme.secondaryText,
    },
  });

  return (
    <Card onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <EnvironmentBadge impact={environmentalImpact} size="small" />
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <View style={styles.footer}>
          <View style={styles.price}>
            <Tag size={16} color={theme.text} />
            <Text style={styles.priceText}>{price.toLocaleString()} ALGO</Text>
          </View>
          <View style={styles.creator}>
            <Image source={{ uri: creator.imageUrl }} style={styles.creatorImage} />
            <Text style={styles.creatorName}>{creator.name}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}