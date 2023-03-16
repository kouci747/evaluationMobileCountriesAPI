import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Context} from '../../context';
import styled from 'styled-components/native';

function Favorites({route}) {
  const {favorites, setFavorites, a} = useContext(Context);

  const navigation = useNavigation(); //STEP 2
  //const [favCountries, setFavCountries] = useState();
  const {paysFav} = route.params;

  //récupérer les pays mis en favoris en paramètres depuis countryDetail puis les garder ici grace à
  //un useState([])
  return (
    <View>
      <Text>
        Favorite countries
        {favorites?.map(fav => {
          return <Text>{fav}</Text>;
        })}
      </Text>
    </View>
  );

  // return (
  //   <ScrollView>
  //     {favorites?.map((fav, index) => (
  //       <View key={index}>
  //         <Text>{fav}</Text>
  //       </View>
  //     ))}
  //   </ScrollView>
  // );
}

export default Favorites;
