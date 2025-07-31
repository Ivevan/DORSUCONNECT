import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Platform, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  CreateAccount: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateAccount'>;

const { width } = Dimensions.get('window');

const CreateAccount = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleClose = () => {
    navigation.navigate('GetStarted');
  };

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
        {/* Logo and Title Section */}
        <View style={styles.topSection}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>Create Account</Text>
            <Text style={styles.signInText}>Sign up to get started</Text>
          </View>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#666"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
          </View>

          <TouchableOpacity 
            style={styles.signInButton}
            onPress={() => navigation.navigate('GetStarted')}
          >
            <Text style={styles.signInButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an account? </Text>
            <TouchableOpacity 
              onPress={() => navigation.navigate('SignIn')}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.signUpLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
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
    paddingBottom: Platform.OS === 'android' ? 60 : 80,
  },
  topSection: {
    marginTop: Platform.OS === 'android' ? 40 : 60,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: 0,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  signInText: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    fontWeight: '500',
  },
  signInButton: {
    backgroundColor: '#333333',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    color: '#666',
    fontSize: 15,
    letterSpacing: 0.2,
  },
  signUpLink: {
    color: '#333',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
});

export default CreateAccount; 