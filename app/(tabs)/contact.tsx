import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../constants/colors';

export default function ContactScreen() {
  const openEmail = () => Linking.openURL('mailto:info@empoweringnation.org.za');
  const openPhone = () => Linking.openURL('tel:+27111234567');
  const openMap = () =>
    Linking.openURL(
      'https://www.google.com/maps/place/Empowering+the+Nation,+Johannesburg'
    );

  const openSocial = (url: string) => Linking.openURL(url);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>
          Get in touch with Empowering the Nation. We’re here to help you register for courses,
          ask questions, or visit our training centre.
        </Text>

        {/* Contact Details Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Contact Details</Text>

          <TouchableOpacity style={styles.row} onPress={openPhone}>
            <Ionicons name="call-outline" size={22} color={colors.green} />
            <Text style={styles.linkText}>+27 11 123 4567</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.row} onPress={openEmail}>
            <Ionicons name="mail-outline" size={22} color={colors.green} />
            <Text style={styles.linkText}>info@empoweringnation.org.za</Text>
          </TouchableOpacity>
        </View>

        {/* Training Centre Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Training Centre</Text>
          <Text style={styles.address}>
            45 Vilakazi Street, Soweto, Johannesburg, South Africa
          </Text>

          <TouchableOpacity style={styles.mapButton} onPress={openMap}>
            <Ionicons name="location-outline" size={20} color={colors.white} />
            <Text style={styles.mapButtonText}>Open in Google Maps</Text>
          </TouchableOpacity>
        </View>

        {/* Social Media Card */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Follow Us</Text>
          <View style={styles.socialRow}>
            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openSocial('https://www.facebook.com/EmpoweringTheNation')}>
              <FontAwesome name="facebook" size={24} color={colors.blue} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openSocial('https://www.instagram.com/EmpoweringTheNation')}>
              <FontAwesome name="instagram" size={24} color={colors.orange} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openSocial('https://wa.me/27677758475')}>
              <FontAwesome name="whatsapp" size={24} color={colors.green} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openSocial('https://www.linkedin.com/company/empowering-the-nation')}>
              <FontAwesome name="linkedin" size={24} color={colors.dark} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} Empowering the Nation • All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#E3F2FD',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.green,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkText: {
    marginLeft: 8,
    fontSize: 15,
    color: colors.dark,
  },
  address: {
    color: colors.dark,
    marginBottom: 12,
    lineHeight: 20,
  },
  mapButton: {
    flexDirection: 'row',
    backgroundColor: colors.green,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  mapButtonText: {
    color: colors.white,
    fontWeight: '600',
    marginLeft: 6,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcon: {
    padding: 10,
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#E3F2FD',
    fontSize: 12,
  },
});
