import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { COURSES, calculateTotal } from '../../utils/courseData';

export default function FeesScreen() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [selected, setSelected] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setSelected((p) => ({ ...p, [id]: !p[id] }));
  };

  const onCalculate = () => {
    const { name, phone, email } = form;
    if (!name || !phone || !email) return Alert.alert('Please fill in all fields.');
    const chosen = Object.keys(selected).filter((k) => selected[k]);
    if (!chosen.length) return Alert.alert('Select at least one course.');

    const total = calculateTotal(chosen);
    Alert.alert(
      'Fee Summary',
      `Subtotal: R${total.subTotal.toFixed(2)}\nDiscount: ${total.discountRate * 100}%\nVAT: R${total.vat.toFixed(2)}\n\nTotal: R${total.total.toFixed(2)}`
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.heading}>Fee Calculator</Text>

          <TextInput
            placeholder="Name"
            value={form.name}
            onChangeText={(t) => setForm({ ...form, name: t })}
            style={styles.input}
            placeholderTextColor={colors.gray}
          />
          <TextInput
            placeholder="Phone"
            value={form.phone}
            onChangeText={(t) => setForm({ ...form, phone: t })}
            style={styles.input}
            placeholderTextColor={colors.gray}
          />
          <TextInput
            placeholder="Email"
            value={form.email}
            onChangeText={(t) => setForm({ ...form, email: t })}
            style={styles.input}
            placeholderTextColor={colors.gray}
          />

          <Text style={styles.subheading}>Select Courses</Text>
          {COURSES.map((c) => (
            <TouchableOpacity key={c.id} onPress={() => toggle(c.id)} style={styles.row}>
              <Text style={styles.courseTitle}>{c.title}</Text>
              <Text>{selected[c.id] ? '✅' : '⬜'}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity onPress={onCalculate} style={styles.btn}>
            <Text style={styles.btnText}>Calculate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.blue, // unified background
  },
  scrollContainer: {
    padding: 20,
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
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.blue,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 10,
    padding: 12,
    backgroundColor: colors.white,
    marginBottom: 10,
    fontSize: 15,
    color: colors.dark,
  },
  subheading: {
    fontWeight: '600',
    color: colors.green,
    marginTop: 12,
    marginBottom: 8,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 12,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    elevation: 2,
  },
  courseTitle: {
    color: colors.dark,
    fontSize: 15,
  },
  btn: {
    backgroundColor: colors.green,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 18,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  btnText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
});
