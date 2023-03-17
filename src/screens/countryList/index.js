import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation, useRoute} from '@react-navigation/native'; //STEP 1
import styled from 'styled-components';
// import Snackbar from 'react-native-snackbar';
// import Spinner from 'react-native-loading-spinner-overlay';
import {ActivityIndicator} from 'react-native';

const CountryList = () => {
  const navigation = useNavigation(); //STEP 2
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = response.data.map(country => ({
          name: country.name.common,
          capital: country.capital,
          flag: country.flags && country.flags.png,
          population: country.population,
          latitude: country.latlng && country.latlng[0],
          longitude: country.latlng && country.latlng[1],
          capitalLat:
            country.capitalInfo &&
            country.capitalInfo.latlng &&
            country.capitalInfo.latlng[0],
          //capitalLong: country.latlng && country.capitalInfo.latlng[1],
          capitalLong:
            country.capitalInfo &&
            country.capitalInfo.latlng &&
            country.capitalInfo.latlng[1],
          // languages: Object.values(country.languages).map(language => language),
        }));

        const sortedCountries = countryData.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setCountries(sortedCountries);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);

        console.log(error);
      });
  }, []);

  const renderCountry = ({item}) => (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('countryDetailNav', {
            pays: item.name,
            capital: item.capital,
            flag: item.flag,
            population: item.population,
            languages: item.languages,
            latitude: item.latitude,
            longitude: item.longitude,
            capitalLat: item.capitalLat,
            capitalLong: item.capitalLong,
            languages: item.languages,
          })
        }>
        <StyledText>{item.name}</StyledText>
      </TouchableOpacity>
    </View>
  );

  return (
    <Container>
      <Text>Country List</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={countries}
          renderItem={renderCountry}
          keyExtractor={item => item.name}
        />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #010814;
`;

const StyledText = styled.Text`
  height: 40px;
  width: 350px;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid gray;
  color: #fff;
`;

export default CountryList;
