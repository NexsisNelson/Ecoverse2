import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'expo-router';
import Button from '@/components/Button';
import { User, Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function SignupScreen() {
  const { theme } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    content: {
      padding: 24,
    },
    header: {
      marginBottom: 40,
      alignItems: 'center',
    },
    heroImage: {
      width: 240,
      height: 240,
      marginBottom: 24,
    },
    title: {
      fontFamily: 'Inter-Bold',
      fontSize: 32,
      color: theme.text,
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      color: theme.secondaryText,
      textAlign: 'center',
      marginBottom: 32,
    },
    inputContainer: {
      marginBottom: 16,
    },
    inputWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.card,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.border,
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      height: 50,
      color: theme.text,
      fontFamily: 'Inter-Regular',
      fontSize: 16,
      marginLeft: 12,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 24,
    },
    footerText: {
      color: theme.secondaryText,
      fontFamily: 'Inter-Regular',
      fontSize: 14,
    },
    loginLink: {
      marginLeft: 4,
      color: theme.primary,
      fontFamily: 'Inter-Medium',
    },
    errorText: {
      color: theme.error,
      fontFamily: 'Inter-Regular',
      fontSize: 14,
      textAlign: 'center',
      marginBottom: 16,
    },
    terms: {
      marginTop: 16,
      marginBottom: 24,
      textAlign: 'center',
      color: theme.secondaryText,
      fontFamily: 'Inter-Regular',
      fontSize: 14,
    },
    termsLink: {
      color: theme.primary,
      textDecorationLine: 'underline',
    },
  });

  const handleSignup = () => {
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Implement signup logic
  };

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg' }}
            style={styles.heroImage}
          />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Join our community of eco-conscious creators
          </Text>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <User size={20} color={theme.secondaryText} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor={theme.secondaryText}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Mail size={20} color={theme.secondaryText} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={theme.secondaryText}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Lock size={20} color={theme.secondaryText} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor={theme.secondaryText}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <Text style={styles.terms}>
          By signing up, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text>
          {' '}and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>

        <Button
          title="Create Account"
          size="large"
          onPress={handleSignup}
          icon={<ArrowRight size={20} color={theme.card} />}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}