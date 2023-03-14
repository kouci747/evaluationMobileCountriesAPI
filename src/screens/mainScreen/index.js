import React, {useState, useEffect} from 'react';
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
import {TextInput} from 'react-native';
import axios from 'axios';
import styled from 'styled-components';
import Snackbar from 'react-native-snackbar';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-toast-message';

const MainScreen = () => {
  const navigation = useNavigation(); //STEP 2

  const [country, setCountry] = useState('');
  const [countryName, setCountryName] = useState('');
  const [countryCapital, setCountryCapital] = useState('');
  const [countryPopulation, setCountryPopulation] = useState('');
  const [flag, setFlag] = useState('');
  //coorodonnées de la capitale du pays
  const [capitalLat, setCapitalLat] = useState('');
  const [capitalLong, setCapitalLong] = useState('');
  //coordonnées du point central du pays
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [dataExists, setDataExists] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!country) return; //ajouter vette ligne pour éviter les req call API lorsque country est vide
    axios.get(`https://restcountries.com/v3.1/name/${country}`).then(res => {
      const countryData = res.data[0];
      setDataExists(true);

      //console.log(countryData); Works

      const Countryname = countryData.name.common;
      const Countrycapital = countryData.capital[0]; //sans le [0], il renvoie ['Algiers'] au lieu de Algiers i.e tout l'array
      const Countrypopulation = countryData.population;
      const Countryflag = countryData.flags && countryData.flags.png;
      const CapitalLat =
        countryData.capitalInfo && countryData.capitalInfo.latlng[0];
      const CapitalLong =
        countryData.capitalInfo &&
        countryData.capitalInfo.latlng &&
        countryData.capitalInfo.latlng[1];

      const Latitude = countryData.latlng && countryData.latlng[0];
      const Longitude = countryData.latlng && countryData.latlng[1];
      setCountryName(Countryname),
        setCountryCapital(Countrycapital),
        setCountryPopulation(Countrypopulation);
      setFlag(Countryflag);
      setCapitalLat(CapitalLat), setCapitalLong(CapitalLong);
      setLatitude(Latitude), setLongitude(Longitude);
      setIsLoaded(true);

      //console.log(Countryname, Countrycapital, Countrypopulation); Works
    });
    //console.log(`https://restcountries.com/v3.1/name/${country}`); Works
  });

  const handleSearch = () => {
    if (country && dataExists) {
      navigation.navigate('countryDetailNav', {
        //pays : param attendu dans countryDetail
        //countryName : state du useState
        pays: countryName,
        capital: countryCapital,
        population: countryPopulation,
        flag: flag,
        capitalLat: capitalLat,
        capitalLong: capitalLong,
        latitude: latitude,
        longitude: longitude,
      });
      console.log(country);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter a Valid country Name',
        //text2: 'This is some something 👋',
        visibilityTime: 3000,
      });
    }
  };

  return (
    <Container>
      <Text> Main Screen</Text>
      <Button
        title="Browse Country List"
        onPress={() => navigation.navigate('countryListNav')}
        style={{marginBottom: 20}}
      />
      <StyledTextInput
        placeholder="enter a country "
        placeholderTextColor="#fff"
        value={country}
        onChangeText={text => setCountry(text)}
        style={{marginBottom: 20}}
      />
      <Button
        title="Search for a specific country"
        onPress={handleSearch}
        style={{marginBottom: 20}}
      />
      {/* <Button
        title="test toast"
        onPress={() =>
          Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
            visibilityTime: 3000,
          })
        }
      /> */}
      {/* TOAST must be the last child of the View to work */}
      <Toast />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #010814;
`;

const StyledTextInput = styled.TextInput`
  height: 40px;
  width: 200px;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  color: #fff;
`;

export default MainScreen;
