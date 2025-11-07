import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';

export interface CourseCardProps {
  title: string;
  duration: string;
  price: number;
  onPress?: () => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, duration, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
      <Text style={styles.price}>R{price}</Text>
    </TouchableOpacity>
  );
};

export default CourseCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.blue,
  },
  duration: {
    color: '#666',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.green,
  },
});
