import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // ✅ Official Expo-supported picker

const months = [
  'January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'));
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1899 }, (_, i) => String(1900 + i));

const AgeScreen = (props) => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <View style={styles.container}>
      {/* Back arrow */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backSymbol}>←</Text>
      </TouchableOpacity>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      {/* Header */}
      <Text style={styles.title}>When were you{'\n'}born?</Text>
      <Text style={styles.subtitle}>
        This will be taken into account when{'\n'}
        calculating your daily nutrition goals.
      </Text>

      {/* Pickers */}
      <View style={styles.pickerRow}>
        {/* Month Picker */}
        <View style={styles.pickerColumn}>
          <Picker
            selectedValue={selectedMonth}
            onValueChange={(value) => setSelectedMonth(value)}
            itemStyle={styles.pickerItem}
            style={styles.picker}
          >
            {months.map((month) => (
              <Picker.Item label={month} value={month} key={month} />
            ))}
          </Picker>
        </View>

        {/* Day Picker */}
        <View style={styles.pickerColumn}>
          <Picker
            selectedValue={selectedDay}
            onValueChange={(value) => setSelectedDay(value)}
            itemStyle={styles.pickerItem}
            style={styles.picker}
          >
            {days.map((day) => (
              <Picker.Item label={day} value={day} key={day} />
            ))}
          </Picker>
        </View>

        {/* Year Picker */}
        <View style={styles.pickerColumn}>
          <Picker
            selectedValue={selectedYear}
            onValueChange={(value) => setSelectedYear(value)}
            itemStyle={styles.pickerItem}
            style={styles.picker}
          >
            {years.map((year) => (
              <Picker.Item label={year} value={year} key={year} />
            ))}
          </Picker>
        </View>
      </View>

      {/* Continue button */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => props.onContinue?.({ month: selectedMonth, day: selectedDay, year: selectedYear })}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backSymbol: {
    fontSize: 24,
    color: '#000',
  },
  progressBar: {
    height: 2,
    backgroundColor: '#EDEDED',
    borderRadius: 1,
    marginTop: 20,
    marginBottom: 40,
  },
  progressFill: {
    width: '25%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#6F6F6F',
    marginBottom: 40,
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 100,
  },
  pickerColumn: {
    flex: 1,
    alignItems: 'center',
  },
  picker: {
    width: 100,
    height: 150,
  },
  pickerItem: {
    fontSize: 18,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#0E0E0E',
    borderRadius: 40,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});


