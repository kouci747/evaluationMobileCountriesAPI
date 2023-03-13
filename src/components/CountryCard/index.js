import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const CountryCard = props => {
  return (
    <View>
      {/* <Image
        source={{
          uri: 'https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg',
        }}
        style={{width: 200, height: 200}}
      /> */}
      <Text>{props.countryName}</Text>

      <Text>{props.countryCapital}</Text>
      <Image
        source={{uri: props.flag}}
        style={{width: 200, height: 200, resizeMode: 'contain'}}
      />
      <Text> La population est de {props.population}</Text>
      {/* <Text> les habitants y parlent {props.languages}</Text> */}
      {Number(props.latitude) > 0 ? (
        <Text>latitude: {props.latitude} Nord</Text>
      ) : (
        <Text>latitude: {props.latitude} Sud</Text>
      )}
      {Number(props.longitude) > 0 ? (
        <Text>longitude: {props.longitude} Est</Text>
      ) : (
        <Text>longitude: {props.longitude} Ouest</Text>
      )}

      <Text>
        Longitude d'{props.countryCapital} : {props.capitalLong}
      </Text>
      {Number(props.capitalLat) >= 0 ? (
        <Text>
          Latitude d'{props.countryCapital} : {props.capitalLat} Nord
        </Text>
      ) : (
        <Text>
          Latitude d'{props.countryCapital} : {props.capitalLat} Sud
        </Text>
      )}

      {/* Lorsqu'une latitude est positive : est elle dans l'hémisphère nord, sud sinon */}
      {/* Lorsqu'une longitude est positive : elle est à l'est, ouest sinon */}
      {Number(props.capitalLong) >= 0 ? (
        <Text>
          Longitude d'{props.countryCapital} : {props.capitalLat} Est
        </Text>
      ) : (
        <Text>
          Longitude d'{props.countryCapital} : {props.capitalLat} Ouest
        </Text>
      )}

      {/*add a map here*/}
    </View>
  );
};

export default CountryCard;
