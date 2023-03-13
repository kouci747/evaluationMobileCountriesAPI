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
const CountryList = () => {
  const navigation = useNavigation(); //STEP 2
  const [countries, setCountries] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get('https://restcountries.com/v3.1/all')
  //       .then(response => {
  //         const countryNames = response.data.map(country => country.name.common);
  //         //const countryCapital = response.data.map(country => country.capital);

  //         const sortedCountries = countryNames.sort();
  //         setCountries(sortedCountries);
  //         //console.log('Country names:', countryNames);
  //         //console.log('Country capitals:', countryCapital);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }, []);

  //   const renderCountry = ({item}) => (
  //     <View>
  //       <TouchableOpacity
  //         onPress={() =>
  //           navigation.navigate('countryDetailNav', {
  //             pays: item,
  //           })
  //         }>
  //         <Text>{item}</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  //   return (
  //     <View>
  //       <Text> Country List</Text>

  //       <FlatList
  //         data={countries}
  //         renderItem={renderCountry}
  //         keyExtractor={item => item}
  //       />
  //     </View>
  //   );
  // };

  // export default CountryList;

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryData = response.data.map(country => ({
          name: country.name.common,
          capital: country.capital,
          flag: country.flags && country.flags.png,
          population: country.population,
          latitude: country.latlng && country.latlng[0], // Access the first element of the latlng array
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
      })
      .catch(error => {
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
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <Text>Country List</Text>

      <FlatList
        data={countries}
        renderItem={renderCountry}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default CountryList;
