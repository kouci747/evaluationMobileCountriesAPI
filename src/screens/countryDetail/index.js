import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import CountryCard from '../../components/CountryCard';
import axios from 'axios';
import styled from 'styled-components';
import Toast from 'react-native-toast-message';
import {Context} from '../../context';
//import Context from '../../context';

const CountryDetail = ({route}) => {
  const navigation = useNavigation(); //STEP 2
  const {
    pays,
    capital,
    flag,
    population,
    latitude,
    longitude,
    capitalLat,
    capitalLong,
  } = route.params;

  console.log(flag);
  //ce useEffect s'execute une seule fois au debut du chargement de la page
  //=> make it reappear whenever a button is clicked

  useEffect(() => {
    Toast.show({
      type: 'success',
      text1: `Informations about ${pays}`,
      visibilityTime: 5000,
    });
  }, []);

  const {favorites, setFavorites} = useContext(Context);

  return (
    <Container>
      <CountryCard
        countryName={pays}
        countryCapital={capital}
        flag={flag}
        population={population}
        latitude={latitude}
        longitude={longitude}
        capitalLat={capitalLat}
        capitalLong={capitalLong}
      />
      <Button
        title="Add to favorites"
        onPress={() => {
          Toast.show({
            type: 'success',
            text1: 'Ajouté aux favoris',

            visibilityTime: 3000,
          });

          setFavorites(oldState => [...favorites, pays]); //ajoute le pays dans le tableau des favoris
        }}
        style={{marginBottom: 20}}
      />
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

export default CountryDetail;
