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
    </Container>
  );
};

// const Container = styled.View`
//   flex: 1;
//   background-color: #000;
//   align-items: center;
//   justify-content: center;
// `;

// const StyledTextInput = styled.TextInput`
//   background-color: #222; /* slightly lighter than #000 */
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 10px;
//   font-size: 16px;
//   margin-bottom: 20px;
// `;
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
