import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '../../constants/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blue,
          elevation: 0, // removes Android shadow
          shadowOpacity: 0, // removes iOS shadow
          borderBottomWidth: 0, // removes border line under header
        },
        headerTintColor: colors.white,
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: colors.blue,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60, // optional: taller tabs for better tap area
        },
        tabBarActiveTintColor: '#FFA726', // active tab color
        tabBarInactiveTintColor: '#E0E0E0',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          title: 'Courses',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'book' : 'book-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fees"
        options={{
          title: 'Fees',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'calculator' : 'calculator-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? 'call' : 'call-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
