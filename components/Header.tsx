import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

interface HeaderProps {
  title?: string;
  showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showLogo = true }) => {
  return (
    <View style={styles.container}>
      {showLogo && (
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      )}
      {title && <Text style={styles.title}>{title}</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.blue,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
