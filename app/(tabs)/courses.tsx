import { useRouter } from 'expo-router';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CourseCard from '../../components/CourseCard';
import { colors } from '../../constants/colors';
import { COURSES } from '../../utils/courseData';

export default function CoursesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={COURSES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard
            title={item.title}
            duration={item.duration}
            price={item.price}
            onPress={() => router.push(`/course/${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>Available Courses</Text>
            <Text style={styles.subtitle}>
              Explore our range of certified domestic and gardening courses below.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.blue, // unified with Home & Contact
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: colors.light,
    textAlign: 'center',
    marginBottom: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
