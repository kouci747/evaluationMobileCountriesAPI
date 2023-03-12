import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CountryCard from '../../components/CountryCard';
import axios from 'axios';

const CountryDetail = ({route}) => {
  const {
    pays,
    capital,
    flag,
    population,
    //  languages,
    latitude,
    longitude,
    capitalLat,
    capitalLong,
  } = route.params;

  //IT WOULD BE INTERRESTING TO FIND WHY THIS SHIT DID NOT WORK
  // console.log('nom du pays:', pays);
  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.com/v3.1/name/${pays}`)

  //     .then(response => {
  //       const countryData = response.data[0];
  //       console.log(countryData);
  //     })
  //     .catch(error => {
  //       console.log('petite erreur', error);
  //     });
  // }, []);
  console.log(flag);

  return (
    <View>
      <CountryCard
        countryName={pays}
        countryCapital={capital}
        flag={flag}
        population={population}
        //languages={languages}
        latitude={latitude}
        longitude={longitude}
        capitalLat={capitalLat}
        capitalLong={capitalLong}
      />
    </View>
  );
};

export default CountryDetail;
