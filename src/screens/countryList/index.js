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

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryNames = response.data.map(country => country.name.common);
        const sortedCountries = countryNames.sort();
        setCountries(sortedCountries);
        //console.log('Country names:', countryNames);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderCountry = ({item}) => (
    <View>
      <TouchableOpacity>
        <Text>{item}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Text> Country List</Text>

      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={item => item}
      />
    </View>
  );
};

export default CountryList;
