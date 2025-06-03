import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { Link } from 'expo-router';
import Button from '@/components/Button';
import { Mail, Lock, ArrowRight } from 'lucide-react-native';

export default function LoginScreen() {
  const { theme } = useTheme();
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
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: 24,
    },
    forgotPasswordText: {
      color: theme.primary,
      fontFamily: 'Inter-Medium',
      fontSize: 14,
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
    signupLink: {
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
  });

  const handleLogin = () => {
    // Add login logic here
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Implement authentication
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
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue your eco-friendly journey
          </Text>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

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

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Button
          title="Sign In"
          size="large"
          onPress={handleLogin}
          icon={<ArrowRight size={20} color={theme.card} />}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}