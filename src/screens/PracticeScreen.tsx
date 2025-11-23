import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList} from 'react-native';

const SUBJECTS = ['English', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];

export default function PracticeScreen() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Practice Mode</Text>
        <Text style={styles.subtitle}>Study at your own pace</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Select a Subject</Text>
        <View style={styles.grid}>
          {SUBJECTS.map((subject) => (
            <TouchableOpacity
              key={subject}
              style={[
                styles.subjectCard,
                selectedSubject === subject && styles.selectedCard,
              ]}
              onPress={() => setSelectedSubject(subject)}>
              <Text
                style={[
                  styles.subjectText,
                  selectedSubject === subject && styles.selectedText,
                ]}>
                {subject}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedSubject && (
          <View style={styles.optionsSection}>
            <Text style={styles.sectionTitle}>Select Mode</Text>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Timed Practice (30 mins)</Text>
              <Text style={styles.optionSubtext}>15 questions with timer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Free Practice</Text>
              <Text style={styles.optionSubtext}>Unlimited questions, no timer</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#3b82f6',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#dbeafe',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1f2937',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  subjectCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    alignItems: 'center',
  },
  selectedCard: {
    borderColor: '#3b82f6',
    backgroundColor: '#eff6ff',
  },
  subjectText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  selectedText: {
    color: '#3b82f6',
  },
  optionsSection: {
    marginTop: 20,
  },
  option: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
  },
  optionSubtext: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 5,
  },
});
