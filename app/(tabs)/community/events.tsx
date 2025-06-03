import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Calendar, MapPin, Users, TreePine } from 'lucide-react-native';

export default function EventsScreen() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      padding: 16,
    },
    eventCard: {
      marginBottom: 16,
    },
    eventImage: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 16,
    },
    eventTitle: {
      fontFamily: 'Inter-Bold',
      fontSize: 20,
      color: theme.text,
      marginBottom: 8,
    },
    eventDescription: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.secondaryText,
      marginBottom: 16,
    },
    detailsContainer: {
      marginBottom: 16,
    },
    detailRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    detailText: {
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      color: theme.text,
      marginLeft: 8,
    },
    impactContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    impactText: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: theme.success,
      marginLeft: 8,
    },
  });

  const events = [
    {
      title: 'Digital Art for Conservation',
      description: 'Join us for a virtual workshop on creating NFT art that raises awareness about wildlife conservation.',
      image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
      date: 'March 15, 2024',
      location: 'Virtual Event',
      attendees: 156,
      impact: '250 Trees',
    },
    {
      title: 'EcoVerse Creator Summit',
      description: 'Connect with fellow creators and learn about the latest in sustainable NFT creation.',
      image: 'https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg',
      date: 'April 2, 2024',
      location: 'San Francisco, CA',
      attendees: 324,
      impact: '500 Trees',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {events.map((event, index) => (
          <Card key={index} style={styles.eventCard}>
            <Image source={{ uri: event.image }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventDescription}>{event.description}</Text>
            
            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Calendar size={20} color={theme.primary} />
                <Text style={styles.detailText}>{event.date}</Text>
              </View>
              <View style={styles.detailRow}>
                <MapPin size={20} color={theme.secondary} />
                <Text style={styles.detailText}>{event.location}</Text>
              </View>
              <View style={styles.detailRow}>
                <Users size={20} color={theme.accent} />
                <Text style={styles.detailText}>{event.attendees} Attending</Text>
              </View>
            </View>

            <View style={styles.impactContainer}>
              <TreePine size={20} color={theme.success} />
              <Text style={styles.impactText}>Projected Impact: {event.impact}</Text>
            </View>

            <Button
              title="Join Event"
              onPress={() => {}}
              variant="primary"
            />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}