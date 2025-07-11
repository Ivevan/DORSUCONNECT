import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Platform, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import User_NavBar from '../navigation/User_NavBar';

const Chat = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#222526"
        barStyle="light-content"
      />
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoPlaceholder}>
            {/* Logo will be placed here */}
          </View>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>DOrSU Connect</Text>
          <Text style={styles.subtitle}>DOrSU AI Chat</Text>
        </View>
      </View>

      <View style={styles.chatContainer}>
        <View style={styles.aiInfoContainer}>
          <View style={styles.aiIconContainer}>
            <Text style={styles.aiIcon}>X</Text>
          </View>
          <Text style={styles.aiTitle}>Ask DOrSU AI anything</Text>
          <Text style={styles.aiDescription}>Messages are limited to 24 hours and may be inaccurate or inappropriate.</Text>
        </View>

        <ScrollView style={styles.suggestedQuestionsContainer}>
          <TouchableOpacity style={styles.questionButton}>
            <Text style={styles.questionText}>How do I apply for a scholarship?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionButton}>
            <Text style={styles.questionText}>Where is the library located?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionButton}>
            <Text style={styles.questionText}>What's the enrollment Schedule?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionButton}>
            <Text style={styles.questionText}>How do I access the student portal?</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Message"
            value={message}
            onChangeText={setMessage}
            multiline
          />
          <TouchableOpacity style={styles.sendButton}>
            <Ionicons name="send" size={24} color="#222526" />
          </TouchableOpacity>
        </View>
      </View>

      <User_NavBar 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F0E9',
  },
  statusBar: {
    backgroundColor: '#222526',
    height: Platform.OS === 'android' ? (StatusBar.currentHeight ? StatusBar.currentHeight - 10 : 0) : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 10,
    backgroundColor: '#222526',
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  logoContainer: {
    marginRight: 12,
    justifyContent: 'center',
  },
  logoPlaceholder: {
    width: 32,
    height: 32,
    backgroundColor: '#F2F0E9',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 4,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  aiInfoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  aiIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#222526',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  aiIcon: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
  aiTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222526',
    marginBottom: 8,
  },
  aiDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  suggestedQuestionsContainer: {
    flex: 1,
    marginBottom: 16,
  },
  questionButton: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  questionText: {
    fontSize: 14,
    color: '#222526',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 8,
    marginBottom: 70,
  },
  messageInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: '#222526',
    maxHeight: 100,
  },
  sendButton: {
    padding: 8,
  },
});

export default Chat; 