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
} from 'react-native';

const MainScreen = () => {
  return (
    <View>
      <Text> Main Screen</Text>
      <TouchableOpacity>
        <Text>Click here to start looking for countries</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;
