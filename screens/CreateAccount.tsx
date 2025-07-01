import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo and Title Section */}
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <View style={styles.logoPlaceholder}>
              {/* Logo will be placed here */}
            </View>
            <Text style={styles.title}>DOrSU Connect</Text>
            <Text style={styles.subtitle}>Your Academic AI Assistant</Text>
          </View>

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
    </SafeAreaView>
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
  },
  topSection: {
    marginTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoPlaceholder: {
    width: width * 0.2,
    height: width * 0.2,
    backgroundColor: '#E8E8E8',
    borderRadius: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 4,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 1,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  signInText: {
    fontSize: 17,
    color: '#666',
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: 24,
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