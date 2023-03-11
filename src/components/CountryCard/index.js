import React from 'react';
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
      <Image
        source={{
          uri: 'https://fr.web.img2.acsta.net/pictures/18/12/03/08/53/5968896.jpg',
        }}
        style={{width: 200, height: 200}}
      />
      <Text>{props.countryName}</Text>

      <Text>{props.countryCapital}</Text>
      <Image source={{uri: props.flag}} />
      <Text> La population est de {props.population}</Text>
      <Text> les habitants y parlent {props.languages}</Text>

      {/*add a map here*/}
    </View>
  );
};

export default CountryCard;
