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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import Favorites from './src/screens/favorites';
import ContextProvider from './src/context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    // <SafeAreaView>
    //   <View>
    //     <Text>Countries API</Text>
    //     <>
    //       {/* <CountryCard /> */}
    //       <MainScreen />
    //       <CountryList />
    //       <CountryDetail />
    //     </>
    //   </View>
    // </SafeAreaView>
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, //mettre à true pour afficher les headers de toutes les pages
          }}>
          <Stack.Screen name="TabNavigator" options={{title: 'Tabs'}}>
            {() => (
              <Tab.Navigator
                screenOptions={{
                  headerShown: false, //mettre à true pour afficher les headers de toutes les pages
                }}>
                <Tab.Screen name="MainScreen" component={MainScreen} />
                <Tab.Screen name="CountryListNav" component={CountryList} />
                <Tab.Screen name="favoritesNav" component={Favorites} />
              </Tab.Navigator>
            )}
          </Stack.Screen>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="countryListNav" component={CountryList} />
          <Stack.Screen name="countryDetailNav" component={CountryDetail} />
          <Stack.Screen name="favoritesNav" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
