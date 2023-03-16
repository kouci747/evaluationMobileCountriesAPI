import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Context} from '../../context';
import styled from 'styled-components/native';

function Favorites({route}) {
  //const {favorites, setFavorites} = useContext(Context);
  const {favorites, deleteFavorite} = useContext(Context);

  const navigation = useNavigation(); //STEP 2
  //const [favCountries, setFavCountries] = useState();

  //récupérer les pays mis en favoris en paramètres depuis countryDetail puis les garder ici grace à
  //un useState([])
  return (
    <SafeAreaView>
      <Text>Favorite countries </Text>
      {favorites?.map(fav => {
        return (
          <>
            <Text
              onPress={() =>
                Linking.openURL(`https://en.wikipedia.org/wiki/${fav}`)
              }>
              {fav}
            </Text>
            <Text onPress={() => deleteFavorite(fav)}>X</Text>
          </>
        );
      })}
    </SafeAreaView>
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
