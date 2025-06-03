import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Card from './Card';
import EnvironmentBadge from './EnvironmentBadge';
import { Users } from 'lucide-react-native';

type CreatorCardProps = {
  name: string;
  bio: string;
  imageUrl: string;
  followers: number;
  environmentalImpact: number;
  onPress?: () => void;
};

export default function CreatorCard({
  name,
  bio,
  imageUrl,
  followers,
  environmentalImpact,
  onPress,
}: CreatorCardProps) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    imageContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      overflow: 'hidden',
      marginRight: 16,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    info: {
      flex: 1,
    },
    name: {
      fontFamily: 'Inter-Bold',
      fontSize: 18,
      color: theme.text,
      marginBottom: 4,
    },
    bio: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: theme.secondaryText,
      marginBottom: 8,
    },
    stats: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    followers: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    followersText: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: theme.secondaryText,
      marginLeft: 4,
    },
  });

  return (
    <Card onPress={onPress}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio} numberOfLines={2}>
            {bio}
          </Text>
          <View style={styles.stats}>
            <View style={styles.followers}>
              <Users size={16} color={theme.secondaryText} />
              <Text style={styles.followersText}>{followers.toLocaleString()}</Text>
            </View>
            <EnvironmentBadge impact={environmentalImpact} size="small" />
          </View>
        </View>
      </View>
    </Card>
  );
}