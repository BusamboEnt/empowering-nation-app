import { useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { COURSES } from '../../utils/courseData';

export default function CourseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const course = COURSES.find((c) => c.id === id);

  // Update the header dynamically
  useEffect(() => {
    navigation.setOptions({
      title: course ? course.title : 'Course Detail', // header title
      headerBackTitle: 'Back', // back button text
      headerTintColor: colors.white, // back arrow & text color
      headerStyle: {
        backgroundColor: colors.blue, // match app theme
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation, course]);

  if (!course) {
    return (
      <SafeAreaView style={[styles.safeArea, { alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={styles.notFoundText}>Course not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.meta}>Duration: {course.duration}</Text>
          <Text style={styles.meta}>Cost: R{course.price}</Text>

          <Text style={styles.sectionTitle}>Purpose</Text>
          <Text style={styles.body}>{course.purpose}</Text>

          <Text style={styles.sectionTitle}>Course Content</Text>
          {course.content.map((topic, index) => (
            <Text key={index} style={styles.listItem}>
              • {topic}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// styles remain the same
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  scrollContainer: {
    padding: 20,
    flexGrow: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.blue,
    marginBottom: 10,
    textAlign: 'center',
  },
  meta: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.green,
    marginTop: 16,
    marginBottom: 6,
  },
  body: {
    lineHeight: 22,
    color: colors.dark,
  },
  listItem: {
    marginLeft: 10,
    marginTop: 4,
    color: colors.dark,
  },
  notFoundText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});
