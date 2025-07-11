import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface NavItemProps {
  icon: any;
  activeIcon: any;
  label: string;
  isActive: boolean;
  onPress: () => void;
}

interface UserNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavItem = ({ icon, activeIcon, label, isActive, onPress }: NavItemProps) => (
  <TouchableOpacity style={styles.navItem} onPress={onPress}>
    <Ionicons 
      name={isActive ? activeIcon : icon} 
      size={24} 
      color={isActive ? '#222526' : '#666'} 
    />
    <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const User_NavBar = ({ activeTab, onTabChange }: UserNavBarProps) => {
  const navigation = useNavigation();

  const handleNavigation = (tab: string) => {
    if (tab === 'home' && activeTab !== 'home') {
      navigation.goBack(); // This will return to the previous screen
    } else {
      onTabChange(tab);
    }
  };

  return (
    <View style={styles.bottomNav}>
      <NavItem
        icon="home-outline"
        activeIcon="home"
        label="Home"
        isActive={activeTab === 'home'}
        onPress={() => handleNavigation('home')}
      />
      <NavItem
        icon="chatbubble-outline"
        activeIcon="chatbubble"
        label="Chat"
        isActive={activeTab === 'chat'}
        onPress={() => handleNavigation('chat')}
      />
      <NavItem
        icon="settings-outline"
        activeIcon="settings"
        label="Settings"
        isActive={activeTab === 'settings'}
        onPress={() => handleNavigation('settings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    fontWeight: '500',
  },
  navLabelActive: {
    color: '#222526',
    fontWeight: '600',
  },
});

export default User_NavBar; 