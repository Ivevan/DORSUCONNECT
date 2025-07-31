import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

interface BottomNavBarProps {
  onHomePress?: () => void;
  onChatPress?: () => void;
  onSettingsPress?: () => void;
  activeTab?: 'home' | 'chat' | 'settings';
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({
  onHomePress,
  onChatPress,
  onSettingsPress,
  activeTab = 'home',
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={onHomePress}>
        <MaterialIcons name="home" size={28} color={activeTab === 'home' ? '#333' : '#aaa'} />
        <Text style={[styles.label, activeTab === 'home' && styles.activeLabel]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={onChatPress}>
        <Ionicons name="chatbubbles-outline" size={28} color={activeTab === 'chat' ? '#333' : '#aaa'} />
        <Text style={[styles.label, activeTab === 'chat' && styles.activeLabel]}>AI Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={onSettingsPress}>
        <Ionicons name="settings-outline" size={28} color={activeTab === 'settings' ? '#333' : '#aaa'} />
        <Text style={[styles.label, activeTab === 'settings' && styles.activeLabel]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 8,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
  activeLabel: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default BottomNavBar; 