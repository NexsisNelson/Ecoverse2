import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import Button from '@/components/Button';
import { Upload, Image as ImageIcon } from 'lucide-react-native';
import EnvironmentBadge from '@/components/EnvironmentBadge';

export default function CreateScreen() {
  const { theme } = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    content: {
      padding: 16,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 24,
      color: theme.text,
      marginBottom: 24,
    },
    uploadSection: {
      backgroundColor: theme.card,
      borderRadius: 16,
      padding: 24,
      alignItems: 'center',
      marginBottom: 24,
    },
    uploadIcon: {
      marginBottom: 16,
    },
    uploadText: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      color: theme.secondaryText,
      marginBottom: 16,
    },
    previewImage: {
      width: '100%',
      height: 200,
      borderRadius: 12,
      marginBottom: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      color: theme.secondaryText,
      marginBottom: 8,
    },
    input: {
      backgroundColor: theme.card,
      borderRadius: 12,
      padding: 16,
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.text,
      borderWidth: 1,
      borderColor: theme.border,
    },
    textArea: {
      height: 120,
      textAlignVertical: 'top',
    },
    impactContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 24,
    },
    impactText: {
      fontFamily: 'Inter-Medium',
      fontSize: 16,
      color: theme.text,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create New NFT</Text>

        <View style={styles.uploadSection}>
          <Upload
            size={48}
            color={theme.primary}
            style={styles.uploadIcon}
          />
          <Text style={styles.uploadText}>Upload your artwork</Text>
          <Button
            title="Choose File"
            variant="outline"
            icon={<ImageIcon size={20} color={theme.primary} />}
            onPress={() => {}}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter NFT title"
            placeholderTextColor={theme.secondaryText}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Describe your NFT"
            placeholderTextColor={theme.secondaryText}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Price (ALGO)</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Enter price in ALGO"
            placeholderTextColor={theme.secondaryText}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.impactContainer}>
          <Text style={styles.impactText}>Environmental Impact</Text>
          <EnvironmentBadge impact={95} />
        </View>

        <Button
          title="Create NFT"
          size="large"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
}