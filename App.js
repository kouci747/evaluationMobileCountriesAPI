import React from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CountryCard from './src/components/CountryCard';
import CountryDetail from './src/screens/countryDetail';
import CountryList from './src/screens/countryList';
import MainScreen from './src/screens/mainScreen';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Countries API</Text>
        <>
          {/* <CountryCard /> */}
          <MainScreen />
          <CountryList />
          <CountryDetail />
        </>
      </View>
    </SafeAreaView>
  );
}

export default App;
