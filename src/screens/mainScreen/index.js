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

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/name/${country}`).then(res => {
      const countryData = res.data[0];
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

      //console.log(Countryname, Countrycapital, Countrypopulation); Works
    });
    //console.log(`https://restcountries.com/v3.1/name/${country}`); Works
  });

  const handleSearch = () => {
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

      //flag,
    });
    //
    console.log(country);
  };

  return (
    <View>
      <Text> Main Screen</Text>

      <Button
        title="Browse Country List"
        onPress={() => navigation.navigate('countryListNav')}
      />

      <TextInput
        placeholder="enter a country "
        value={country}
        onChangeText={text => setCountry(text)}
      />

      <Button title="Search for a specific country" onPress={handleSearch} />
    </View>
  );
};

export default MainScreen;
