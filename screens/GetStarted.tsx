import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  CreateAccount: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;

const { width, height } = Dimensions.get('window');

const GetStarted = () => {
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }]}
    >
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.topSection}>
          <View style={styles.logoPlaceholder} />
          <Text style={styles.title}>DOrSU CONNECT</Text>
          <Text style={styles.subtitle}>Your Academic AI Assistant</Text>
          <Text style={styles.aiText}>AI Powered</Text>
        </View>

        {/* Bottom Section with Buttons and University Name */}
        <View style={styles.bottomSection}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.emailButton} onPress={() => {}}>
              <MaterialCommunityIcons name="email-outline" size={24} color="black" style={styles.buttonIcon} />
              <Text style={styles.emailButtonText}>Continue with Email</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.darkButton} 
              onPress={() => navigation.navigate('CreateAccount')}
            >
              <MaterialIcons name="person-add-alt" size={24} color="white" style={styles.buttonIcon} />
              <Text style={styles.darkButtonText}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.darkButton} 
              onPress={() => navigation.navigate('SignIn')}
            >
              <MaterialIcons name="login" size={24} color="white" style={styles.buttonIcon} />
              <Text style={styles.darkButtonText}>Log in</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.universityText}>Davao Oriental State University</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F0E9',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 8 : 44,
    paddingBottom: Platform.OS === 'android' ? 20 : 34,
  },
  topSection: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: -height * 0.1, // Adjust for better centering
  },
  logoPlaceholder: {
    width: width * 0.35,
    height: width * 0.35,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 4,
  },
  aiText: {
    fontSize: 14,
    color: '#000000',
  },
  bottomSection: {
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
    marginBottom: 24,
  },
  emailButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  darkButton: {
    backgroundColor: '#222526',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  darkButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  buttonIcon: {
    marginRight: 4,
  },
  universityText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
  },
});

export default GetStarted; 