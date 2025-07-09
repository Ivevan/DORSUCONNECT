import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, Platform, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import User_NavBar from '../navigation/User_NavBar';

type RootStackParamList = {
  GetStarted: undefined;
  SchoolUpdates: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SchoolUpdates'>;

const { width } = Dimensions.get('window');

type FilterType = 'All' | 'Announcement' | 'Event' | 'Academic';

interface UpdateCardProps {
  tags: string[];
  title: string;
  description: string;
  date: string;
  id: string; // Add this line
}

const SchoolUpdates = () => {
  const navigation = useNavigation<NavigationProp>();
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');
  const [expandedCards, setExpandedCards] = useState<string[]>([]); // Add this line
  const [activeTab, setActiveTab] = useState('home'); // Add this line

  const handleBack = () => {
    navigation.goBack();
  };

  const toggleCardExpansion = (id: string) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  const FilterChip = ({ label, isActive, onPress }: { label: FilterType, isActive: boolean, onPress: () => void }) => (
    <TouchableOpacity 
      style={[styles.filterChip, isActive && styles.activeFilterChip]} 
      onPress={onPress}
    >
      <Text style={[styles.filterChipText, isActive && styles.activeFilterChipText]}>{label}</Text>
    </TouchableOpacity>
  );

  const UpdateCard = ({ 
    tags, 
    title, 
    description, 
    date,
    id 
  }: UpdateCardProps) => {
    const isExpanded = expandedCards.includes(id);
    const maxLines = isExpanded ? undefined : 2;

    return (
      <View style={styles.updateCard}>
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <View 
              key={index} 
              style={[
                styles.tag, 
                tag.toLowerCase() === 'urgent' && styles.urgentTag
              ]}
            >
              <Text style={[
                styles.tagText,
                tag.toLowerCase() === 'urgent' && styles.urgentTagText
              ]}>{tag}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.updateTitle}>{title}</Text>
        <Text 
          style={[
            styles.updateDescription,
            isExpanded && styles.expandedDescription
          ]} 
          numberOfLines={maxLines}
        >
          {description}
        </Text>
        <View style={styles.updateFooter}>
          <TouchableOpacity onPress={() => toggleCardExpansion(id)}>
            <Text style={styles.readMoreLink}>
              {isExpanded ? 'Show less' : 'Read more'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.updateDate}>{date}</Text>
        </View>
      </View>
    );
  };

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
          <Text style={styles.subtitle}>School Updates</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search updates..."
          placeholderTextColor="#666"
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        <FilterChip 
          label="All" 
          isActive={activeFilter === 'All'} 
          onPress={() => setActiveFilter('All')} 
        />
        <FilterChip 
          label="Announcement" 
          isActive={activeFilter === 'Announcement'} 
          onPress={() => setActiveFilter('Announcement')} 
        />
        <FilterChip 
          label="Event" 
          isActive={activeFilter === 'Event'} 
          onPress={() => setActiveFilter('Event')} 
        />
        <FilterChip 
          label="Academic" 
          isActive={activeFilter === 'Academic'} 
          onPress={() => setActiveFilter('Academic')} 
        />
      </ScrollView>

      <ScrollView 
        style={styles.updatesContainer}
        contentContainerStyle={styles.updatesContentContainer}
        showsVerticalScrollIndicator={false}
        bounces={true}
        overScrollMode="never"
      >
        <UpdateCard
          id="1" // Add unique IDs for each card
          tags={['Announcement', 'Urgent']}
          title="Enrollment for Second Semester Now Open"
          description="Enrollment for the second semester of Academic Year 2024-2025 is now open. Please visit the Registrar's Office or use the online enrollment system."
          date="Apr 15, 2024"
        />
        <UpdateCard
          id="2"
          tags={['Announcement']}
          title="Scholarship Applications for AY 2024-2025"
          description="Scholarship applications for the Academic Year 2024-2025 are now being accepted. Deadline for submission is May 15, 2024."
          date="Apr 15, 2024"
        />
      </ScrollView>

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
    textShadowColor: 'rgba(0, 0, 0, 0.15)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.85)',
    fontWeight: '500',
    letterSpacing: 0.3,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 24,
    height: 40,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    height: '100%',
  },
  filterContainer: {
    paddingHorizontal: 16,
    marginVertical: 8,
    height: 40, // Increased from 10 to give more space
    marginBottom: 16,
  },
  filterChip: {
    paddingHorizontal: 16, // Slightly reduced from 20 to optimize space
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginRight: 8,
    height: 30, // Increased from 30 to make buttons more visible
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    minWidth: 90, // Increased from 80 to ensure text fits better
  },
  activeFilterChip: {
    backgroundColor: '#333',
    elevation: 2,
    shadowOpacity: 0.15,
  },
  filterChipText: {
    color: '#666',
    fontSize: 13,
    fontWeight: '500',
  },
  activeFilterChipText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  updatesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: -350, // Added to move cards up and fill the gap
    marginBottom: 60, // Add space for navigation bar
  },
  updatesContentContainer: {
    paddingBottom: 100, // Increased to provide space for bottom navigation
  },
  updateCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tag: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  urgentTag: {
    backgroundColor: '#FFE5E5',
  },
  tagText: {
    color: '#666',
    fontSize: 12,
  },
  urgentTagText: {
    color: '#FF4444',
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  updateDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  expandedDescription: {
    marginBottom: 16,
  },
  updateFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readMoreLink: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 4, // Add padding for better touch target
  },
  updateDate: {
    color: '#666',
    fontSize: 12,
  },
});

export default SchoolUpdates; 