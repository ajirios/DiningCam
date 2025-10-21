import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderScreen = (props) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      {/* Back arrow placeholder */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backSymbol}>←</Text>
      </TouchableOpacity>

      {/* Progress bar placeholder */}
      <View style={styles.progressBar} />

      <Text style={styles.title}>Choose your{'\n'}Gender</Text>
      <Text style={styles.subtitle}>This will be used to calibrate your custom plan.</Text>

      {/* Gender options */}
      <View style={styles.optionsContainer}>
        {['Female', 'Male', 'Other'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedGender === option && styles.optionButtonSelected,
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedGender === option && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          selectedGender ? styles.continueButtonEnabled : styles.continueButtonDisabled,
        ]}
        disabled={!selectedGender}
        onPress={() => {props.onContinue?.(selectedGender);props.navigation.navigate("AgeScreen")}}
      >
        <Text
          style={[
            styles.continueText,
            selectedGender ? styles.continueTextEnabled : styles.continueTextDisabled,
          ]}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenderScreen;

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
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#6F6F6F',
    marginBottom: 32,
  },
  optionsContainer: {
    marginBottom: 100,
  },
  optionButton: {
    borderRadius: 14,
    backgroundColor: '#F8F7F8',
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  optionButtonSelected: {
    backgroundColor: '#0E0E0E',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  optionTextSelected: {
    color: '#FFFFFF',
  },
  continueButton: {
    borderRadius: 40,
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueButtonEnabled: {
    backgroundColor: '#0E0E0E',
  },
  continueButtonDisabled: {
    backgroundColor: '#F0F0F0',
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
  },
  continueTextEnabled: {
    color: '#FFFFFF',
  },
  continueTextDisabled: {
    color: '#C0C0C0',
  },
});
