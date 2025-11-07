import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Empowering the Nation</Text>

      <Text style={styles.paragraph}>
        Empowering the Nation is a Johannesburg-based organisation that provides
        skills training for domestic workers and gardeners. Our goal is to help
        individuals gain employable skills, achieve personal growth, and build
        sustainable livelihoods.
      </Text>

      <Text style={styles.paragraph}>
        This app was created as part of the Work-Integrated Learning (WIL)
        project. It allows users to view available courses, calculate training
        fees (including discounts and VAT), and contact our training centres.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.blue,
    marginBottom: 12,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.dark,
    marginBottom: 16,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: colors.green,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
