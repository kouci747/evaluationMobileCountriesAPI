import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; //STEP 1

const MainScreen = () => {
  const navigation = useNavigation(); //STEP 2
  return (
    <View>
      <Text> Main Screen</Text>

      <Button
        title="Look for countries"
        title="look for countries"
        onPress={() => navigation.navigate('countryListNav')}
      />
    </View>
  );
};

export default MainScreen;
