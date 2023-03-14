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
  Linking, //pour accéder aux liens URL
  useColorScheme,
  View,
} from 'react-native';
import styled from 'styled-components';

const CountryCard = props => {
  return (
    <Container>
      <CountryNameText>{props.countryName}</CountryNameText>

      <DetailText>{props.countryCapital}</DetailText>
      <TouchableOpacity
        onPress={() =>
          Linking.openURL(`https://en.wikipedia.org/wiki/${props.countryName}`)
        }>
        <Image
          source={{uri: props.flag}}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </TouchableOpacity>

      <DetailText>La population est de {props.population} habitants</DetailText>

      {Number(props.latitude) > 0 ? (
        <DetailText>Latitude centrale: {props.latitude} Nord</DetailText>
      ) : (
        <DetailText>Latitude centrale: {props.latitude} Sud</DetailText>
      )}
      {Number(props.longitude) > 0 ? (
        <DetailText>longitude centrale : {props.longitude} Est</DetailText>
      ) : (
        <DetailText>longitude centrale : {props.longitude} Ouest</DetailText>
      )}

      {/* <Text>
        Longitude d'{props.countryCapital} : {props.capitalLong}
      </Text> */}
      {Number(props.capitalLat) >= 0 ? (
        <DetailText>
          Latitude de {props.countryCapital} : {props.capitalLat} Nord
        </DetailText>
      ) : (
        <DetailText>
          Latitude de {props.countryCapital} : {props.capitalLat} Sud
        </DetailText>
      )}

      {/* Lorsqu'une latitude est positive : est elle dans l'hémisphère nord, sud sinon */}
      {/* Lorsqu'une longitude est positive : elle est à l'est, ouest sinon */}
      {Number(props.capitalLong) >= 0 ? (
        <DetailText>
          Longitude de {props.countryCapital} : {props.capitalLong} Est
        </DetailText>
      ) : (
        <DetailText>
          Longitude de {props.countryCapital} : {props.capitalLong} Ouest
        </DetailText>
      )}

      {/*add a map here*/}
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #010814;
`;

const DetailText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-top: 5px;
`;

const CountryNameText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export default CountryCard;
