import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/colors';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Empowering the Nation</Text>
      <Text style={styles.subtitle}>
        Empowering domestic workers and gardeners through skills training and growth opportunities.
      </Text>

      <View style={styles.buttonContainer}>
        <Link href="/(tabs)/courses" asChild>
          <TouchableOpacity style={[styles.button, styles.primary]}>
            <Text style={styles.buttonText}>View Courses</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(tabs)/fees" asChild>
          <TouchableOpacity style={[styles.button, styles.primary]}>
            <Text style={styles.buttonText}>Calculate Fees</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue, // unified background with header/tabs
    padding: 24,
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  primary: {
    backgroundColor: colors.green,
  },
});
